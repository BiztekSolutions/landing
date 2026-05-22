"use client"

import { useCallback } from "react"
import styled, { keyframes, css } from "styled-components"
import { motion } from "framer-motion"
import {
  HiCodeBracket,
  HiPuzzlePiece,
  HiBolt,
  HiCloud,
  HiCpuChip,
  HiBriefcase,
} from "react-icons/hi2"
import { siteConfig } from "../config/siteConfig"

const ICON_MAP = {
  code: HiCodeBracket,
  integration: HiPuzzlePiece,
  automation: HiBolt,
  cloud: HiCloud,
  iot: HiCpuChip,
  consulting: HiBriefcase,
}

const easeOut = [0.22, 1, 0.36, 1]

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  isolation: isolate;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`

const SectionBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(circle at 85% 10%, rgba(6, 215, 255, 0.08), transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(30, 64, 175, 0.07), transparent 45%);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  max-width: 760px;
`

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
`

const Highlight = styled.span`
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const Sub = styled(motion.p)`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 560px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const Row = styled(motion.article)`
  --mx: 50%;
  --my: 50%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(320px, 380px);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  isolation: isolate;
  transition:
    border-color ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  &[data-reverse="true"] {
    grid-template-columns: minmax(320px, 380px) 1fr;
  }

  /* Cursor spotlight */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle 320px at var(--mx) var(--my),
      rgba(6, 215, 255, 0.08),
      transparent 60%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle gradient border on hover */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(6, 215, 255, 0.3), rgba(30, 64, 175, 0.0) 60%);
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.bgCardHover};
  }

  &:hover::before { opacity: 1; }
  &:hover::after { opacity: 1; }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};

    &[data-reverse="true"] {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }
`

const TextCol = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Row}[data-reverse="true"] & {
    order: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${Row}[data-reverse="true"] & {
      order: 1;
    }
  }
`

const MockupCol = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;

  ${Row}[data-reverse="true"] & {
    order: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${Row}[data-reverse="true"] & {
      order: 2;
    }
  }
`

const ServiceEyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.bgElevated};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
  width: fit-content;

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
  }

  svg {
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.colors.accent};
  }
`

const ServiceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.4rem, 2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.text};
`

const ServiceDesc = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;
`

/* ====================== Shared mockup chrome ====================== */

const MockPanel = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.95), rgba(14, 14, 20, 0.95));
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
`

const MockChrome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.85rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.015);
`

const MockDots = styled.div`
  display: flex;
  gap: 0.32rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`

const MockTitle = styled.div`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  strong {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`

const MockStatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.success};
  animation: mockDotPulse 1.8s ease-in-out infinite;

  @keyframes mockDotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
`

const MockBody = styled.div`
  position: relative;
  padding: 1rem 1.1rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
`

/* ====================== 1. Web & Mobile mockup ====================== */

const dashboardPulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`

const WMGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.55rem;
`

const WMStat = styled.div`
  padding: 0.55rem 0.65rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const WMLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const WMValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`

const WMHint = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  color: ${({ theme }) => theme.colors.success};
`

const WMChartWrap = styled.div`
  margin-top: 0.65rem;
  padding: 0.55rem 0.65rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const WMChartHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45rem;

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.62rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`

const WMPhoneFloat = styled.div`
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;
  width: 66px;
  height: 118px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.98), rgba(10, 10, 16, 0.98));
  border: 1px solid ${({ theme }) => theme.colors.borderHover};
  box-shadow: -10px 14px 28px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.03) inset;
  overflow: hidden;
  padding: 0.45rem 0.4rem 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
  animation: ${dashboardPulse} 4s ease-in-out infinite;
`

const WMPhoneNotch = styled.div`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 22px;
  height: 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.12);
`

