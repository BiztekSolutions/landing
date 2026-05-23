"use client"

import { useEffect, useRef, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const easeOut = [0.22, 1, 0.36, 1]

/* ---------- SLIDES DATA ---------- */

const SLIDES = [
  {
    id: "intro",
    eyebrow: "Biztek Solutions",
    title: "Expertos en soluciones IT",
    sub: "Desarrollo de software, integración de sistemas, automatización y optimización para empresas que buscan innovar.",
    cta: "Contactanos",
    ctaHref: "#contacto",
    visual: "tabletDashboard",
  },
  {
    id: "web",
    eyebrow: "Plataformas web",
    title: "Software web a medida que escala con tu negocio",
    sub: "Construimos plataformas, dashboards y sistemas internos que reemplazan planillas, conectan herramientas y le dan a tu equipo el panel de control que se merece.",
    cta: "Empezar un proyecto",
    ctaHref: "#contacto",
    visual: "laptop",
  },
  {
    id: "build",
    eyebrow: "Desarrollo · en vivo",
    title: "Automatizá tu negocio",
    titleEm: "con Agentes de IA",
    sub: "No diapositivas: cada semana te mostramos algo funcionando. De la idea al producto en el tiempo que prometemos.",
    cta: "Empezar un proyecto",
    ctaHref: "#contacto",
    fullVisual: true,
    visual: "laptopFull",
    durationMs: 18000,
  },
  {
    id: "mobile",
    eyebrow: "Apps móviles",
    title: "Apps que tu equipo y tus clientes usan todos los días",
    sub: "Diseñamos y construimos apps nativas e híbridas con foco en velocidad, simplicidad y experiencia real de uso. Para celulares, tablets y todo lo que haga falta.",
    cta: "Hablemos de tu app",
    ctaHref: "#contacto",
    visual: "phoneList",
  },
]

const SLIDE_DURATION_MS = 7000

/* ---------- AMBIENT BACKGROUND ---------- */

const float = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(40px, -30px); }
`
const floatAlt = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-50px, 40px); }
`

const HeroSection = styled.section`
  position: relative;
  height: 100svh;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  padding-top: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: 100svh;
    padding-top: 88px;
    padding-bottom: 2rem;
  }
`

const MeshBg = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.gradients.radial};
  z-index: -2;
`

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  pointer-events: none;
  will-change: transform;
`

const OrbCyan = styled(Orb)`
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(6, 215, 255, 0.3), transparent 70%);
  top: -120px;
  left: -100px;
  animation: ${float} 16s ease-in-out infinite;
`

const OrbPurple = styled(Orb)`
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(30, 64, 175, 0.28), transparent 70%);
  bottom: -160px;
  right: -120px;
  animation: ${floatAlt} 18s ease-in-out infinite;
`

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
  z-index: -1;
`

/* ---------- LAYOUT ---------- */

const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: ${({ theme }) => theme.spacing.lg};
    padding-right: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem ${({ theme }) => theme.spacing.md};
  }
`

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 360px;
`

const Right = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

/* ---------- TEXT BLOCK ---------- */

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  width: fit-content;
`

const Pulse = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accentGlow};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.accentGlow}; }
    70% { box-shadow: 0 0 0 10px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
  }
`

const Headline = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.4rem, 5vw, 4.5rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
  max-width: 560px;

  em {
    font-style: normal;
    background: ${({ theme }) => theme.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Sub = styled(motion.p)`
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;
  max-width: 560px;
`

const CtaRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: 0.4rem;
`

const CtaPrimary = styled.a`
  position: relative;
  padding: 0.9rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.gradients.brand};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.accentGlow};
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.normal};
  }
  &:hover svg {
    transform: translateX(3px);
  }
`

const CtaSecondary = styled.a`
  padding: 0.9rem 1.4rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.bgCardHover};
  }
`

/* ---------- SLIDER CONTROLS ---------- */

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: ${({ theme }) => theme.spacing.md};
`

const Dot = styled.button`
  position: relative;
  width: ${({ $active }) => ($active ? "32px" : "8px")};
  height: 8px;
  border-radius: 8px;
  border: 0;
  padding: 0;
  background: ${({ $active, theme }) =>
    $active ? "rgba(255,255,255,0.18)" : theme.colors.border};
  cursor: pointer;
  overflow: hidden;
  transition: width ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal};
`

const DotFill = styled(motion.span)`
  position: absolute;
  inset: 0 auto 0 0;
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: inherit;
`

/* ---------- PANEL (chrome wrapper) ---------- */

const PanelOuter = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: ${({ $kind }) =>
    $kind === "phone" ? "380px" :
    $kind === "tablet" ? "680px" :
    $kind === "laptop" ? "780px" :
    $kind === "laptopFull" ? "860px" :
    "760px"};
  margin-left: ${({ $kind }) =>
    $kind === "phone" || $kind === "laptopFull" || $kind === "tablet" ? "auto" : "0"};
  margin-right: ${({ $kind }) =>
    $kind === "laptopFull" || $kind === "tablet" ? "auto" : "initial"};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({ $kind, theme }) =>
      $kind === "phone" ? "44px" : $kind === "tablet" ? "28px" : theme.borderRadius.lg};
    background: ${({ theme }) => theme.gradients.brand};
    opacity: ${({ $kind }) => ($kind === "laptop" || $kind === "laptopFull" ? "0.15" : "0.22")};
    filter: blur(60px);
    z-index: -1;
  }
`

const Panel = styled.div`
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.95), rgba(14, 14, 20, 0.95));
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
`

const PanelChrome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.015);
`

const PanelDotsRow = styled.div`
  display: flex;
  gap: 0.4rem;
  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`

const PanelTitle = styled.div`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.74rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.04em;

  strong {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  }
`

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.success};
  animation: pulseDot 1.6s ease-in-out infinite;

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.55; transform: scale(0.85); }
  }
`

const PanelBody = styled.div`
  position: relative;
  padding: 1.1rem 1.25rem;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 320px;
    padding: 1rem;
  }
`

/* ---------- VISUAL 1: CODE EDITOR ---------- */

