"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1]

/* ----------------------------------------------------------------
 * Data: code snippets, commits, test runs, deploy steps
 * ---------------------------------------------------------------- */

const CODE_SNIPPETS = [
  {
    file: "handlers/order.ts",
    lines: [
      [{ t: "kw", v: "export async function" }, { t: "fn", v: " createOrder" }, { t: "pn", v: "(" }, { t: "vr", v: "req" }, { t: "pn", v: ", " }, { t: "vr", v: "res" }, { t: "pn", v: ") {" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "const" }, { t: "vr", v: " data " }, { t: "op", v: "= " }, { t: "fn", v: "OrderSchema.parse" }, { t: "pn", v: "(" }, { t: "vr", v: "req.body" }, { t: "pn", v: ");" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "const" }, { t: "vr", v: " order " }, { t: "op", v: "= " }, { t: "kw", v: "await" }, { t: "fn", v: " db.orders.create" }, { t: "pn", v: "({" }],
      [{ t: "sp", v: "    " }, { t: "vr", v: "data" }, { t: "pn", v: "," }],
      [{ t: "sp", v: "    " }, { t: "vr", v: "tenantId" }, { t: "pn", v: ": " }, { t: "vr", v: "req.user.tenantId" }, { t: "pn", v: "," }],
      [{ t: "sp", v: "  " }, { t: "pn", v: "});" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "await" }, { t: "fn", v: " emitWebhook" }, { t: "pn", v: "(" }, { t: "st", v: "\"order.created\"" }, { t: "pn", v: ", " }, { t: "vr", v: "order" }, { t: "pn", v: ");" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "return" }, { t: "vr", v: " res" }, { t: "pn", v: "." }, { t: "fn", v: "status" }, { t: "pn", v: "(" }, { t: "nm", v: "201" }, { t: "pn", v: ")." }, { t: "fn", v: "json" }, { t: "pn", v: "(" }, { t: "vr", v: "order" }, { t: "pn", v: ");" }],
      [{ t: "pn", v: "}" }],
    ],
  },
  {
    file: "schemas/invoice.ts",
    lines: [
      [{ t: "kw", v: "import" }, { t: "vr", v: " { z } " }, { t: "kw", v: "from" }, { t: "st", v: " \"zod\"" }, { t: "pn", v: ";" }],
      [],
      [{ t: "cm", v: "// validación de factura entrante" }],
      [{ t: "kw", v: "export const" }, { t: "vr", v: " InvoiceSchema " }, { t: "op", v: "= " }, { t: "fn", v: "z.object" }, { t: "pn", v: "({" }],
      [{ t: "sp", v: "  " }, { t: "vr", v: "number" }, { t: "pn", v: ": " }, { t: "fn", v: "z.string" }, { t: "pn", v: "()." }, { t: "fn", v: "min" }, { t: "pn", v: "(" }, { t: "nm", v: "1" }, { t: "pn", v: ")," }],
      [{ t: "sp", v: "  " }, { t: "vr", v: "total" }, { t: "pn", v: ": " }, { t: "fn", v: "z.number" }, { t: "pn", v: "()." }, { t: "fn", v: "positive" }, { t: "pn", v: "()," }],
      [{ t: "sp", v: "  " }, { t: "vr", v: "currency" }, { t: "pn", v: ": " }, { t: "fn", v: "z.enum" }, { t: "pn", v: "([" }, { t: "st", v: "\"ARS\"" }, { t: "pn", v: ", " }, { t: "st", v: "\"USD\"" }, { t: "pn", v: "])," }],
      [{ t: "sp", v: "  " }, { t: "vr", v: "issuedAt" }, { t: "pn", v: ": " }, { t: "fn", v: "z.coerce.date" }, { t: "pn", v: "()," }],
      [{ t: "pn", v: "});" }],
    ],
  },
  {
    file: "routes/webhook.ts",
    lines: [
      [{ t: "vr", v: "router" }, { t: "pn", v: "." }, { t: "fn", v: "post" }, { t: "pn", v: "(" }, { t: "st", v: "\"/mp/ipn\"" }, { t: "pn", v: ", " }, { t: "kw", v: "async" }, { t: "pn", v: " (" }, { t: "vr", v: "req" }, { t: "pn", v: ", " }, { t: "vr", v: "res" }, { t: "pn", v: ") => {" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "const" }, { t: "vr", v: " ok " }, { t: "op", v: "= " }, { t: "fn", v: "verifySignature" }, { t: "pn", v: "(" }, { t: "vr", v: "req" }, { t: "pn", v: ");" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "if" }, { t: "pn", v: " (!" }, { t: "vr", v: "ok" }, { t: "pn", v: ") " }, { t: "kw", v: "return" }, { t: "vr", v: " res" }, { t: "pn", v: "." }, { t: "fn", v: "sendStatus" }, { t: "pn", v: "(" }, { t: "nm", v: "401" }, { t: "pn", v: ");" }],
      [],
      [{ t: "sp", v: "  " }, { t: "kw", v: "const" }, { t: "vr", v: " payment " }, { t: "op", v: "= " }, { t: "kw", v: "await" }, { t: "fn", v: " mp.getPayment" }, { t: "pn", v: "(" }, { t: "vr", v: "req.body.id" }, { t: "pn", v: ");" }],
      [{ t: "sp", v: "  " }, { t: "kw", v: "await" }, { t: "fn", v: " syncOrderStatus" }, { t: "pn", v: "(" }, { t: "vr", v: "payment" }, { t: "pn", v: ");" }],
      [{ t: "sp", v: "  " }, { t: "vr", v: "res" }, { t: "pn", v: "." }, { t: "fn", v: "sendStatus" }, { t: "pn", v: "(" }, { t: "nm", v: "200" }, { t: "pn", v: ");" }],
      [{ t: "pn", v: "});" }],
    ],
  },
]