const WMPhoneCard = styled.div`
  height: 16px;
  border-radius: 4px;
  background: ${({ $accent, theme }) =>
    $accent
      ? "linear-gradient(90deg, rgba(6, 215, 255, 0.25), rgba(30, 64, 175, 0.25))"
      : "rgba(255, 255, 255, 0.04)"};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

function WebMobileMockup() {
  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>tu-app</strong> · /dashboard
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <WMGrid>
          <WMStat>
            <WMLabel>Ventas</WMLabel>
            <WMValue>USD 18.4K</WMValue>
            <WMHint>+ 24%</WMHint>
          </WMStat>
          <WMStat>
            <WMLabel>Pedidos</WMLabel>
            <WMValue>142</WMValue>
            <WMHint>+ 12%</WMHint>
          </WMStat>
        </WMGrid>
        <WMChartWrap>
          <WMChartHead>
            <span>Últimos 7 días</span>
            <strong>+ 18%</strong>
          </WMChartHead>
          <svg viewBox="0 0 220 60" width="100%" height="48" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wmLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06D7FF" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="wmFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(6, 215, 255, 0.25)" />
                <stop offset="100%" stopColor="rgba(6, 215, 255, 0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L185 22 L220 8"
              fill="none"
              stroke="url(#wmLine)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: easeOut }}
            />
            <motion.path
              d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 18 L185 22 L220 8 L220 60 L0 60 Z"
              fill="url(#wmFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </svg>
        </WMChartWrap>
        <WMPhoneFloat>
          <WMPhoneNotch />
          <div style={{ height: 6 }} />
          <WMPhoneCard $accent />
          <WMPhoneCard />
          <WMPhoneCard />
          <WMPhoneCard />
        </WMPhoneFloat>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== 2. Integraciones mockup ====================== */

const IntFlowFrame = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
`

const IntSvg = styled.svg`
  width: 100%;
  max-width: 320px;
  height: auto;
  display: block;
`

const intDashFlow = keyframes`
  0% { stroke-dashoffset: 24; }
  100% { stroke-dashoffset: 0; }
`

const IntPath = styled.path`
  stroke: rgba(6, 215, 255, 0.55);
  stroke-width: 1.4;
  fill: none;
  stroke-dasharray: 4 4;
  animation: ${intDashFlow} 1.6s linear infinite;
`

function IntegrationNode({ x, y, label, sub, accent }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="-44"
        y="-22"
        width="88"
        height="44"
        rx="10"
        fill="rgba(255, 255, 255, 0.03)"
        stroke={accent ? "rgba(6, 215, 255, 0.45)" : "rgba(255, 255, 255, 0.12)"}
        strokeWidth="1"
      />
      <text
        x="0"
        y="-3"
        textAnchor="middle"
        fill="#FAFAFA"
        fontFamily="'IBM Plex Serif', serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="-0.3"
      >
        {label}
      </text>
      <text
        x="0"
        y="12"
        textAnchor="middle"
        fill="#71717A"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="7"
        letterSpacing="1"
      >
        {sub}
      </text>
    </g>
  )
}