const SNIPPETS = [
  {
    file: "handlers/order.ts",
    lines: [
      ["export async function ", "createOrder", "(req, res) {"],
      ["  const data = ", "OrderSchema", ".parse(req.body);"],
      ["  const order = await db.orders.create({"],
      ["    data,"],
      ["    tenantId: req.user.tenantId,"],
      ["  });"],
      ["  await ", "emitWebhook", "(\"order.created\", order);"],
      ["  return res.status(201).json(order);"],
      ["}"],
    ],
    keywords: ["export", "async", "function", "const", "await", "return"],
  },
  {
    file: "schemas/invoice.ts",
    lines: [
      ["import { z } from \"zod\";"],
      [""],
      ["export const ", "InvoiceSchema", " = z.object({"],
      ["  number: z.string().min(1),"],
      ["  amount: z.number().positive(),"],
      ["  currency: z.enum([\"ARS\", \"USD\"]),"],
      ["  customer: z.object({"],
      ["    cuit: z.string().length(11),"],
      ["  }),"],
      ["});"],
    ],
    keywords: ["import", "from", "export", "const"],
  },
  {
    file: "webhooks/mp.ts",
    lines: [
      ["router.post(\"/mp/ipn\", async (req, res) => {"],
      ["  const sig = req.headers[\"x-signature\"];"],
      ["  if (!", "verifyMP", "(req.body, sig)) {"],
      ["    return res.status(401).end();"],
      ["  }"],
      ["  const { id, status } = req.body.data;"],
      ["  await db.payments.update({"],
      ["    where: { id },"],
      ["    data: { status },"],
      ["  });"],
      ["  res.json({ ok: true });"],
      ["});"],
    ],
    keywords: ["const", "if", "return", "await"],
  },
]

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const EditorTab = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.7rem;
  background: rgba(6, 215, 255, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.accent};
  width: fit-content;
`

const CodeArea = styled.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 0.6rem;
  flex: 1;
  font-variant-ligatures: none;
  min-height: 0;
`

const Gutter = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.72rem;
  text-align: right;
  user-select: none;
  padding-top: 0.05rem;
`

const CodeLines = styled.div`
  display: flex;
  flex-direction: column;
  white-space: pre;
`

const Caret = styled.span`
  display: inline-block;
  width: 7px;
  height: 1em;
  background: ${({ theme }) => theme.colors.accent};
  vertical-align: text-bottom;
  margin-left: 1px;
  animation: blink 1s steps(2) infinite;

  @keyframes blink {
    50% { opacity: 0; }
  }
`

const Kw = styled.span`color: ${({ theme }) => theme.colors.accent};`
const Str = styled.span`color: #6BCF7F;`
const Ident = styled.span`color: ${({ theme }) => theme.colors.accentAlt};`

function colorizeToken(token, keywords) {
  if (!token) return token
  const parts = []
  let i = 0
  let buffer = ""

  const flush = () => {
    if (buffer) parts.push(buffer)
    buffer = ""
  }

  while (i < token.length) {
    const ch = token[i]
    if (ch === '"') {
      flush()
      const end = token.indexOf('"', i + 1)
      const str = end === -1 ? token.slice(i) : token.slice(i, end + 1)
      parts.push(<Str key={`s-${i}`}>{str}</Str>)
      i += str.length
      continue
    }
    buffer += ch
    i++
  }
  flush()

  return parts.map((p, idx) => {
    if (typeof p !== "string") return p
    const tokens = p.split(/(\b\w+\b)/g)
    return tokens.map((t, j) => {
      if (keywords.includes(t)) return <Kw key={`k-${idx}-${j}`}>{t}</Kw>
      return t
    })
  })
}