const TEST_RUNS = [
  [
    { kind: "info", text: "$ npm test" },
    { kind: "run", text: "RUNS  src/handlers/order.test.ts" },
    { kind: "pass", text: "PASS  src/handlers/order.test.ts" },
    { kind: "case", text: "✓ creates order with valid payload (24 ms)" },
    { kind: "case", text: "✓ rejects invalid currency (8 ms)" },
    { kind: "case", text: "✓ emits webhook order.created (11 ms)" },
    { kind: "run", text: "RUNS  src/schemas/invoice.test.ts" },
    { kind: "pass", text: "PASS  src/schemas/invoice.test.ts" },
    { kind: "case", text: "✓ accepts ARS and USD (5 ms)" },
    { kind: "case", text: "✓ coerces issuedAt strings (4 ms)" },
    { kind: "summary", text: "Tests: 42 passed, 42 total" },
    { kind: "summary", text: "Time:  1.823 s" },
  ],
  [
    { kind: "info", text: "$ npm test -- --watch" },
    { kind: "run", text: "RUNS  src/routes/webhook.test.ts" },
    { kind: "pass", text: "PASS  src/routes/webhook.test.ts" },
    { kind: "case", text: "✓ verifies HMAC signature (17 ms)" },
    { kind: "case", text: "✓ returns 401 on bad signature (6 ms)" },
    { kind: "case", text: "✓ syncs payment status (22 ms)" },
    { kind: "run", text: "RUNS  src/services/email.test.ts" },
    { kind: "pass", text: "PASS  src/services/email.test.ts" },
    { kind: "case", text: "✓ renders invoice template (9 ms)" },
    { kind: "case", text: "✓ retries on 5xx (14 ms)" },
    { kind: "summary", text: "Tests: 38 passed, 38 total" },
    { kind: "summary", text: "Time:  1.412 s" },
  ],
]

const COMMIT_POOL = [
  { hash: "a7f2c8d", msg: "feat: add order webhook handler", author: "leo" },
  { hash: "3b91e44", msg: "fix: invoice rounding on USD totals", author: "fede" },
  { hash: "e018a72", msg: "chore: bump zod to 3.23.8", author: "leo" },
  { hash: "9c4d1ab", msg: "refactor: extract email service", author: "iñaki" },
  { hash: "f52d709", msg: "feat: tenant-aware queries on orders", author: "tito" },
  { hash: "1d8b3e0", msg: "test: cover webhook signature path", author: "leo" },
  { hash: "c63a857", msg: "fix: race condition on payment sync", author: "fede" },
  { hash: "7a2f019", msg: "docs: update deploy runbook", author: "iñaki" },
  { hash: "b48cd31", msg: "perf: index orders by tenant + date", author: "tito" },
  { hash: "2e91f6c", msg: "feat: retry queue for emails", author: "leo" },
]

