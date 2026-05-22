"use client"

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const easeOut = [0.22, 1, 0.36, 1]

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
    radial-gradient(circle at 15% 20%, rgba(6, 215, 255, 0.07), transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(30, 64, 175, 0.07), transparent 45%);
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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 760px;
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
  max-width: 560px;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const StickyCol = styled.div`
  position: sticky;
  top: 96px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 1.75rem;
  background: ${({ theme }) => theme.colors.bgCard};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

const StickyInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

const BigNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const StepTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.35rem, 2.2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`

const StepDesc = styled.p`
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 460px;
`

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const ProgressTrack = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`

const ProgressFill = styled(motion.div)`
  position: absolute;
  inset: 0 auto 0 0;
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: inherit;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentGlow};
`

const StepsCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const StepBlock = styled.div`
  min-height: 38vh;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  padding-left: ${({ theme }) => theme.spacing.md};
  border-left: 2px solid
    ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.border)};
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  transition:
    opacity ${({ theme }) => theme.transitions.normal},
    border-color ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 0;
    opacity: 1;
    padding: ${({ theme }) => theme.spacing.lg};
    padding-left: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.colors.bgCard};
    backdrop-filter: blur(12px);
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-left: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`

const StepInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`

const StepNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const SmallTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`

const SmallDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 520px;
`

export function Process() {
  const steps = siteConfig.process
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!stepRefs.current.length) return

    let frame = 0
    const update = () => {
      frame = 0
      const viewportCenter = window.innerHeight / 2
      let closestIdx = 0
      let closestDist = Infinity
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - viewportCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestIdx = i
        }
      })
      setActiveStep(closestIdx)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [steps.length])

  const current = steps[activeStep] || steps[0]
  const progress = ((activeStep + 1) / steps.length) * 100

  return (
    <Section id="proceso">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            03 · Proceso
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            De idea a <Highlight>producción</Highlight>, sin sorpresas
          </Title>
          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            Sprints cortos. Demos en vivo. Vos ves avances reales cada semana.
          </Sub>
        </Header>

        <Layout>
          <StickyCol>
            <StickyInner>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
                >
                  <BigNumber>{current.step}</BigNumber>
                  <StepTitle>{current.title}</StepTitle>
                  <StepDesc>{current.description}</StepDesc>
                </motion.div>
              </AnimatePresence>

              <ProgressWrap>
                <ProgressLabel>
                  <span>
                    {String(activeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </span>
                  <span>Progreso</span>
                </ProgressLabel>
                <ProgressTrack>
                  <ProgressFill
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: easeOut }}
                  />
                </ProgressTrack>
              </ProgressWrap>
            </StickyInner>
          </StickyCol>

          <StepsCol>
            {steps.map((s, i) => (
              <StepBlock
                key={s.step}
                ref={(el) => (stepRefs.current[i] = el)}
                data-index={i}
                $active={i === activeStep}
              >
                <StepInner>
                  <StepNum>Paso {s.step}</StepNum>
                  <SmallTitle>{s.title}</SmallTitle>
                  <SmallDesc>{s.description}</SmallDesc>
                </StepInner>
              </StepBlock>
            ))}
          </StepsCol>
        </Layout>
      </Container>
    </Section>
  )
}