function CodeEditorVisual() {
  const [snippetIdx, setSnippetIdx] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState("type") // type | hold | erase

  const snippet = SNIPPETS[snippetIdx]
  const allText = snippet.lines.map((l) => l.join("")).join("\n")
  const totalChars = allText.length

  useEffect(() => {
    let timer
    if (phase === "type") {
      if (charCount < totalChars) {
        timer = setTimeout(() => setCharCount((c) => c + 1), 22 + Math.random() * 30)
      } else {
        timer = setTimeout(() => setPhase("hold"), 1400)
      }
    } else if (phase === "hold") {
      timer = setTimeout(() => setPhase("erase"), 1600)
    } else if (phase === "erase") {
      if (charCount > 0) {
        timer = setTimeout(() => setCharCount((c) => Math.max(0, c - 5)), 8)
      } else {
        setSnippetIdx((i) => (i + 1) % SNIPPETS.length)
        setPhase("type")
      }
    }
    return () => clearTimeout(timer)
  }, [phase, charCount, totalChars])

  // Build visible text considering charCount
  const visible = allText.slice(0, charCount)
  const visibleLines = visible.split("\n")

  return (
    <Editor>
      <EditorTab>{snippet.file}</EditorTab>
      <CodeArea>
        <Gutter>
          {snippet.lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </Gutter>
        <CodeLines>
          {snippet.lines.map((_, i) => {
            const line = visibleLines[i] ?? ""
            const isCurrent = i === visibleLines.length - 1 && phase === "type"
            const colored = colorizeToken(line, snippet.keywords)
            return (
              <div key={i}>
                {colored}
                {isCurrent && <Caret />}
              </div>
            )
          })}
        </CodeLines>
      </CodeArea>
    </Editor>
  )
}

/* ---------- VISUAL 2: INTEGRATIONS DIAGRAM ---------- */

const DiagramWrap = styled.div`
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  align-items: center;
  gap: 0.6rem;
  min-height: 320px;
`

const SideStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`

const Node = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.75rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text};
`

const NodeIcon = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: ${({ $tone, theme }) =>
    $tone === "ok" ? "rgba(16,185,129,0.15)" : "rgba(6,215,255,0.12)"};
  color: ${({ $tone, theme }) => ($tone === "ok" ? theme.colors.success : theme.colors.accent)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid currentColor;
  flex-shrink: 0;

  svg { width: 12px; height: 12px; }
`

const Hub = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 1rem 0.6rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.gradients.brand};
    opacity: 0.25;
    filter: blur(20px);
    z-index: -1;
  }

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.01em;
  }

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.68rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

const HubBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.15rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.success};

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 6px currentColor;
  }
`

const ConnectorSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`

function IntegrationsVisual() {
  const left = [
    { id: "whatsapp", label: "WhatsApp", tone: "ok" },
    { id: "excel", label: "Excel · Stock", tone: "ok" },
    { id: "form", label: "Formularios", tone: "ok" },
  ]
  const right = [
    { id: "facturacion", label: "Facturación", tone: "ok" },
    { id: "crm", label: "CRM", tone: "ok" },
    { id: "email", label: "Email · Avisos", tone: "ok" },
  ]
  return (
    <DiagramWrap>
      <ConnectorSvg viewBox="0 0 460 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06D7FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {[60, 160, 260].map((y, i) => (
          <g key={`l-${i}`}>
            <line x1="120" y1={y} x2="230" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4" />
            <motion.line
              x1="120" y1={y} x2="230" y2="160"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 3.4, delay: i * 0.4, repeat: Infinity, ease: easeOut }}
            />
          </g>
        ))}
        {[60, 160, 260].map((y, i) => (
          <g key={`r-${i}`}>
            <line x1="230" y1="160" x2="340" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4" />
            <motion.line
              x1="230" y1="160" x2="340" y2={y}
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1, 0] }}
              transition={{ duration: 3.4, delay: 1.6 + i * 0.4, repeat: Infinity, ease: easeOut }}
            />
          </g>
        ))}
      </ConnectorSvg>

      <SideStack>
        {left.map((n, i) => (
          <Node
            key={n.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <NodeIcon $tone={n.tone}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </NodeIcon>
            {n.label}
          </Node>
        ))}
      </SideStack>

      <Hub>
        <small>BIZTEK · core</small>
        <strong>Tu sistema</strong>
        <HubBadge><span />sincronizando</HubBadge>
      </Hub>

      <SideStack>
        {right.map((n, i) => (
          <Node
            key={n.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <NodeIcon $tone={n.tone}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </NodeIcon>
            {n.label}
          </Node>
        ))}
      </SideStack>
    </DiagramWrap>
  )
}

/* ---------- VISUAL 3: LIVE DASHBOARD ---------- */

const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.55rem;
  flex: 1;
`

const KpiCard = styled.div`
  padding: 0.7rem 0.85rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`

const KpiHint = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  color: ${({ theme }) => theme.colors.success};
`

const ChartCard = styled.div`
  grid-column: span 2;
  padding: 0.7rem 0.85rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: ${({ theme }) => theme.colors.textTertiary}; }
  strong { font-family: ${({ theme }) => theme.fonts.display}; font-weight: 600; color: ${({ theme }) => theme.colors.text}; }
`

const Bars = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.25rem;
  align-items: end;
  height: 90px;
`

const Bar = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: 3px 3px 0 0;
  box-shadow: 0 0 10px rgba(6,215,255,0.2);
`

function useTicker(initial, step, intervalMs, max) {
  const [v, setV] = useState(initial)
  useEffect(() => {
    const id = setInterval(() => {
      setV((prev) => {
        const next = prev + step + Math.floor(Math.random() * 3)
        return next > max ? initial : next
      })
    }, intervalMs)
    return () => clearInterval(id)
  }, [initial, step, intervalMs, max])
  return v
}

function LiveDashboardVisual() {
  const heights = [0.42, 0.55, 0.48, 0.62, 0.58, 0.71, 0.65, 0.78, 0.72, 0.88, 0.82, 0.95]
  const orders = useTicker(742, 1, 1400, 999)
  const revenue = useTicker(284, 1, 2000, 999)
  return (
    <DashGrid>
      <KpiCard>
        <KpiLabel>Pedidos · hoy</KpiLabel>
        <KpiValue>{orders}</KpiValue>
        <KpiHint>+ en vivo</KpiHint>
      </KpiCard>
      <KpiCard>
        <KpiLabel>Ingresos · mes</KpiLabel>
        <KpiValue>USD {revenue}K</KpiValue>
        <KpiHint>+ 32%</KpiHint>
      </KpiCard>
      <ChartCard>
        <ChartHeader>
          <div>
            <span>Tendencia 12 meses</span>
            <div><strong>USD 284K</strong></div>
          </div>
          <HubBadge><span />producción · ok</HubBadge>
        </ChartHeader>
        <Bars>
          {heights.map((h, i) => (
            <Bar
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h * 100}%` }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: easeOut }}
              style={{ alignSelf: "end" }}
            />
          ))}
        </Bars>
      </ChartCard>
    </DashGrid>
  )
}

/* ---------- PHONE MOCKUP ---------- */

const PhoneFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19;
  max-width: 340px;
  margin: 0 auto;
  border-radius: 44px;
  padding: 12px;
  background: linear-gradient(180deg, #1a1a22, #0a0a10);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 50px 100px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 0 60px rgba(6, 215, 255, 0.15);
`

const PhoneScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.98), rgba(10, 10, 16, 0.98));
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const PhoneNotch = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 22px;
  background: #050509;
  border-radius: 12px;
  z-index: 2;
`

const PhoneStatusBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  z-index: 3;

  span:first-child { letter-spacing: 0.05em; }
`

const PhoneIcons = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  svg { width: 11px; height: 11px; }
`

const PhoneBody = styled.div`
  flex: 1;
  padding: 1rem 0.9rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  min-height: 0;
`

const PhoneHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-top: 0.5rem;

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
  }
`

const PhoneStatRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;
`

const PhoneStatCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.5rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.55rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 1.05rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.02em;
  }
  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.success};
  }
`

const PhoneCardSection = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.7rem 0.7rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`

const PhoneSectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.78rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.58rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

const PhoneBars = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  align-items: end;
  height: 70px;
`

const PhoneBar = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: 3px 3px 0 0;
`

const PhoneListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.5rem 0.55rem;
  background: rgba(255,255,255,0.02);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const ListAvatar = styled.span`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.brand};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 600;
  flex-shrink: 0;
`

const ListMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.05rem;
  min-width: 0;

  strong {
    font-size: 0.74rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.58rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

const ListAmount = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`

const PhoneNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  padding: 0.5rem 0 0.7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 0.4rem;
`

const PhoneNavBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textTertiary)};

  svg { width: 16px; height: 16px; }
  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.58rem;
  }