const AUTHOR_GRADIENTS = {
  leo: "linear-gradient(135deg, #06D7FF 0%, #1E40AF 100%)",
  fede: "linear-gradient(135deg, #1E40AF 0%, #FF7A1A 100%)",
  iñaki: "linear-gradient(135deg, #10B981 0%, #06D7FF 100%)",
  tito: "linear-gradient(135deg, #FF7A1A 0%, #1E40AF 100%)",
}

const DEPLOY_STEPS = [
  { at: 0, label: "Iniciando build" },
  { at: 18, label: "npm ci" },
  { at: 38, label: "Compilando assets" },
  { at: 58, label: "Corriendo tests" },
  { at: 78, label: "Publicando imagen" },
  { at: 92, label: "Cambiando tráfico" },
  { at: 100, label: "Deployed" },
]

/* ----------------------------------------------------------------
 * Styled components
 * ---------------------------------------------------------------- */

const pulseDot = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(0.85); }
`

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  isolation: isolate;
  overflow-x: clip;

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
    radial-gradient(circle at 85% 15%, rgba(30, 64, 175, 0.09), transparent 45%),
    radial-gradient(circle at 10% 85%, rgba(6, 215, 255, 0.07), transparent 45%);
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
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
`

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.accentAltGlow};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(30, 64, 175, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentAlt};
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
  max-width: 620px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const Panel = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.95), rgba(14, 14, 20, 0.95));
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.gradients.brand};
    opacity: 0.08;
    filter: blur(40px);
    z-index: -1;
  }
`

const PanelChrome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.015);
`

const PanelDots = styled.div`
  display: flex;
  gap: 0.4rem;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
  }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`

const PanelTitle = styled.div`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.04em;

  strong {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`

const PanelStatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.success};
  animation: ${pulseDot} 1.6s ease-in-out infinite;
`

const PanelBody = styled.div`
  position: relative;
  padding: 1rem 1.1rem;
  min-height: 280px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 260px;
    padding: 0.9rem 1rem;
  }
`

/* ---------- Editor ---------- */

const EditorWrap = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  line-height: 1.55;
`

const LineNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.textMuted};
  user-select: none;

  span { opacity: 0.6; }
`

const CodeBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
`

const CodeLine = styled.div`
  white-space: pre;
  color: ${({ theme }) => theme.colors.textSecondary};
  min-height: 1.55em;
`

const Token = styled.span`
  ${({ $type, theme }) => {
    switch ($type) {
      case "kw":
        return css`color: ${theme.colors.accent};`
      case "fn":
        return css`color: #d6a4ff;`
      case "st":
        return css`color: #7ee8a2;`
      case "nm":
        return css`color: #ffb86c;`
      case "cm":
        return css`color: ${theme.colors.textTertiary}; font-style: italic;`
      case "vr":
        return css`color: ${theme.colors.text};`
      case "op":
        return css`color: ${theme.colors.accentAlt};`
      case "pn":
      default:
        return css`color: ${theme.colors.textSecondary};`
    }
  }}
`

const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 1em;
  vertical-align: -2px;
  margin-left: 1px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentGlow};
  animation: ${blink} 1s steps(1, end) infinite;
`

/* ---------- Terminal ---------- */

const TerminalBody = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
`

const TerminalLine = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  white-space: pre;

  ${({ $kind, theme }) => {
    switch ($kind) {
      case "info":
        return css`color: ${theme.colors.text};`
      case "pass":
        return css`color: ${theme.colors.success};`
      case "run":
        return css`color: ${theme.colors.accent};`
      case "case":
        return css`color: ${theme.colors.textSecondary};`
      case "summary":
        return css`color: ${theme.colors.text}; font-weight: 500;`
      default:
        return css`color: ${theme.colors.textSecondary};`
    }
  }}
`

const RunBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  border-radius: 3px;
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  background: rgba(6, 215, 255, 0.12);
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
`

const PassBadge = styled(RunBadge)`
  background: rgba(16, 185, 129, 0.12);
  color: ${({ theme }) => theme.colors.success};
  border-color: rgba(16, 185, 129, 0.35);
`

const Spinner = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1.5px solid rgba(6, 215, 255, 0.25);
  border-top-color: ${({ theme }) => theme.colors.accent};
  animation: ${spin} 0.9s linear infinite;
  flex-shrink: 0;
`

/* ---------- Commits ---------- */

const CommitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

const CommitRow = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 0.7rem;
  padding: 0.6rem 0.75rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`

const CommitAvatar = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ $author }) => AUTHOR_GRADIENTS[$author] || "linear-gradient(135deg, #06D7FF, #1E40AF)"};
  box-shadow: 0 0 10px rgba(6, 215, 255, 0.25);
  flex-shrink: 0;
`

