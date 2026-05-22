"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import { AbastolinkMockup } from "./AbastolinkMockup"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`

const BgAccent = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 25%, rgba(6, 215, 255, 0.07), transparent 60%);
  z-index: -1;
  pointer-events: none;
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

const SectionHead = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

const EyebrowChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 122, 26, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(255, 122, 26, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.accentWarm};
  width: fit-content;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.65rem, 2.6vw, 2.15rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
`

const CaseHead = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
`

const CaseTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};

  span {
    background: ${({ theme }) => theme.gradients.brand};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const CaseSubtitle = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 640px;
`

const MockupWrap = styled(motion.div)`
  position: relative;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  max-width: 1120px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgElevated};
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.gradients.brand};
    opacity: 0.15;
    filter: blur(50px);
    z-index: -1;
  }
`

const BrowserChrome = styled.div`
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme }) => theme.colors.bgAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: inline-block;
`

const UrlBar = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 4px 14px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  min-width: 220px;
  text-align: center;
`

const MockupImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const StoryCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const StoryHeading = styled.h4`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: -0.02em;

  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`

const StoryParagraph = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
`

const SideCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.bgCard};
  padding: ${({ theme }) => theme.spacing.md};
  backdrop-filter: blur(8px);
`

const CardTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const HighlightRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const HighlightLabel = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const HighlightValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 600;
  background: ${({ theme }) => theme.gradients.brand};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.text};
`

const ChipDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentGlow};
`

const ArrowLinkWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`

const ArrowLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};

  svg {
    transition: transform ${({ theme }) => theme.transitions.normal};
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.borderAccent};
  }

  &:hover svg {
    transform: translateX(6px);
  }
`

export function Projects() {
  const project = siteConfig.projects[0]
  if (!project) return null

  return (
    <Section id="proyectos">
      <BgAccent />
      <Container>
        <SectionHead {...fadeUp}>
          <EyebrowChip>05 · Trabajos</EyebrowChip>
          <SectionTitle>Últimos proyectos a producción</SectionTitle>
        </SectionHead>

        <CaseHead {...fadeUp}>
          <EyebrowChip>{project.eyebrow}</EyebrowChip>
          <CaseTitle>
            <span>{project.title}</span>
          </CaseTitle>
          <CaseSubtitle>{project.subtitle}</CaseSubtitle>
        </CaseHead>

        <MockupWrap
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrowserChrome>
            <Dot $color="#FF5F57" />
            <Dot $color="#FEBC2E" />
            <Dot $color="#28C840" />
            <UrlBar>abastolink.com</UrlBar>
          </BrowserChrome>
          <AbastolinkMockup />
        </MockupWrap>

        <Grid>
          <StoryCol
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <StoryHeading>El problema</StoryHeading>
            <StoryParagraph>{project.problem}</StoryParagraph>
            <StoryHeading>La solución</StoryHeading>
            <StoryParagraph>{project.solution}</StoryParagraph>
          </StoryCol>

          <SideCol
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card>
              <CardTitle>Resultados</CardTitle>
              {project.highlights.map((h) => (
                <HighlightRow key={h.label}>
                  <HighlightLabel>{h.label}</HighlightLabel>
                  <HighlightValue>{h.value}</HighlightValue>
                </HighlightRow>
              ))}
            </Card>

            <Card>
              <CardTitle>Stack</CardTitle>
              <Chips>
                {project.stack.map((tech) => (
                  <Chip key={tech}>
                    <ChipDot />
                    {tech}
                  </Chip>
                ))}
              </Chips>
            </Card>
          </SideCol>
        </Grid>

        <ArrowLinkWrap {...fadeUp}>
          <ArrowLink href="#cta">
            ¿Querés algo así para tu empresa? Hablemos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </ArrowLink>
        </ArrowLinkWrap>
      </Container>
    </Section>
  )
}
