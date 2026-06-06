"use client"

import { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1]

const NAV_GROUPS = [
  {
    label: "Resumen",
    items: [{ id: "dashboard", label: "Panel Principal", icon: "home" }],
  },
  {
    label: "Gestión",
    items: [
      { id: "clientes", label: "Clientes", icon: "users" },
      { id: "ordenes", label: "Órdenes de Compra", icon: "cart" },
      { id: "productos", label: "Mis Productos", icon: "box" },
      { id: "descuentos", label: "Descuentos", icon: "tag" },
    ],
  },
  {
    label: "Análisis",
    items: [
      { id: "ventas", label: "Resumen de Ventas", icon: "trend" },
      { id: "stock", label: "Alertas de Stock", icon: "warn" },
    ],
  },
  {
    label: "Mi empresa",
    items: [{ id: "config", label: "Configuración", icon: "gear" }],
  },
]

const VIEWS = ["dashboard", "ventas", "stock"]

const Shell = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  width: 100%;
  height: 560px;
  background: var(--color-bg);
  font-family: ${({ theme }) => theme.fonts.body};
  color: var(--color-text);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 64px 1fr;
    height: 480px;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 1rem 0.65rem;
  border-right: 1px solid var(--color-border);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent);
  overflow: hidden;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.55rem;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  color: var(--color-text);

  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: var(--gradient-brand);
    box-shadow: 0 0 12px var(--color-accentGlow);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    strong { display: none; }
  }
`

const GroupLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-textMuted);
  padding: 0.6rem 0.55rem 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.55rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.82rem;
  color: ${({ $active, theme }) => ($active ? "var(--color-text)" : "var(--color-textTertiary)")};
  background: ${({ $active }) => ($active ? "rgba(6, 215, 255, 0.08)" : "transparent")};
  position: relative;
  transition: all 0.25s;

  ${({ $active, theme }) =>
    $active &&
    css`
      &::before {
        content: '';
        position: absolute;
        left: -0.65rem;
        top: 25%;
        bottom: 25%;
        width: 2px;
        border-radius: 2px;
        background: var(--color-accent);
      }
    `}

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: ${({ $active, theme }) => ($active ? "var(--color-accent)" : "var(--color-textMuted)")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    span.label { display: none; }
  }
`

const NavBadge = styled.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 0.35rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  background: rgba(239, 68, 68, 0.15);
  color: var(--color-error);
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: ${({ theme }) => theme.borderRadius.full};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

function NavIcon({ name }) {
  const props = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" }
  switch (name) {
    case "home":
      return <svg viewBox="0 0 24 24" {...props}><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>
    case "users":
      return <svg viewBox="0 0 24 24" {...props}><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M19 7.13a4 4 0 010 7.75" /></svg>
    case "cart":
      return <svg viewBox="0 0 24 24" {...props}><circle cx="9" cy="21" r="1.5" /><circle cx="18" cy="21" r="1.5" /><path d="M3 3h2l2.7 12.4a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 7H6" /></svg>
    case "box":
      return <svg viewBox="0 0 24 24" {...props}><path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" /></svg>
    case "tag":
      return <svg viewBox="0 0 24 24" {...props}><path d="M20.6 12.6L12 21.2a2 2 0 01-2.8 0L2 14V2h12l7.4 7.4a2 2 0 010 2.8z" /><circle cx="7" cy="7" r="1.2" /></svg>
    case "trend":
      return <svg viewBox="0 0 24 24" {...props}><path d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>
    case "warn":
      return <svg viewBox="0 0 24 24" {...props}><path d="M10.3 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" /></svg>
    case "gear":
      return <svg viewBox="0 0 24 24" {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
    default:
      return null
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.01);
`

const TopTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin: 0;
`

const PeriodPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.6rem;
  padding: 0.25rem 0.6rem;
  background: var(--color-bgCard);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: var(--color-textTertiary);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const Spacer = styled.div`
  flex: 1;
`

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--gradient-brand);
  box-shadow: 0 0 12px var(--color-accentGlow);
`

const ViewArea = styled.div`
  flex: 1;
  padding: 1rem 1.25rem;
  overflow: hidden;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.85rem;
  }