const CommitHash = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.04em;
`

const CommitMsg = styled.span`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CommitTime = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.02em;
  white-space: nowrap;
`

/* ---------- Live metrics ---------- */

const MetricsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const KpiRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const Kpi = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.7rem 0.8rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const KpiLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const KpiValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DeployCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.85rem 0.9rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const DeployHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`

const DeployPct = styled.span`
  color: ${({ $done, theme }) => ($done ? theme.colors.success : theme.colors.accent)};
`

const DeployTrack = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`

const DeployFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: inherit;
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.accentGlow};
`

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.75rem;
  width: fit-content;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.success};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

const StatusPillDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.success};
  animation: ${pulseDot} 1.6s ease-in-out infinite;
`

/* ----------------------------------------------------------------
 * Hooks
 * ---------------------------------------------------------------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(mq.matches)
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])
  return reduced
}

/* ----------------------------------------------------------------
 * Panel 1 — Code editor (typewriter loop)
 * ---------------------------------------------------------------- */

function CodeEditorPanel({ reducedMotion }) {
  const [snippetIdx, setSnippetIdx] = useState(0)
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [phase, setPhase] = useState("typing") // typing | hold | clearing

  const snippet = CODE_SNIPPETS[snippetIdx]

  // Compute the flat character length of a line (for typewriter index)
  const lineLengths = useMemo(
    () => snippet.lines.map((tokens) => tokens.reduce((acc, t) => acc + t.v.length, 0)),
    [snippet]
  )

  useEffect(() => {
    if (reducedMotion) {
      // Show the whole snippet without animation
      setLineIdx(snippet.lines.length - 1)
      setCharIdx(lineLengths[snippet.lines.length - 1] || 0)
      return
    }

    let timeout
    if (phase === "typing") {
      const currentLen = lineLengths[lineIdx] || 0
      if (charIdx < currentLen) {
        // type next char — slight jitter for natural feel
        const delay = 18 + Math.random() * 22
        timeout = setTimeout(() => setCharIdx((c) => c + 1), delay)
      } else if (lineIdx < snippet.lines.length - 1) {
        // line break pause
        timeout = setTimeout(() => {
          setLineIdx((l) => l + 1)
          setCharIdx(0)
        }, 90)
      } else {
        setPhase("hold")
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("clearing"), 1600)
    } else if (phase === "clearing") {
      timeout = setTimeout(() => {
        setSnippetIdx((s) => (s + 1) % CODE_SNIPPETS.length)
        setLineIdx(0)
        setCharIdx(0)
        setPhase("typing")
      }, 350)
    }

    return () => clearTimeout(timeout)
  }, [phase, lineIdx, charIdx, lineLengths, snippet.lines.length, reducedMotion])

  // Render: given current lineIdx + charIdx, slice tokens char-by-char
  const renderLine = (tokens, fullyVisible) => {
    if (fullyVisible) {
      return tokens.map((tok, i) => (
        <Token key={i} $type={tok.t}>{tok.v}</Token>
      ))
    }
    let remaining = charIdx
    const out = []
    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i]
      if (remaining <= 0) break
      if (tok.v.length <= remaining) {
        out.push(<Token key={i} $type={tok.t}>{tok.v}</Token>)
        remaining -= tok.v.length
      } else {
        out.push(<Token key={i} $type={tok.t}>{tok.v.slice(0, remaining)}</Token>)
        remaining = 0
      }
    }
    return out
  }

  const visibleLineCount = phase === "clearing" ? 0 : lineIdx + 1
  const showCursorOnLine = phase === "clearing" ? -1 : lineIdx

  return (
    <Panel
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <PanelChrome>
        <PanelDots><span /><span /><span /></PanelDots>
        <PanelTitle>
          <strong>biztek</strong> · {snippet.file}
        </PanelTitle>
        <PanelStatusDot />
      </PanelChrome>
      <PanelBody>
        <EditorWrap>
          <LineNumbers>
            {snippet.lines.map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </LineNumbers>
          <CodeBody>
            {snippet.lines.map((tokens, i) => {
              const isVisible = i < visibleLineCount
              const isCurrent = i === showCursorOnLine
              const fullyVisible = i < lineIdx && phase !== "clearing"
              return (
                <CodeLine key={i}>
                  {isVisible ? renderLine(tokens, fullyVisible) : null}
                  {isCurrent && <Cursor />}
                </CodeLine>
              )
            })}
          </CodeBody>
        </EditorWrap>
      </PanelBody>
    </Panel>
  )
}

/* ----------------------------------------------------------------
 * Panel 2 — Terminal / test runner
 * ---------------------------------------------------------------- */

function TerminalPanel({ reducedMotion }) {
  const [runIdx, setRunIdx] = useState(0)
  const [shown, setShown] = useState(0)
  const run = TEST_RUNS[runIdx]

  useEffect(() => {
    if (reducedMotion) {
      setShown(run.length)
      return
    }

    let timeout
    if (shown < run.length) {
      // slight variation per line
      const delay = 110 + Math.random() * 90
      timeout = setTimeout(() => setShown((s) => s + 1), delay)
    } else {
      timeout = setTimeout(() => {
        setRunIdx((r) => (r + 1) % TEST_RUNS.length)
        setShown(0)
      }, 2200)
    }
    return () => clearTimeout(timeout)
  }, [shown, run.length, reducedMotion])

  const renderLeading = (kind) => {
    if (kind === "pass") return <PassBadge>PASS</PassBadge>
    if (kind === "run") return <RunBadge>RUNS</RunBadge>
    return null
  }

  return (
    <Panel
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
    >
      <PanelChrome>
        <PanelDots><span /><span /><span /></PanelDots>
        <PanelTitle>
          <strong>zsh</strong> · npm test
        </PanelTitle>
        <PanelStatusDot />
      </PanelChrome>
      <PanelBody>
        <TerminalBody>
          {run.slice(0, shown).map((line, i) => {
            const isLastRun = line.kind === "run" && i === shown - 1
            // For "RUNS" lines that aren't immediately followed by "PASS" yet, show spinner.
            const stillRunning = isLastRun
            const text = line.text.replace(/^RUNS\s+|^PASS\s+/, "")
            return (
              <TerminalLine
                key={`${runIdx}-${i}`}
                $kind={line.kind}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28, ease: easeOut }}
              >
                {renderLeading(line.kind)}
                {stillRunning && <Spinner />}
                <span>{(line.kind === "pass" || line.kind === "run") ? text : line.text}</span>
              </TerminalLine>
            )
          })}
        </TerminalBody>
      </PanelBody>
    </Panel>
  )
}

/* ----------------------------------------------------------------
 * Panel 3 — Commit feed
 * ---------------------------------------------------------------- */

function makeCommit(seed = 0) {
  const base = COMMIT_POOL[seed % COMMIT_POOL.length]
  return {
    ...base,
    id: `${base.hash}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    ts: Date.now(),
  }
}