function IntegrationsMockup() {
  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>flow</strong> · sync.live
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <IntFlowFrame>
          <IntSvg viewBox="0 0 300 200">
            <defs>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(6, 215, 255, 0.35)" />
                <stop offset="100%" stopColor="rgba(6, 215, 255, 0)" />
              </radialGradient>
            </defs>

            {/* Connection lines */}
            <IntPath d="M62 50 Q 110 70 138 96" />
            <IntPath d="M238 50 Q 190 70 162 96" />
            <IntPath d="M150 124 L 150 168" />

            {/* Side nodes */}
            <IntegrationNode x={62} y={40} label="WhatsApp" sub="MENSAJES" />
            <IntegrationNode x={238} y={40} label="Facturación" sub="API" />

            {/* Central hub */}
            <circle cx="150" cy="105" r="36" fill="url(#hubGlow)" />
            <motion.rect
              x="110"
              y="84"
              width="80"
              height="42"
              rx="10"
              fill="rgba(20, 20, 28, 0.95)"
              stroke="rgba(6, 215, 255, 0.55)"
              strokeWidth="1.2"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <text
              x="150"
              y="102"
              textAnchor="middle"
              fill="#FAFAFA"
              fontFamily="'IBM Plex Serif', serif"
              fontSize="11"
              fontWeight="600"
            >
              Tu sistema
            </text>
            <text
              x="150"
              y="116"
              textAnchor="middle"
              fill="#06D7FF"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="7"
              letterSpacing="1"
            >
              CORE
            </text>

            {/* Bottom node */}
            <IntegrationNode x={150} y={180} label="Email + CRM" sub="WEBHOOK" accent />
          </IntSvg>
        </IntFlowFrame>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== 3. Automatizacion mockup ====================== */

const AutoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const AutoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.7rem;
  background: ${({ $active }) =>
    $active ? "rgba(6, 215, 255, 0.06)" : "rgba(255, 255, 255, 0.02)"};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.borderAccent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  position: relative;
  overflow: hidden;
`

const AutoStep = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.textMuted};
  min-width: 22px;
`

const AutoLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  flex: 1;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.82rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.01em;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.04em;
  }
`

const AutoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.18rem 0.45rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.58rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $variant }) =>
    $variant === "done"
      ? "rgba(16, 185, 129, 0.12)"
      : $variant === "running"
      ? "rgba(6, 215, 255, 0.12)"
      : "rgba(255, 255, 255, 0.04)"};
  color: ${({ $variant, theme }) =>
    $variant === "done"
      ? theme.colors.success
      : $variant === "running"
      ? theme.colors.accent
      : theme.colors.textTertiary};
  border: 1px solid
    ${({ $variant }) =>
      $variant === "done"
        ? "rgba(16, 185, 129, 0.3)"
        : $variant === "running"
        ? "rgba(6, 215, 255, 0.3)"
        : "rgba(255, 255, 255, 0.08)"};
`

const AutoRunDot = styled(motion.span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentGlow};
`

function AutomatizacionMockup() {
  const steps = [
    { id: 1, title: "Pedido recibido", sub: "TRIGGER · WhatsApp", state: "done" },
    { id: 2, title: "Factura emitida", sub: "ACTION · ERP", state: "done" },
    { id: 3, title: "Aviso al cliente", sub: "ACTION · Email", state: "running" },
    { id: 4, title: "Reporte diario", sub: "SCHEDULE · 22:00", state: "queued" },
  ]

  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>workflow</strong> · pedido-nuevo
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <AutoList>
          {steps.map((s) => (
            <AutoRow key={s.id} $active={s.state === "running"}>
              <AutoStep $active={s.state === "running"}>
                {String(s.id).padStart(2, "0")}
              </AutoStep>
              <AutoLabel>
                <strong>{s.title}</strong>
                <span>{s.sub}</span>
              </AutoLabel>
              <AutoBadge $variant={s.state}>
                {s.state === "running" && (
                  <AutoRunDot
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1, 0.85] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
                {s.state === "done" ? "OK" : s.state === "running" ? "Run" : "Cola"}
              </AutoBadge>
            </AutoRow>
          ))}
        </AutoList>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== 4. Cloud / DevOps mockup ====================== */

const CloudGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const CloudTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
`

const CloudTile = styled.div`
  padding: 0.55rem 0.65rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

const CloudLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const CloudValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`

const CloudChecks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

const CloudCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.42rem 0.6rem;
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  span.label {
    flex: 1;
    color: ${({ theme }) => theme.colors.text};
  }

  span.time {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 0.6rem;
  }
`

const CloudPulse = styled(motion.span)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.success};
  flex-shrink: 0;
`