`

function PhoneShellWith({ children }) {
  const now = new Date()
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
  return (
    <PhoneFrame>
      <PhoneScreen>
        <PhoneNotch />
        <PhoneStatusBar>
          <span>{time}</span>
          <PhoneIcons>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h3v-6H2v6zm5 0h3V12H7v10zm5 0h3V8h-3v14zm5 0h3V4h-3v18z" /></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13a7 7 0 0114 0M8.5 16.5a3.5 3.5 0 017 0M12 20h.01" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="4" y="9" width="13" height="6" rx="1" fill="currentColor" /><path d="M22 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </PhoneIcons>
        </PhoneStatusBar>
        {children}
      </PhoneScreen>
    </PhoneFrame>
  )
}

function PhoneDashboardVisual() {
  const heights = [0.4, 0.55, 0.48, 0.7, 0.62, 0.85, 0.78]
  const labels = ["L", "M", "M", "J", "V", "S", "D"]
  return (
    <PhoneShellWith>
      <PhoneBody>
        <PhoneHeader>
          <small>HOLA, AGUSTINA</small>
          <strong>Tu negocio · hoy</strong>
        </PhoneHeader>
        <PhoneStatRow>
          <PhoneStatCard>
            <small>Pedidos</small>
            <strong>47</strong>
            <span>+18% vs ayer</span>
          </PhoneStatCard>
          <PhoneStatCard>
            <small>Ingresos</small>
            <strong>$ 1,28M</strong>
            <span>+24%</span>
          </PhoneStatCard>
        </PhoneStatRow>
        <PhoneCardSection>
          <PhoneSectionHead>
            <strong>Ventas · semana</strong>
            <small>+ 32%</small>
          </PhoneSectionHead>
          <PhoneBars>
            {heights.map((h, i) => (
              <PhoneBar
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h * 100}%` }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: easeOut }}
                style={{ alignSelf: "end" }}
              />
            ))}
          </PhoneBars>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.25rem", textAlign: "center", fontFamily: "var(--mono, monospace)", fontSize: "0.55rem", color: "rgba(255,255,255,0.4)" }}>
            {labels.map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </PhoneCardSection>
        <PhoneNav>
          <PhoneNavBtn $active>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>
            <span>Inicio</span>
          </PhoneNavBtn>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 14l4-4 4 4 5-6" /></svg>
            <span>Stats</span>
          </PhoneNavBtn>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M3 3h2l2.7 12.4a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 7H6"/></svg>
            <span>Pedidos</span>
          </PhoneNavBtn>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0112 0v1"/></svg>
            <span>Perfil</span>
          </PhoneNavBtn>
        </PhoneNav>
      </PhoneBody>
    </PhoneShellWith>
  )
}

const PHONE_LIST_ITEMS = [
  { initials: "DN", name: "Distribuidora Norte", date: "Hace 4 min", amount: "$ 184.500" },
  { initials: "MC", name: "Mercado Central", date: "Hace 12 min", amount: "$ 92.300" },
  { initials: "DP", name: "Almacén Don Pedro", date: "Hace 28 min", amount: "$ 47.880" },
  { initials: "SH", name: "Súper Hogar", date: "Hace 1 h", amount: "$ 215.420" },
  { initials: "MS", name: "Mayorista Suárez", date: "Hace 2 h", amount: "$ 73.150" },
]

function PhoneListVisual() {
  return (
    <PhoneShellWith>
      <PhoneBody>
        <PhoneHeader>
          <small>PEDIDOS RECIENTES</small>
          <strong>5 pedidos hoy</strong>
        </PhoneHeader>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1, overflow: "hidden" }}>
          {PHONE_LIST_ITEMS.map((it, i) => (
            <PhoneListItem
              key={it.initials}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: easeOut }}
            >
              <ListAvatar>{it.initials}</ListAvatar>
              <ListMeta>
                <strong>{it.name}</strong>
                <small>{it.date}</small>
              </ListMeta>
              <ListAmount>{it.amount}</ListAmount>
            </PhoneListItem>
          ))}
        </div>
        <PhoneNav>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>
            <span>Inicio</span>
          </PhoneNavBtn>
          <PhoneNavBtn $active>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M3 3h2l2.7 12.4a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 7H6"/></svg>
            <span>Pedidos</span>
          </PhoneNavBtn>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18M7 14l4-4 4 4 5-6" /></svg>
            <span>Stats</span>
          </PhoneNavBtn>
          <PhoneNavBtn>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0112 0v1"/></svg>
            <span>Perfil</span>
          </PhoneNavBtn>
        </PhoneNav>
      </PhoneBody>
    </PhoneShellWith>
  )
}

/* ---------- TABLET MOCKUP ---------- */

const TabletFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  max-width: 640px;
  margin: 0 auto;
  border-radius: 28px;
  padding: 14px;
  background: linear-gradient(180deg, #1a1a22, #0a0a10);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 50px 100px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 0 60px rgba(6, 215, 255, 0.12);
`

const TabletCam = styled.span`
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
  z-index: 3;
`

const TabletScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(20, 20, 28, 0.98), rgba(10, 10, 16, 0.98));
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const TabletStatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 22px 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  span:first-child { letter-spacing: 0.05em; }
`

const TabletBody = styled.div`
  flex: 1;
  min-height: 0;
  padding: 0.6rem 0.9rem 0.9rem;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 0.75rem;
`

const TabletColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-height: 0;
`

const TabletStatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
`

const TabletListCard = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.6rem 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-height: 0;
`

const TabletListHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  strong {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text};
  }
  small {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.55rem;
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

function TabletShellWith({ children }) {
  const now = new Date()
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
  return (
    <TabletFrame>
      <TabletCam />
      <TabletScreen>
        <TabletStatusBar>
          <span>{time}</span>
          <PhoneIcons>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h3v-6H2v6zm5 0h3V12H7v10zm5 0h3V8h-3v14zm5 0h3V4h-3v18z" /></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 13a7 7 0 0114 0M8.5 16.5a3.5 3.5 0 017 0M12 20h.01" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" /><rect x="4" y="9" width="13" height="6" rx="1" fill="currentColor" /><path d="M22 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </PhoneIcons>
        </TabletStatusBar>
        {children}
      </TabletScreen>
    </TabletFrame>
  )
}

function TabletDashboardVisual() {
  const heights = [0.4, 0.55, 0.48, 0.7, 0.62, 0.85, 0.78]
  const labels = ["L", "M", "M", "J", "V", "S", "D"]
  return (
    <TabletShellWith>
      <TabletBody>
        <TabletColumn>
          <PhoneHeader>
            <small>HOLA, AGUSTINA</small>
            <strong>Tu negocio · hoy</strong>
          </PhoneHeader>
          <TabletStatRow>
            <PhoneStatCard>
              <small>Pedidos</small>
              <strong>47</strong>
              <span>+18% vs ayer</span>
            </PhoneStatCard>
            <PhoneStatCard>
              <small>Ingresos</small>
              <strong>$ 1,28M</strong>
              <span>+24%</span>
            </PhoneStatCard>
            <PhoneStatCard>
              <small>Stock</small>
              <strong>8.420</strong>
              <span>+3,4%</span>
            </PhoneStatCard>
          </TabletStatRow>
          <PhoneCardSection style={{ flex: 1 }}>
            <PhoneSectionHead>
              <strong>Ventas · semana</strong>
              <small>+ 32%</small>
            </PhoneSectionHead>
            <PhoneBars>
              {heights.map((h, i) => (
                <PhoneBar
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 100}%` }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: easeOut }}
                  style={{ alignSelf: "end" }}
                />
              ))}
            </PhoneBars>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.25rem", textAlign: "center", fontFamily: "var(--mono, monospace)", fontSize: "0.55rem", color: "rgba(255,255,255,0.4)" }}>
              {labels.map((l, i) => <span key={i}>{l}</span>)}
            </div>
          </PhoneCardSection>
        </TabletColumn>

        <TabletColumn>
          <TabletListCard>
            <TabletListHead>
              <strong>Pedidos recientes</strong>
              <small>{PHONE_LIST_ITEMS.length} hoy</small>
            </TabletListHead>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: 1, overflow: "hidden" }}>
              {PHONE_LIST_ITEMS.map((it, i) => (
                <PhoneListItem
                  key={it.initials}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: easeOut }}
                >
                  <ListAvatar>{it.initials}</ListAvatar>
                  <ListMeta>
                    <strong>{it.name}</strong>
                    <small>{it.date}</small>
                  </ListMeta>
                  <ListAmount>{it.amount}</ListAmount>
                </PhoneListItem>
              ))}
            </div>
          </TabletListCard>
        </TabletColumn>
      </TabletBody>
    </TabletShellWith>
  )
}

