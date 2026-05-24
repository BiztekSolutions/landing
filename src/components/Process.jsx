"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const easeOut = [0.22, 1, 0.36, 1]

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  isolation: isolate;
  overflow-x: clip;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
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
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
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

/* ── Timeline ── */

const Timeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, 1fr);
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

const Track = styled.div`
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const TrackFill = styled(motion.div)`
  position: absolute;
  inset: 0 auto 0 0;
  background: ${({ theme }) => theme.gradients.brand};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.accentGlow};
`

const Step = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.md} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    gap: ${({ theme }) => theme.spacing.md};

    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`

const NodeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 2px;
  }
`

const Node = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.08em;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: border-color ${({ theme }) => theme.transitions.normal},
    color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  ${Step}:hover & {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentGlow};
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  flex: 1;
  transition: border-color ${({ theme }) => theme.transitions.normal};

  ${Step}:hover & {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`

const StepNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const StepTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.text};
`

const StepDesc = styled.p`
  font-size: 0.88rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export function Process() {
  const steps = siteConfig.process

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

        <Timeline $count={steps.length}>
          <Track>
            <TrackFill
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
            />
          </Track>

          {steps.map((s, i) => (
            <Step
              key={s.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.1 + i * 0.1 }}
            >
              <NodeWrap>
                <Node>{s.step}</Node>
              </NodeWrap>
              <Card>
                <StepNum>Paso {s.step}</StepNum>
                <StepTitle>{s.title}</StepTitle>
                <StepDesc>{s.description}</StepDesc>
              </Card>
            </Step>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}
