"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components"
import { motion, useInView } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1]

const ROW_TILES = 32
const LABEL_SPAN = 12
const VALUE_SPAN = 13
const FLIP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
const TILE_INTERVAL_MS = 55
const TILE_DURATION_MIN = 600
const TILE_DURATION_MAX = 1100
const TILE_STAGGER_MS = 38

const STATS = [
  { label: "RESPUESTA INICIAL", value: "24 HS" },
  { label: "PRIMER MVP", value: "4 8 SEM" },
  { label: "DEMO POR SPRINT", value: "1 2 SEM" },
  { label: "CODIGO TUYO", value: "100%" },
]

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
    radial-gradient(circle at 20% 10%, rgba(6, 215, 255, 0.08), transparent 45%),
    radial-gradient(circle at 80% 90%, rgba(30, 64, 175, 0.06), transparent 45%);
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
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  max-width: 720px;
`

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(6, 215, 255, 0.06);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentGlow};
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

const Board = styled(motion.div)`
  --tile-w: 32px;
  --tile-h: 44px;
  --tile-gap: 2px;
  --tile-font: 22px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;
  background: #050509;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    --tile-w: 24px;
    --tile-h: 34px;
    --tile-font: 17px;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --tile-w: 18px;
    --tile-h: 26px;
    --tile-gap: 1px;
    --tile-font: 13px;
    padding: ${({ theme }) => theme.spacing.sm};
    gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --tile-w: 14px;
    --tile-h: 20px;
    --tile-font: 10px;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${ROW_TILES}, var(--tile-w));
  gap: var(--tile-gap);
`

const Tile = styled.div`
  position: relative;
  width: var(--tile-w);
  height: var(--tile-h);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: var(--tile-font);
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ $empty }) => ($empty ? "#020205" : "#0A0A0E")};
  border: 1px solid ${({ $empty }) => ($empty ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)")};
  border-radius: 3px;
  overflow: hidden;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 48%,
      rgba(0, 0, 0, 0.35) 50%,
      rgba(0, 0, 0, 0.15) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.6);
    pointer-events: none;
  }
`

const TileChar = styled.span`
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, #FAFAFA 0%, #B8B8C0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  letter-spacing: 0;
`

function buildRowChars(label, value) {
  const chars = new Array(ROW_TILES).fill(null)
  const cleanLabel = label.slice(0, LABEL_SPAN).toUpperCase()
  for (let i = 0; i < cleanLabel.length; i++) {
    chars[i] = cleanLabel[i]
  }
  const cleanValue = value.slice(0, VALUE_SPAN).toUpperCase()
  const valueStart = ROW_TILES - cleanValue.length
  for (let i = 0; i < cleanValue.length; i++) {
    chars[valueStart + i] = cleanValue[i]
  }
  return chars
}

function FlipTile({ targetChar, delay, active }) {
  const isEmpty = targetChar === null || targetChar === " " || targetChar === undefined
  const [display, setDisplay] = useState(isEmpty ? " " : " ")
  const settledRef = useRef(false)

  useEffect(() => {
    if (!active) return
    if (settledRef.current) return
    if (isEmpty) {
      setDisplay(" ")
      settledRef.current = true
      return
    }

    let interval = null
    let stopTimeout = null
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        const pool =
          /[0-9]/.test(targetChar) || targetChar === "." || targetChar === "%"
            ? "0123456789".split("")
            : FLIP_CHARS
        const next = pool[Math.floor(Math.random() * pool.length)]
        setDisplay(next)
      }, TILE_INTERVAL_MS)

      const duration =
        TILE_DURATION_MIN + Math.random() * (TILE_DURATION_MAX - TILE_DURATION_MIN)
      stopTimeout = setTimeout(() => {
        if (interval) clearInterval(interval)
        setDisplay(targetChar)
        settledRef.current = true
      }, duration)
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (stopTimeout) clearTimeout(stopTimeout)
      if (interval) clearInterval(interval)
    }
  }, [active, targetChar, delay, isEmpty])

  return (
    <Tile $empty={isEmpty}>
      {!isEmpty && <TileChar>{display}</TileChar>}
    </Tile>
  )
}

function FlipRow({ label, value, rowDelay, active }) {
  const chars = useMemo(() => buildRowChars(label, value), [label, value])
  return (
    <Row>
      {chars.map((c, i) => (
        <FlipTile
          key={i}
          targetChar={c}
          delay={rowDelay + i * TILE_STAGGER_MS}
          active={active}
        />
      ))}
    </Row>
  )
}

export function Stats() {
  const boardRef = useRef(null)
  const inView = useInView(boardRef, { once: true, margin: "-80px" })

  return (
    <Section id="stats">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <Dot />
            06 · Compromisos
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            Lo que prometemos <Highlight>por escrito</Highlight>
          </Title>
          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            Reglas que firmamos al arrancar. Sin letra chica, sin sorpresas.
          </Sub>
        </Header>

        <Board
          ref={boardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {STATS.map((stat, i) => (
            <FlipRow
              key={stat.label}
              label={stat.label}
              value={stat.value}
              rowDelay={i * 120}
              active={inView}
            />
          ))}
        </Board>
      </Container>
    </Section>
  )
}