/* ---------- LAPTOP MOCKUP ---------- */

const LaptopWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ $full }) => ($full ? "860px" : "780px")};
  margin: 0 auto;
`

const LaptopScreen = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(180deg, #15151c, #0a0a10);
  border-radius: 12px 12px 6px 6px;
  padding: 14px 14px 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
`

const ScreenInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #1c1c26 0%, #14141c 100%);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
`

const LaptopBase = styled.div`
  position: relative;
  width: 112%;
  height: 14px;
  margin: 0 auto;
  margin-left: -6%;
  background: linear-gradient(180deg, #1c1c24 0%, #0e0e14 100%);
  border-radius: 0 0 14px 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 22%;
    height: 5px;
    background: linear-gradient(180deg, #050509, #14141c);
    border-radius: 0 0 8px 8px;
  }
`

const ScreenChrome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.015);
`

const ScreenDots = styled.div`
  display: flex;
  gap: 0.32rem;
  span { width: 9px; height: 9px; border-radius: 50%; }
  span:nth-child(1) { background: rgba(255, 95, 86, 0.55); }
  span:nth-child(2) { background: rgba(255, 189, 46, 0.55); }
  span:nth-child(3) { background: rgba(39, 201, 63, 0.55); }
`

const TabBar = styled.div`
  display: flex;
  gap: 0.2rem;
  flex: 1;
`

const Tab = styled.div`
  position: relative;
  padding: 0.3rem 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.04em;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textTertiary)};
  background: ${({ $active }) => ($active ? "rgba(255,255,255,0.06)" : "transparent")};
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  border-bottom: ${({ $active, theme }) => ($active ? `2px solid ${theme.colors.accent}` : "2px solid transparent")};
`

const TabDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $tone, theme }) =>
    $tone === "red" ? theme.colors.error : $tone === "yellow" ? "#FFBD2E" : theme.colors.accent};
`

const ScreenBody = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`

const ViewLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

/* Cursor SVG */

const CursorWrap = styled(motion.div)`
  position: absolute;
  width: 18px;
  height: 18px;
  pointer-events: none;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.45));
`

function Cursor() {
  return (
    <CursorWrap
      initial={{ x: 80, y: 30 }}
      animate={{
        x: [80, 60, 140, 240, 220, 380, 360, 200, 80],
        y: [30, 120, 200, 80, 30, 30, 180, 220, 30],
      }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", times: [0, 0.12, 0.25, 0.38, 0.5, 0.62, 0.75, 0.88, 1] }}
    >
      <svg viewBox="0 0 16 16" width="18" height="18" fill="none">
        <path d="M2 1l11 7-5 1 3 5-2 1-3-5-4 4z" fill="#FAFAFA" stroke="#0A0A10" strokeWidth="0.8" strokeLinejoin="round" />
      </svg>
    </CursorWrap>
  )
}

/* View 1: Editor */

const EditorLines = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ $full }) => ($full ? "0.82rem" : "0.72rem")};
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: pre;
  display: grid;
  grid-template-columns: ${({ $full }) => ($full ? "32px 1fr" : "26px 1fr")};
  gap: 0.5rem;
`

const LineNum = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: right;
  user-select: none;
`

const LAPTOP_SNIPPET = [
  ["import { useState, useEffect } from \"react\";"],
  ["import { fetchProducts } from \"@/api/products\";"],
  ["import { Card, Skeleton } from \"@/components/ui\";"],
  ["import { formatARS } from \"@/utils/format\";"],
  [""],
  ["interface Product {"],
  ["  id: string;"],
  ["  name: string;"],
  ["  price: number;"],
  ["  stock: number;"],
  ["}"],
  [""],
  ["export function ProductGrid() {"],
  ["  const [items, setItems] = useState<Product[]>([]);"],
  ["  const [loading, setLoading] = useState(true);"],
  [""],
  ["  useEffect(() => {"],
  ["    fetchProducts().then((data) => {"],
  ["      setItems(data);"],
  ["      setLoading(false);"],
  ["    });"],
  ["  }, []);"],
  [""],
  ["  if (loading) return <Skeleton rows={6} />;"],
  [""],
  ["  return ("],
  ["    <section className=\"grid grid-cols-3 gap-4\">"],
  ["      {items.map((p) => ("],
  ["        <Card key={p.id} className=\"product-card\">"],
  ["          <h3>{p.name}</h3>"],
  ["          <p className=\"price\">{formatARS(p.price)}</p>"],
  ["          <StockBadge value={p.stock} />"],
  ["        </Card>"],
  ["      ))}"],
  ["    </section>"],
  ["  );"],
  ["}"],
]