`

const View = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  height: 100%;
`

const StatRow = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols = 4 }) => `repeat(${$cols}, 1fr)`};
  gap: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StatCard = styled(motion.div)`
  padding: 0.7rem 0.85rem;
  background: var(--color-bgCard);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-textTertiary);
`

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-text);
`

const StatHint = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  color: var(--color-textTertiary);
`

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 0.7rem;
  flex: 1;
  min-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-bgCard);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid var(--color-border);

  h5 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-text);
    letter-spacing: -0.01em;
    margin: 0;
  }

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.65rem;
    color: var(--color-textTertiary);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.4fr 0.9fr 0.9fr 0.6fr;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  background: rgba(255, 255, 255, 0.02);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-textTertiary);

  span:last-child { text-align: right; }
`

const TableRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 0.85fr 1.4fr 0.9fr 0.9fr 0.6fr;
  align-items: center;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-textSecondary);

  &:last-child { border-bottom: none; }
`

const OrderNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: var(--color-text);
`

const Money = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: var(--color-text);
`

const DateCell = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.74rem;
  color: var(--color-textTertiary);
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.13rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: ${({ $variant }) =>
    $variant === "entregado"
      ? "rgba(16,185,129,0.12)"
      : $variant === "enviado"
      ? "rgba(6,215,255,0.12)"
      : $variant === "aprobado"
      ? "rgba(30,64,175,0.14)"
      : "rgba(255,189,46,0.12)"};
  color: ${({ $variant, theme }) =>
    $variant === "entregado"
      ? "var(--color-success)"
      : $variant === "enviado"
      ? "var(--color-accent)"
      : $variant === "aprobado"
      ? "var(--color-accentAlt)"
      : "#FFBD2E"};
  border: 1px solid ${({ $variant }) =>
    $variant === "entregado"
      ? "rgba(16,185,129,0.3)"
      : $variant === "enviado"
      ? "rgba(6,215,255,0.3)"
      : $variant === "aprobado"
      ? "rgba(30,64,175,0.32)"
      : "rgba(255,189,46,0.3)"};
`

const SmallBtn = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.22rem 0.55rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  background: rgba(6,215,255,0.08);
  color: var(--color-accent);
  border: 1px solid var(--color-borderAccent);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-left: auto;
`

const StatusList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
  color: var(--color-textSecondary);

  &:last-child { border-bottom: none; }
`

const StatusCount = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
`

const ChartCard = styled(Card)`
  padding: 0;
`

const ChartBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.9rem 1rem 0.75rem;
  gap: 0.5rem;
  min-height: 0;
`

const ChartMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.35rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.7rem;
    color: var(--color-success);
  }
`

const Bars = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: end;
  gap: 0.32rem;
  min-height: 120px;
`

const Bar = styled(motion.div)`
  background: var(--gradient-brand);
  border-radius: 3px 3px 0 0;
  width: 100%;
  box-shadow: 0 0 12px rgba(6,215,255,0.2);
  opacity: 0.95;
`

const BarLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.32rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  text-align: center;
  color: var(--color-textTertiary);
`

const AlertSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
`

const AlertTile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.85rem 0.95rem;
  background: var(--color-bgCard);
  border: 1px solid ${({ $tone }) =>
    $tone === "crit" ? "rgba(239, 68, 68, 0.35)" : "rgba(255, 189, 46, 0.3)"};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const AlertCount = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.7rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ $tone, theme }) => ($tone === "crit" ? "var(--color-error)" : "#FFBD2E")};
`

const AlertLabel = styled.span`
  font-size: 0.78rem;
  color: var(--color-textSecondary);
`

const AlertRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.4fr 0.7fr 0.7fr 0.7fr;
  align-items: center;
  padding: 0.55rem 0.9rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-textSecondary);

  &:last-child { border-bottom: none; }
`

const ProductCell = styled.span`
  color: var(--color-text);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
`

const SeverityDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $tone, theme }) => ($tone === "crit" ? "var(--color-error)" : "#FFBD2E")};
  box-shadow: 0 0 8px ${({ $tone }) => ($tone === "crit" ? "rgba(239,68,68,0.5)" : "rgba(255,189,46,0.5)")};
`

