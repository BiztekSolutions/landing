"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { HiCheckCircle } from "react-icons/hi2"
import { useT } from "../context/LangContext"
import { siteConfig } from "../config/siteConfig"

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxl} 0;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Panel = styled(motion.div)`
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};
  background: var(--color-bgAlt);
  overflow: hidden;
  isolation: isolate;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
  }
`

const Mesh = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(circle at 30% 20%, rgba(6, 215, 255, 0.22), transparent 55%),
    radial-gradient(circle at 75% 85%, rgba(30, 64, 175, 0.2), transparent 55%);
`

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
  pointer-events: none;
`

const DecoCircle = styled.div`
  position: absolute;
  width: 540px;
  height: 540px;
  border-radius: 50%;
  border: 1px solid var(--color-borderAccent);
  opacity: 0.25;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 80px;
    border-radius: 50%;
    border: 1px solid var(--color-borderAccent);
    opacity: 0.6;
  }
`

const Trust = styled(motion.ul)`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  color: var(--color-textSecondary);
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  svg {
    color: var(--color-accent);
    flex-shrink: 0;
  }
`

const Headline = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: var(--color-text);
  margin: 0 auto;
  max-width: 880px;

  span {
    background: var(--gradient-brand);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Sub = styled(motion.p)`
  font-size: 1.15rem;
  color: var(--color-textSecondary);
  max-width: 520px;
  margin: ${({ theme }) => theme.spacing.md} auto ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`

const CtaRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const CtaPrimary = styled.a`
  position: relative;
  padding: 0.95rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: var(--color-bg);
  background: var(--color-accent);
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  transition: all ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-brand);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px var(--color-accentGlow);
    color: var(--color-text);
  }

  &:hover::before {
    opacity: 1;
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover svg {
    transform: translateX(3px);
  }
`

const CtaSecondary = styled.a`
  padding: 0.95rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background: var(--color-bgCard);
  backdrop-filter: blur(8px);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: var(--color-borderHover);
    transform: translateY(-2px);
    background: var(--color-bgCardHover);
  }
`

export function CTA() {
  const t = useT()
  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}&text=Hola!%20Quiero%20agendar%20una%20llamada%20con%20Biztek.`
  const mailtoLink = `mailto:${siteConfig.contact.email}`

  return (
    <Section id="cta">
      <Container>
        <Panel {...fadeUp}>
          <Mesh />
          <GridOverlay />
          <DecoCircle />

          <Trust
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {t.cta.trusts.map((trust) => (
              <li key={trust}><HiCheckCircle size={16} /> {trust}</li>
            ))}
          </Trust>

          <Headline
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.cta.title} <span>{t.cta.titleEm}</span>{t.cta.titleEnd}
          </Headline>

          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {t.cta.sub}
          </Sub>

          <CtaRow
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <CtaPrimary href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t.cta.primaryCta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </CtaPrimary>
            <CtaSecondary href={mailtoLink}>
              {t.cta.secondaryCta}
            </CtaSecondary>
          </CtaRow>
        </Panel>
      </Container>
    </Section>
  )
}