const LAPTOP_KEYWORDS = ["import", "from", "export", "function", "const", "return", "interface", "if", "useState", "useEffect"]

function EditorView({ $full }) {
  const [count, setCount] = useState(0)
  const allText = LAPTOP_SNIPPET.map((l) => l.join("")).join("\n")
  const total = allText.length
  const charDelay = $full ? 14 : 24
  const charJitter = $full ? 14 : 20

  useEffect(() => {
    if (count >= total) return
    const id = setTimeout(() => setCount((c) => c + 1), charDelay + Math.random() * charJitter)
    return () => clearTimeout(id)
  }, [count, total, charDelay, charJitter])

  const visible = allText.slice(0, count)
  const lines = visible.split("\n")
  const renderedCount = Math.max(1, lines.length)

  return (
    <ViewLayer
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35 }}
    >
      <EditorLines $full={$full}>
        <div>
          {Array.from({ length: renderedCount }, (_, i) => <LineNum key={i}>{i + 1}</LineNum>)}
        </div>
        <div>
          {lines.map((line, i) => {
            const isCurrent = i === lines.length - 1 && count < total
            const tokens = line.split(/(\b\w+\b)/g)
            return (
              <div key={i}>
                {tokens.map((t, j) =>
                  LAPTOP_KEYWORDS.includes(t) ? <Kw key={j}>{t}</Kw> :
                  /"[^"]*"/.test(t) ? <Str key={j}>{t}</Str> :
                  t
                )}
                {isCurrent && <Caret />}
              </div>
            )
          })}
        </div>
      </EditorLines>
    </ViewLayer>
  )
}

/* View 2: Web preview (rendered app shell) */

const PreviewShell = styled.div`
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: 38px 1fr;
  gap: 0;
  background: ${({ theme }) => theme.colors.bg};
`

const PreviewTopbar = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.02);
`

const PreviewBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: ${({ theme }) => theme.gradients.brand};
  }
`

const PreviewCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.textTertiary};

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`

const PreviewSearch = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  width: 180px;
`

const PreviewAvatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.brand};
  border: 1px solid rgba(255, 255, 255, 0.12);
`

const PreviewSidebar = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.7rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  background: rgba(255, 255, 255, 0.012);
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  font-family: ${({ theme }) => theme.fonts.body || theme.fonts.display};
  font-size: 0.7rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textTertiary)};
  background: ${({ $active }) => ($active ? "rgba(255,255,255,0.06)" : "transparent")};
  border-left: 2px solid ${({ $active, theme }) => ($active ? theme.colors.accent : "transparent")};

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.border)};
  }
`

const NavSection = styled.div`
  margin-top: 0.5rem;
  padding: 0 0.55rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.55rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const PreviewMain = styled.div`
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  overflow: hidden;
`

const PreviewHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const PreviewTitle = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.01em;
`

const PreviewCountBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.45rem;
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.45rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`

const StatLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const StatDelta = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.55rem;
  color: ${({ $tone, theme }) =>
    $tone === "up" ? theme.colors.success : $tone === "down" ? theme.colors.error : theme.colors.textTertiary};
`

const PreviewWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  min-height: 0;
`

const PreviewCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.55rem 0.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const PreviewImg = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 6px;
  background:
    radial-gradient(circle at 30% 30%, ${({ $hueA }) => $hueA || "rgba(6, 215, 255, 0.28)"}, transparent 60%),
    radial-gradient(circle at 70% 70%, ${({ $hueB }) => $hueB || "rgba(30, 64, 175, 0.28)"}, transparent 60%),
    rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const PreviewBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.1rem 0.4rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.55rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ $tone }) =>
    $tone === "low" ? "rgba(239, 68, 68, 0.12)" : $tone === "mid" ? "rgba(245, 158, 11, 0.12)" : "rgba(16, 185, 129, 0.12)"};
  color: ${({ $tone, theme }) =>
    $tone === "low" ? theme.colors.error : $tone === "mid" ? "#F59E0B" : theme.colors.success};
  border: 1px solid ${({ $tone }) =>
    $tone === "low" ? "rgba(239, 68, 68, 0.3)" : $tone === "mid" ? "rgba(245, 158, 11, 0.3)" : "rgba(16, 185, 129, 0.3)"};
  width: fit-content;
`

const PRODUCTS = [
  { name: "Yerba Mate · 1kg",        sku: "YER-001", price: "$ 1.840", stock: "Stock 142", tone: "ok",  hueA: "rgba(16,185,129,0.32)",  hueB: "rgba(6,215,255,0.28)" },
  { name: "Aceite Girasol · 1.5L",   sku: "ACT-024", price: "$ 2.290", stock: "Stock 88",  tone: "mid", hueA: "rgba(245,158,11,0.32)",  hueB: "rgba(255,189,46,0.22)" },
  { name: "Detergente · 750ml",      sku: "DET-112", price: "$ 980",   stock: "Stock 210", tone: "ok",  hueA: "rgba(6,215,255,0.32)",   hueB: "rgba(30,64,175,0.28)" },
  { name: "Harina 0000 · 1kg",       sku: "HAR-007", price: "$ 720",   stock: "Stock 56",  tone: "mid", hueA: "rgba(250,250,250,0.18)", hueB: "rgba(245,158,11,0.22)" },
  { name: "Leche Entera · 1L",       sku: "LCH-301", price: "$ 1.150", stock: "Stock 18",  tone: "low", hueA: "rgba(239,68,68,0.28)",   hueB: "rgba(255,189,46,0.18)" },
  { name: "Pan Lactal · 540g",       sku: "PAN-040", price: "$ 1.480", stock: "Stock 74",  tone: "ok",  hueA: "rgba(245,158,11,0.28)",  hueB: "rgba(16,185,129,0.22)" },
]

const STATS = [
  { label: "SKU activos",   value: "142",       delta: "+12 este mes",  tone: "up" },
  { label: "Stock total",   value: "8.420",     delta: "+3.4%",         tone: "up" },
  { label: "Stock crítico", value: "7",         delta: "−2 vs ayer",    tone: "down" },
  { label: "Facturado hoy", value: "$ 184.230", delta: "+8 órdenes",    tone: "up" },
]

const NAV = [
  { label: "Inicio",    section: "general" },
  { label: "Productos", section: "general", active: true },
  { label: "Stock",     section: "general" },
  { label: "Pedidos",   section: "general" },
  { label: "Clientes",  section: "ventas" },
  { label: "Facturas",  section: "ventas" },
  { label: "Reportes",  section: "ventas" },
  { label: "Ajustes",   section: "admin"  },
]