const recentOrders = [
  { num: "PO-04821", buyer: "Distribuidora Norte", date: "20 may", status: "entregado", amount: "142 blt." },
  { num: "PO-04820", buyer: "Mercado Central S.R.L.", date: "20 may", status: "enviado", amount: "89 blt." },
  { num: "PO-04819", buyer: "Almacén Don Pedro", date: "19 may", status: "aprobado", amount: "46 blt." },
  { num: "PO-04818", buyer: "Súper Hogar", date: "19 may", status: "pendiente", amount: "186 blt." },
  { num: "PO-04817", buyer: "Mayorista Suárez", date: "18 may", status: "entregado", amount: "68 blt." },
]

const statusCounters = [
  { label: "Pendiente", count: 8, tone: "warn" },
  { label: "Aprobado", count: 14, tone: "info" },
  { label: "Rechazado", count: 2, tone: "muted" },
  { label: "Enviado", count: 11, tone: "accent" },
  { label: "Entregado", count: 39, tone: "success" },
]

function DashboardView() {
  return (
    <View
      key="dashboard"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <StatRow $cols={4}>
        {[
          { label: "Órdenes Totales", value: "74", hint: "8 pendientes de aprobación" },
          { label: "Bultos Totales", value: "531 blt.", hint: "Promedio · 12 blt. / orden" },
          { label: "Pendientes de Aprobación", value: "8", hint: "Requieren atención" },
          { label: "Tasa de Finalización", value: "92%", hint: "39 / 42 entregadas" },
        ].map((s, i) => (
          <StatCard
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
          >
            <StatLabel>{s.label}</StatLabel>
            <StatValue>{s.value}</StatValue>
            <StatHint>{s.hint}</StatHint>
          </StatCard>
        ))}
      </StatRow>

      <Split>
        <Card>
          <CardHead>
            <h5>Órdenes Recientes</h5>
            <small>Últimas 5</small>
          </CardHead>
          <TableHead>
            <span>Número</span>
            <span>Empresa Compradora</span>
            <span>Fecha</span>
            <span>Estado</span>
            <span>Bultos</span>
          </TableHead>
          {recentOrders.map((o, i) => (
            <TableRow
              key={o.num}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            >
              <OrderNum>{o.num}</OrderNum>
              <span>{o.buyer}</span>
              <DateCell>{o.date}</DateCell>
              <span><StatusBadge $variant={o.status}>{o.status}</StatusBadge></span>
              <Money style={{ textAlign: "right" }}>{o.amount}</Money>
            </TableRow>
          ))}
        </Card>

        <Card>
          <CardHead>
            <h5>Resumen de Estados</h5>
            <small>Este mes</small>
          </CardHead>
          <StatusList>
            {statusCounters.map((s) => (
              <StatusItem key={s.label}>
                <span>{s.label}</span>
                <StatusCount>{s.count}</StatusCount>
              </StatusItem>
            ))}
          </StatusList>
        </Card>
      </Split>
    </View>
  )
}

const monthlyRevenue = [0.42, 0.55, 0.48, 0.62, 0.58, 0.71, 0.65, 0.78, 0.72, 0.88, 0.82, 0.95]
const monthlyLabels = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]