function CloudMockup() {
  const checks = [
    { name: "api.tu-app.com", time: "12ms" },
    { name: "db · primary", time: "8ms" },
    { name: "cdn · global", time: "23ms" },
    { name: "ssl · valid", time: "89d" },
  ]
  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>status</strong> · uptime monitor
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <CloudGrid>
          <CloudTop>
            <CloudTile>
              <CloudLabel>Uptime · 30d</CloudLabel>
              <CloudValue>99.98%</CloudValue>
            </CloudTile>
            <CloudTile>
              <CloudLabel>Latencia P95</CloudLabel>
              <CloudValue>184ms</CloudValue>
            </CloudTile>
          </CloudTop>
          <CloudChecks>
            {checks.map((c, i) => (
              <CloudCheck key={c.name}>
                <CloudPulse
                  animate={{ opacity: [1, 0.55, 1], scale: [1, 0.85, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                />
                <span className="label">{c.name}</span>
                <span className="time">{c.time}</span>
              </CloudCheck>
            ))}
          </CloudChecks>
        </CloudGrid>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== 5. Data / IoT mockup ====================== */

const DataMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.55rem;
  margin-bottom: 0.5rem;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text};
  }

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.66rem;
    color: ${({ theme }) => theme.colors.success};
  }
`

const DataBars = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: end;
  gap: 0.28rem;
  height: 70px;
  margin-bottom: 0.55rem;
`

const DataBar = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: 2px 2px 0 0;
  width: 100%;
  box-shadow: 0 0 8px rgba(6, 215, 255, 0.18);
  opacity: 0.95;
`

const DataMap = styled.div`
  position: relative;
  padding: 0.6rem 0.7rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const DataMapLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.62rem;
    color: ${({ theme }) => theme.colors.accent};
  }
`

function DataMockup() {
  const bars = [0.42, 0.58, 0.5, 0.68, 0.62, 0.78, 0.72, 0.88, 0.82, 0.95]
  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>analytics</strong> · live
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <DataMeta>
          <strong>USD 142K</strong>
          <small>+ 28% vs mes anterior</small>
        </DataMeta>
        <DataBars>
          {bars.map((h, i) => (
            <DataBar
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: easeOut }}
              style={{ alignSelf: "end" }}
            />
          ))}
        </DataBars>
        <DataMap>
          <DataMapLabel>
            <span>Envío PO-04821</span>
            <strong>EN RUTA</strong>
          </DataMapLabel>
          <svg viewBox="0 0 280 60" width="100%" height="46" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dataRoute" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06D7FF" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            <path
              d="M10 45 Q 70 10 130 30 T 270 18"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <motion.path
              d="M10 45 Q 70 10 130 30 T 270 18"
              stroke="url(#dataRoute)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 0.72 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeOut }}
            />
            <circle cx="10" cy="45" r="3.5" fill="#06D7FF" />
            <circle cx="270" cy="18" r="3.5" fill="#1E40AF" />
            <motion.g
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, 60, 120, 190, 260],
                y: [0, -29, -15, -25, -27],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "drop-shadow(0 0 4px rgba(6, 215, 255, 0.7))" }}
            >
              <circle cx="10" cy="45" r="4.5" fill="#06D7FF" />
            </motion.g>
          </svg>
        </DataMap>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== 6. Consultoria mockup ====================== */

const ConsultHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;

  h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.92rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    letter-spacing: -0.01em;
  }
`

const ConsultScore = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 0.3rem;
  padding: 0.25rem 0.55rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
  border-radius: ${({ theme }) => theme.borderRadius.full};

  strong {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.success};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

const ConsultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.42rem;
`

const ConsultRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.6rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const ConsultIcon = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $tone, theme }) =>
    $tone === "ok"
      ? "rgba(16, 185, 129, 0.18)"
      : $tone === "warn"
      ? "rgba(255, 189, 46, 0.18)"
      : "rgba(6, 215, 255, 0.18)"};
  border: 1px solid
    ${({ $tone, theme }) =>
      $tone === "ok"
        ? "rgba(16, 185, 129, 0.45)"
        : $tone === "warn"
        ? "rgba(255, 189, 46, 0.45)"
        : "rgba(6, 215, 255, 0.45)"};
  color: ${({ $tone, theme }) =>
    $tone === "ok"
      ? theme.colors.success
      : $tone === "warn"
      ? "#FFBD2E"
      : theme.colors.accent};
  flex-shrink: 0;

  svg { width: 8px; height: 8px; }
`