function relativeTime(then, now) {
  const diff = Math.max(0, Math.floor((now - then) / 1000))
  if (diff < 5) return "hace instantes"
  if (diff < 60) return `hace ${diff}s`
  const m = Math.floor(diff / 60)
  if (m < 60) return `hace ${m} min`
  const h = Math.floor(m / 60)
  return `hace ${h} h`
}

function CommitFeedPanel({ reducedMotion }) {
  const seedRef = useRef(0)
  const [commits, setCommits] = useState(() => {
    // seed with 5 fake older commits
    const seeded = []
    const now = Date.now()
    for (let i = 0; i < 5; i++) {
      const base = COMMIT_POOL[i % COMMIT_POOL.length]
      seeded.push({
        ...base,
        id: `seed-${i}`,
        ts: now - (i + 1) * 1000 * (60 * (i + 1) + 14),
      })
    }
    seedRef.current = 5
    return seeded
  })
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      setCommits((prev) => {
        const next = makeCommit(seedRef.current++)
        return [next, ...prev].slice(0, 5)
      })
    }, 2400)
    return () => clearInterval(id)
  }, [reducedMotion])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <Panel
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
    >
      <PanelChrome>
        <PanelDots><span /><span /><span /></PanelDots>
        <PanelTitle>
          <strong>git</strong> · activity feed
        </PanelTitle>
        <PanelStatusDot />
      </PanelChrome>
      <PanelBody>
        <CommitList>
          <AnimatePresence initial={false}>
            {commits.map((c) => (
              <CommitRow
                key={c.id}
                layout
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                <CommitAvatar $author={c.author} />
                <CommitHash>{c.hash}</CommitHash>
                <CommitMsg>{c.msg}</CommitMsg>
                <CommitTime>{relativeTime(c.ts, now)}</CommitTime>
              </CommitRow>
            ))}
          </AnimatePresence>
        </CommitList>
      </PanelBody>
    </Panel>
  )
}