function VentasView() {
  return (
    <View
      key="ventas"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <StatRow $cols={6}>
        {[
          { label: "Pedidos Totales", value: "742" },
          { label: "Bultos Despachados", value: "12.840" },
          { label: "Unidades Activas", value: "12.840" },
          { label: "Clientes Activos", value: "168" },
          { label: "Blt. Prom. / Orden", value: "17 blt." },
          { label: "Productos Activos", value: "320" },
        ].map((s, i) => (
          <StatCard
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          >
            <StatLabel>{s.label}</StatLabel>
            <StatValue>{s.value}</StatValue>
          </StatCard>
        ))}
      </StatRow>

      <ChartCard>
        <CardHead>
          <h5>Tendencia de Entregas</h5>
          <small>Este año · bultos</small>
        </CardHead>
        <ChartBody>
          <ChartMeta>
            <strong>12.840 blt.</strong>
            <small>+ 32% vs año anterior</small>
          </ChartMeta>
          <Bars>
            {monthlyRevenue.map((h, i) => (
              <Bar
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h * 100}%` }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: easeOut }}
                style={{ alignSelf: "end" }}
              />
            ))}
          </Bars>
          <BarLabels>
            {monthlyLabels.map((l, i) => <span key={i}>{l}</span>)}
          </BarLabels>
        </ChartBody>
      </ChartCard>
    </View>
  )
}

const stockAlerts = [
  { product: "Yerba Mate La Tranquera 1kg", sku: "YM-1000", current: 4, min: 50, tone: "crit" },
  { product: "Aceite Girasol Cocinero 1.5L", sku: "AG-1500", current: 9, min: 60, tone: "crit" },
  { product: "Detergente Magistral 750ml", sku: "DT-0750", current: 18, min: 40, tone: "warn" },
  { product: "Galletitas Don Satur 220g", sku: "GS-0220", current: 22, min: 80, tone: "warn" },
  { product: "Arroz Gallo Oro 1kg", sku: "AR-1000", current: 12, min: 40, tone: "warn" },
]

function StockView() {
  return (
    <View
      key="stock"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <AlertSummary>
        <AlertTile $tone="crit">
          <AlertLabel>Críticos · stock bajo mínimo</AlertLabel>
          <AlertCount $tone="crit">2</AlertCount>
        </AlertTile>
        <AlertTile $tone="warn">
          <AlertLabel>Advertencia · stock cercano al mínimo</AlertLabel>
          <AlertCount $tone="warn">3</AlertCount>
        </AlertTile>
      </AlertSummary>

      <Card>
        <CardHead>
          <h5>Productos con Alerta</h5>
          <small>Ver Todas</small>
        </CardHead>
        <TableHead style={{ gridTemplateColumns: "1.4fr 0.7fr 0.7fr 0.7fr" }}>
          <span>Producto</span>
          <span>SKU</span>
          <span>Stock</span>
          <span style={{ textAlign: "right" }}>Mínimo</span>
        </TableHead>
        {stockAlerts.map((p, i) => (
          <AlertRow
            key={p.sku}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18 + i * 0.07 }}
          >
            <ProductCell>
              <SeverityDot $tone={p.tone} />
              {p.product}
            </ProductCell>
            <DateCell>{p.sku}</DateCell>
            <span style={{ color: p.tone === "crit" ? "#EF4444" : "#FFBD2E", fontFamily: "var(--font-mono)" }}>
              {p.current}
            </span>
            <Money style={{ textAlign: "right" }}>{p.min}</Money>
          </AlertRow>
        ))}
      </Card>
    </View>
  )
}

const VIEW_META = {
  dashboard: { title: "Panel Principal", period: "Este Mes", component: DashboardView },
  ventas: { title: "Resumen de Ventas", period: "Este Año", component: VentasView },
  stock: { title: "Alertas de Stock", period: "Tiempo real", component: StockView },
}

export function AbastolinkMockup() {
  const [viewIdx, setViewIdx] = useState(0)
  const activeView = VIEWS[viewIdx]
  const meta = VIEW_META[activeView]
  const ActiveView = meta.component

  useEffect(() => {
    const id = setInterval(() => setViewIdx((p) => (p + 1) % VIEWS.length), 4800)
    return () => clearInterval(id)
  }, [])

  return (
    <Shell>
      <Sidebar>
        <Brand>
          <span />
          <strong>AbastoLink</strong>
        </Brand>
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <GroupLabel>{group.label}</GroupLabel>
            {group.items.map((item) => (
              <NavItem key={item.id} $active={item.id === activeView}>
                <NavIcon name={item.icon} />
                <span className="label">{item.label}</span>
                {item.id === "stock" && <NavBadge>2</NavBadge>}
              </NavItem>
            ))}
          </div>
        ))}
      </Sidebar>

      <Main>
        <TopBar>
          <TopTitle>{meta.title}</TopTitle>
          <PeriodPill>{meta.period}</PeriodPill>
          <Spacer />
          <Avatar />
        </TopBar>
        <ViewArea>
          <AnimatePresence mode="wait">
            <ActiveView />
          </AnimatePresence>
        </ViewArea>
      </Main>
    </Shell>
  )
}
