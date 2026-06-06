"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { useT } from "../context/LangContext"

const easeOut = [0.22, 1, 0.36, 1]

// industries from translations

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
    radial-gradient(circle at 50% 0%, rgba(6, 215, 255, 0.06), transparent 50%);
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
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--color-borderAccent);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(6, 215, 255, 0.06);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  width: fit-content;
`

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.85rem, 3.6vw, 2.75rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text);
`

const Highlight = styled.span`
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 140px;
  background: var(--color-bgCard);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: var(--color-textSecondary);
  transition:
    border-color ${({ theme }) => theme.transitions.normal},
    background ${({ theme }) => theme.transitions.normal},
    color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal};

  svg {
    width: 28px;
    height: 28px;
    color: var(--color-textTertiary);
    transition: color ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    border-color: var(--color-borderHover);
    background: var(--color-bgCardHover);
    color: var(--color-text);
    transform: translateY(-2px);
  }

  &:hover svg {
    color: var(--color-accent);
  }
`

const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  line-height: 1.3;
`

export function Clients() {
  const t = useT()
  return (
    <Section id="clientes">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {t.clients.eyebrow}
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            {t.clients.title} <Highlight>{t.clients.titleEm}</Highlight> {t.clients.titleSub}
          </Title>
        </Header>

        <Grid>
          {t.clients.industries.map((label, i) => (
            <Card
              key={`ind-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: easeOut,
                delay: i * 0.06,
              }}
            >
              <CardLabel>{label}</CardLabel>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