const ConsultLabel = styled.span`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
`

const ConsultMetric = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  color: ${({ $tone, theme }) =>
    $tone === "ok"
      ? theme.colors.success
      : $tone === "warn"
      ? "#FFBD2E"
      : theme.colors.accent};
`

function ConsultoriaMockup() {
  const items = [
    { label: "Performance", metric: "92 / 100", tone: "ok" },
    { label: "Seguridad", metric: "A+", tone: "ok" },
    { label: "Cobertura tests", metric: "68%", tone: "warn" },
    { label: "Deuda técnica", metric: "2.4 días", tone: "info" },
  ]
  return (
    <MockPanel>
      <MockChrome>
        <MockDots>
          <span /><span /><span />
        </MockDots>
        <MockTitle>
          <strong>audit</strong> · revisión técnica
        </MockTitle>
        <MockStatusDot />
      </MockChrome>
      <MockBody>
        <ConsultHeader>
          <h6>Health score</h6>
          <ConsultScore>
            <strong>87</strong>
            <span>/ 100</span>
          </ConsultScore>
        </ConsultHeader>
        <ConsultList>
          {items.map((it, i) => (
            <ConsultRow
              key={it.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
            >
              <ConsultIcon $tone={it.tone}>
                {it.tone === "ok" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                ) : it.tone === "warn" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v5M12 17h.01" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8v4l3 2" />
                  </svg>
                )}
              </ConsultIcon>
              <ConsultLabel>{it.label}</ConsultLabel>
              <ConsultMetric $tone={it.tone}>{it.metric}</ConsultMetric>
            </ConsultRow>
          ))}
        </ConsultList>
      </MockBody>
    </MockPanel>
  )
}

/* ====================== Mockup picker ====================== */

const MOCKUP_MAP = {
  "web-mobile": WebMobileMockup,
  integraciones: IntegrationsMockup,
  automatizacion: AutomatizacionMockup,
  "cloud-devops": CloudMockup,
  "data-iot": DataMockup,
  consultoria: ConsultoriaMockup,
}

const MOCKUP_LABELS = {
  "web-mobile": "Plataforma a medida",
  integraciones: "Sistemas conectados",
  automatizacion: "Workflows automáticos",
  "cloud-devops": "Infraestructura 24/7",
  "data-iot": "Tableros en vivo",
  consultoria: "Auditoría técnica",
}

function ServiceRow({ service, index }) {
  const Icon = ICON_MAP[service.icon] || HiCodeBracket
  const Mockup = MOCKUP_MAP[service.id] || WebMobileMockup
  const reverse = index % 2 === 1
  const eyebrowLabel = MOCKUP_LABELS[service.id] || service.title

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty("--mx", `${x}%`)
    e.currentTarget.style.setProperty("--my", `${y}%`)
  }, [])

  return (
    <Row
      data-reverse={reverse ? "true" : "false"}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: easeOut,
        delay: index * 0.04,
      }}
    >
      <TextCol>
        <ServiceEyebrow>
          <Icon />
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <span>· {eyebrowLabel}</span>
        </ServiceEyebrow>
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDesc>{service.description}</ServiceDesc>
      </TextCol>
      <MockupCol>
        <Mockup />
      </MockupCol>
    </Row>
  )
}

export function Services() {
  return (
    <Section id="servicios">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            02 · Servicios
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            Qué hacemos por <Highlight>tu negocio</Highlight>
          </Title>
          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            Soluciones a medida pensadas para tu resultado, no para llenar horas.
          </Sub>
        </Header>

        <List>
          {siteConfig.services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </List>
      </Container>
    </Section>
  )
}