function PreviewView() {
  return (
    <ViewLayer
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35 }}
      style={{ padding: 0 }}
    >
      <PreviewShell>
        <PreviewTopbar>
          <PreviewBrand>biztek</PreviewBrand>
          <PreviewCrumbs>
            <span>Catálogo</span>
            <span>›</span>
            <strong>Productos</strong>
          </PreviewCrumbs>
          <PreviewSearch>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <span>Buscar producto, SKU…</span>
          </PreviewSearch>
          <PreviewAvatar />
        </PreviewTopbar>

        <PreviewSidebar>
          {["general", "ventas", "admin"].map((sec) => (
            <div key={sec}>
              <NavSection>{sec}</NavSection>
              {NAV.filter((n) => n.section === sec).map((n) => (
                <NavItem key={n.label} $active={n.active}>{n.label}</NavItem>
              ))}
            </div>
          ))}
        </PreviewSidebar>

        <PreviewMain>
          <PreviewHeader>
            <PreviewTitle>Productos</PreviewTitle>
            <PreviewCountBadge>142 productos · 6 mostrados</PreviewCountBadge>
          </PreviewHeader>

          <StatsRow>
            {STATS.map((s, i) => (
              <StatCard key={s.label} as={motion.div}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
              >
                <StatLabel>{s.label}</StatLabel>
                <StatValue>{s.value}</StatValue>
                <StatDelta $tone={s.tone}>{s.delta}</StatDelta>
              </StatCard>
            ))}
          </StatsRow>

          <PreviewWrap>
            {PRODUCTS.map((p, i) => (
              <PreviewCard
                key={p.sku}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
              >
                <PreviewImg $hueA={p.hueA} $hueB={p.hueB} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <strong style={{ fontFamily: "var(--display, serif)", fontSize: "0.72rem", color: "#FAFAFA" }}>{p.name}</strong>
                  <span style={{ fontFamily: "var(--mono, monospace)", fontSize: "0.55rem", color: "rgba(255,255,255,0.4)" }}>{p.sku}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--mono, monospace)", fontSize: "0.74rem", color: "#06D7FF" }}>{p.price}</span>
                  <PreviewBadge $tone={p.tone}>
                    <span style={{ width: 5, height: 5, background: "currentColor", borderRadius: "50%", display: "inline-block" }} />
                    {p.stock}
                  </PreviewBadge>
                </div>
              </PreviewCard>
            ))}
          </PreviewWrap>
        </PreviewMain>
      </PreviewShell>
    </ViewLayer>
  )
}

/* View 3: Terminal / tests */

const TerminalBody = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.7rem 0.85rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  overflow: hidden;
`

const TermLine = styled(motion.div)`
  display: flex;
  gap: 0.35rem;
`

const TermOk = styled.span`color: ${({ theme }) => theme.colors.success};`
const TermAccent = styled.span`color: ${({ theme }) => theme.colors.accent};`
const TermDim = styled.span`color: ${({ theme }) => theme.colors.textTertiary};`

const TEST_LINES = [
  { kind: "cmd", text: "$ npm test" },
  { kind: "info", text: "PASS  src/components/ProductCard.test.tsx" },
  { kind: "info", text: "PASS  src/utils/format.test.ts" },
  { kind: "ok", text: "  ✓ formats currency in ARS" },
  { kind: "ok", text: "  ✓ truncates long names" },
  { kind: "ok", text: "  ✓ renders stock badge" },
  { kind: "info", text: "PASS  src/api/products.test.ts" },
  { kind: "ok", text: "  ✓ returns paginated list" },
  { kind: "summary", text: "Tests: 42 passed, 42 total" },
  { kind: "summary", text: "Time:  1.82s" },
]

function TerminalView() {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown >= TEST_LINES.length) return
    const id = setTimeout(() => setShown((s) => s + 1), 220)
    return () => clearTimeout(id)
  }, [shown])

  return (
    <ViewLayer
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35 }}
    >
      <TerminalBody>
        {TEST_LINES.slice(0, shown).map((l, i) => (
          <TermLine key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
            {l.kind === "cmd" && <TermAccent>{l.text}</TermAccent>}
            {l.kind === "info" && <TermDim>{l.text}</TermDim>}
            {l.kind === "ok" && <TermOk>{l.text}</TermOk>}
            {l.kind === "summary" && <span style={{ color: "#FAFAFA" }}>{l.text}</span>}
          </TermLine>
        ))}
      </TerminalBody>
    </ViewLayer>
  )
}

const LAPTOP_TABS = [
  { id: "editor", label: "ProductGrid.tsx", tone: "yellow", view: EditorView, duration: 9000 },
  { id: "preview", label: "localhost:3000", tone: "default", view: PreviewView, duration: 4500 },
  { id: "terminal", label: "tests", tone: "default", view: TerminalView, duration: 5500 },
]

function LaptopVisual({ $full }) {
  const [tabIdx, setTabIdx] = useState(0)
  const tab = LAPTOP_TABS[tabIdx]
  const ActiveView = tab.view
  const cycleScale = $full ? 1 : 0.5

  useEffect(() => {
    const id = setTimeout(
      () => setTabIdx((p) => (p + 1) % LAPTOP_TABS.length),
      tab.duration * cycleScale
    )
    return () => clearTimeout(id)
  }, [tabIdx, tab.duration, cycleScale])

  return (
    <LaptopWrap $full={$full}>
      <LaptopScreen>
        <ScreenInner>
          <ScreenChrome>
            <ScreenDots>
              <span /><span /><span />
            </ScreenDots>
            <TabBar>
              {LAPTOP_TABS.map((t, i) => (
                <Tab key={t.id} $active={i === tabIdx}>
                  <TabDot $tone={t.tone} />
                  {t.label}
                </Tab>
              ))}
            </TabBar>
            <StatusDot />
          </ScreenChrome>
          <ScreenBody>
            <AnimatePresence mode="wait">
              <ActiveView key={tab.id} $full={$full} />
            </AnimatePresence>
          </ScreenBody>
        </ScreenInner>
      </LaptopScreen>
      <LaptopBase />
    </LaptopWrap>
  )
}

function LaptopFullVisual() {
  return <LaptopVisual $full />
}

/* ---------- VISUAL ROUTER ---------- */

const VISUAL_META = {
  phoneDashboard: { kind: "phone", visual: PhoneDashboardVisual },
  phoneList: { kind: "phone", visual: PhoneListVisual },
  tabletDashboard: { kind: "tablet", visual: TabletDashboardVisual },
  laptop: { kind: "laptop", visual: LaptopVisual },
  laptopFull: { kind: "laptopFull", visual: LaptopFullVisual },
  browserDashboard: { kind: "panel", chrome: "panel.biztek.live", visual: LiveDashboardVisual },
  code: { kind: "panel", chrome: "biztek/handler", visual: CodeEditorVisual },
  diagram: { kind: "panel", chrome: "biztek/integraciones", visual: IntegrationsVisual },
}

function SlideVisual({ kind }) {
  const meta = VISUAL_META[kind]
  const Component = meta.visual
  if (meta.kind === "phone" || meta.kind === "tablet" || meta.kind === "laptop" || meta.kind === "laptopFull") {
    return <Component />
  }
  return (
    <Panel>
      <PanelChrome>
        <PanelDotsRow>
          <span /><span /><span />
        </PanelDotsRow>
        <PanelTitle>
          <strong>biztek</strong> · {meta.chrome}
        </PanelTitle>
        <StatusDot />
      </PanelChrome>
      <PanelBody>
        <Component />
      </PanelBody>
    </Panel>
  )
}

/* ---------- HERO ---------- */

const textVariants = {
  enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
}

const visualVariants = {
  enter: (dir) => ({ x: dir > 0 ? 160 : -160, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -160 : 160, opacity: 0, scale: 0.96 }),
}

const DragStage = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $fullVisual }) =>
    $fullVisual ? "1fr" : "minmax(0, 0.9fr) minmax(0, 1.1fr)"};
  align-items: ${({ $fullVisual }) => ($fullVisual ? "center" : "center")};
  gap: ${({ $fullVisual, theme }) => ($fullVisual ? theme.spacing.md : theme.spacing.xxl)};
  width: 100%;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    cursor: default;
  }
`

const FullDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

const FullVisualTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
`

const FullVisualHeadline = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};

  em {
    font-style: normal;
    background: ${({ theme }) => theme.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const FullVisualSub = styled(motion.p)`
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 520px;
`

const ArrowBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.bgCardHover};
  }
`

export function Hero() {
  const [[idx, direction], setState] = useState([0, 1])
  const [paused, setPaused] = useState(false)
  const total = SLIDES.length
  const slide = SLIDES[idx]
  const timerRef = useRef(null)

  const paginate = (dir) => {
    setState(([prev]) => [(prev + dir + total) % total, dir])
  }

  const goTo = (target) => {
    setState(([prev]) => {
      if (target === prev) return [prev, 1]
      const dir = target > prev ? 1 : -1
      return [target, dir]
    })
  }

  const slideDuration = slide.durationMs ?? SLIDE_DURATION_MS

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(() => paginate(1), slideDuration)
    return () => clearTimeout(timerRef.current)
  }, [idx, paused, slideDuration])

  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}&text=Hola!%20Vi%20la%20landing%20de%20Biztek%20y%20me%20interesa%20charlar%20sobre%20un%20proyecto.`

  const dotsContent = (
    <>
      <ArrowBtn onClick={() => paginate(-1)} aria-label="Slide anterior">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </ArrowBtn>
      {SLIDES.map((s, i) => (
        <Dot
          key={s.id}
          $active={i === idx}
          onClick={() => goTo(i)}
          aria-label={`Ir a slide ${i + 1}`}
        >
          {i === idx && !paused && (
            <DotFill
              key={`fill-${idx}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: slideDuration / 1000, ease: "linear" }}
            />
          )}
        </Dot>
      ))}
      <ArrowBtn onClick={() => paginate(1)} aria-label="Slide siguiente">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </ArrowBtn>
    </>
  )

  return (
    <HeroSection id="hero">
      <MeshBg />
      <GridOverlay />
      <OrbCyan />
      <OrbPurple />

      <Container>
        <DragStage
          $fullVisual={slide.fullVisual}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          dragMomentum={false}
          onDragStart={() => setPaused(true)}
          onDragEnd={(_e, info) => {
            const threshold = 80
            if (info.offset.x < -threshold || info.velocity.x < -500) paginate(1)
            else if (info.offset.x > threshold || info.velocity.x > 500) paginate(-1)
            setPaused(false)
          }}
        >
        {slide.fullVisual && (
          <AnimatePresence mode="wait" custom={direction}>
            <FullVisualTop
              as={motion.div}
              key={`top-${slide.id}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.35 } }}
            >
              <Eyebrow>
                <Pulse />
                <span>{slide.eyebrow}</span>
              </Eyebrow>
              <FullVisualHeadline>
                {slide.title}{slide.titleEm && <><br /><em>{slide.titleEm}</em></>}
              </FullVisualHeadline>
            </FullVisualTop>
          </AnimatePresence>
        )}

        {!slide.fullVisual && (
          <Left>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={slide.id}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.35 } }}
                style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
              >
                <Eyebrow>
                  <Pulse />
                  <span>{slide.eyebrow}</span>
                </Eyebrow>
                <Headline>{slide.title}</Headline>
                <Sub>{slide.sub}</Sub>
                <CtaRow>
                  <CtaPrimary href={slide.ctaHref || whatsappLink} target={slide.ctaHref ? undefined : "_blank"} rel={slide.ctaHref ? undefined : "noopener noreferrer"}>
                    {slide.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </CtaPrimary>
                  <CtaSecondary href="#proyectos">Ver caso real</CtaSecondary>
                </CtaRow>
              </motion.div>
            </AnimatePresence>

            <Dots>{dotsContent}</Dots>
          </Left>
        )}

        <Right>
          <AnimatePresence mode="wait" custom={direction}>
            <PanelOuter
              key={slide.id}
              $kind={VISUAL_META[slide.visual]?.kind}
              custom={direction}
              variants={visualVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 240, damping: 30 }, opacity: { duration: 0.35 }, scale: { duration: 0.5 } }}
            >
              <SlideVisual kind={slide.visual} />
            </PanelOuter>
          </AnimatePresence>
        </Right>
        {slide.fullVisual && <FullDots>{dotsContent}</FullDots>}
        </DragStage>
      </Container>
    </HeroSection>
  )
}