/* ----------------------------------------------------------------
 * Panel 4 — Live metrics
 * ---------------------------------------------------------------- */

function LiveMetricsPanel({ reducedMotion }) {
  const [builds, setBuilds] = useState(12)
  const [deploys, setDeploys] = useState(4)
  const [uptime, setUptime] = useState(99.98)
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  // Ticker on KPIs — occasional small bumps
  useEffect(() => {
    if (reducedMotion) return
    const id = setInterval(() => {
      // 35% chance of a small build tick
      if (Math.random() < 0.35) setBuilds((b) => b + 1)
      if (Math.random() < 0.12) setDeploys((d) => d + 1)
      // uptime jitters tinily
      setUptime((u) => {
        const target = 99.94 + Math.random() * 0.06
        return Math.round(target * 100) / 100
      })
    }, 3400)
    return () => clearInterval(id)
  }, [reducedMotion])

  // Deploy progress loop
  useEffect(() => {
    if (reducedMotion) {
      setPct(100)
      setDone(true)
      return
    }

    let timeout
    if (!done && pct < 100) {
      // ramp up roughly to 100 in ~6s -> +~3-4 per 200ms with jitter
      const inc = 2 + Math.random() * 3.5
      timeout = setTimeout(() => setPct((p) => Math.min(100, p + inc)), 200)
    } else if (!done && pct >= 100) {
      setDone(true)
      timeout = setTimeout(() => {
        setDeploys((d) => d + 1)
        setDone(false)
        setPct(0)
      }, 2200)
    }
    return () => clearTimeout(timeout)
  }, [pct, done, reducedMotion])

  // Determine current deploy step
  const currentStep = useMemo(() => {
    if (done) return DEPLOY_STEPS[DEPLOY_STEPS.length - 1]
    let step = DEPLOY_STEPS[0]
    for (const s of DEPLOY_STEPS) {
      if (pct >= s.at) step = s
    }
    return step
  }, [pct, done])

  return (
    <Panel
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
    >
      <PanelChrome>
        <PanelDots><span /><span /><span /></PanelDots>
        <PanelTitle>
          <strong>biztek</strong> · production · live
        </PanelTitle>
        <PanelStatusDot />
      </PanelChrome>
      <PanelBody>
        <MetricsWrap>
          <KpiRow>
            <Kpi>
              <KpiLabel>Builds OK hoy</KpiLabel>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={builds}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <KpiValue>{builds}</KpiValue>
                </motion.div>
              </AnimatePresence>
            </Kpi>
            <Kpi>
              <KpiLabel>Deploys</KpiLabel>
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={deploys}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <KpiValue>{deploys}</KpiValue>
                </motion.div>
              </AnimatePresence>
            </Kpi>
            <Kpi>
              <KpiLabel>Uptime</KpiLabel>
              <KpiValue>{uptime.toFixed(2)}%</KpiValue>
            </Kpi>
          </KpiRow>

          <DeployCard>
            <DeployHead>
              <span>
                <strong>{done ? "Deployed" : "Deploy en curso"}</strong>
                {" · "}
                {done ? "v1.4.2 → producción" : currentStep.label}
              </span>
              <DeployPct $done={done}>
                {done ? "100%" : `${Math.round(pct)}%`}
              </DeployPct>
            </DeployHead>
            <DeployTrack>
              <DeployFill
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </DeployTrack>
          </DeployCard>

          <StatusPill>
            <StatusPillDot />
            Producción · OK
          </StatusPill>
        </MetricsWrap>
      </PanelBody>
    </Panel>
  )
}

/* ----------------------------------------------------------------
 * Section
 * ---------------------------------------------------------------- */

export function Workshop() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <Section id="taller">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            04 · El taller
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            Adentro del <Highlight>taller</Highlight>
          </Title>
          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            Una mirada en vivo a cómo escribimos, probamos y desplegamos tu producto cada día.
          </Sub>
        </Header>

        <Grid>
          <CodeEditorPanel reducedMotion={reducedMotion} />
          <TerminalPanel reducedMotion={reducedMotion} />
          <CommitFeedPanel reducedMotion={reducedMotion} />
          <LiveMetricsPanel reducedMotion={reducedMotion} />
        </Grid>
      </Container>
    </Section>
  )
}
