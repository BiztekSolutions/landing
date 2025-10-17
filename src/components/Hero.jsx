"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: 80px;
`

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: 
    radial-gradient(circle at 20% 30%, ${({ theme }) => theme.colors.primary} 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, ${({ theme }) => theme.colors.secondary} 0%, transparent 50%);
  filter: blur(80px);
  pointer-events: none;
`

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    text-align: center;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const Headline = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 3.75rem);
  font-weight: 500;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
`

const Subheadline = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  font-weight: 300;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 auto;
  }
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 194, 255, 0.25);
  }
`

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    background: rgba(15, 23, 42, 0.02);
    transform: translateY(-2px);
  }
`

const HeroIllustration = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: -1;
    height: 350px;
  }
`

const IllustrationSVG = styled.svg`
  width: 100%;
  height: 100%;
  max-width: 500px;
`

export function Hero() {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}&text=Hola! Me interesa conocer más sobre sus servicios.`

  return (
    <HeroSection id="hero">
      <HeroBackground />
      <HeroContainer>
        <HeroContent>
          <Headline initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {siteConfig.company.slogan}
          </Headline>
          <Subheadline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {siteConfig.company.description}
          </Subheadline>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PrimaryButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hablar por WhatsApp
            </PrimaryButton>
            <SecondaryButton href="#servicios">Conocer servicios</SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroIllustration
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <IllustrationSVG viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#00C2FF", stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: "#0070F3", stopOpacity: 0.6 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#0070F3", stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: "#00C2FF", stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>

            {/* Outer rings */}
            <circle cx="250" cy="250" r="200" stroke="url(#grad1)" strokeWidth="1" fill="none" opacity="0.2" />
            <circle cx="250" cy="250" r="160" stroke="url(#grad1)" strokeWidth="1" fill="none" opacity="0.3" />
            <circle cx="250" cy="250" r="120" stroke="url(#grad2)" strokeWidth="1.5" fill="none" opacity="0.4" />

            {/* Geometric nodes */}
            <circle cx="250" cy="50" r="8" fill="#00C2FF" opacity="0.8" />
            <circle cx="450" cy="250" r="8" fill="#0070F3" opacity="0.8" />
            <circle cx="250" cy="450" r="8" fill="#00C2FF" opacity="0.8" />
            <circle cx="50" cy="250" r="8" fill="#0070F3" opacity="0.8" />

            {/* Diagonal nodes */}
            <circle cx="355" cy="145" r="6" fill="#00C2FF" opacity="0.6" />
            <circle cx="355" cy="355" r="6" fill="#0070F3" opacity="0.6" />
            <circle cx="145" cy="355" r="6" fill="#00C2FF" opacity="0.6" />
            <circle cx="145" cy="145" r="6" fill="#0070F3" opacity="0.6" />

            {/* Connecting lines */}
            <line x1="250" y1="50" x2="450" y2="250" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
            <line x1="450" y1="250" x2="250" y2="450" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" />
            <line x1="250" y1="450" x2="50" y2="250" stroke="url(#grad2)" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="250" x2="250" y2="50" stroke="url(#grad2)" strokeWidth="1" opacity="0.3" />

            {/* Center geometric shape */}
            <rect x="210" y="210" width="80" height="80" rx="12" fill="url(#grad1)" opacity="0.15" />
            <rect x="220" y="220" width="60" height="60" rx="8" stroke="url(#grad1)" strokeWidth="2" fill="white" />
            <circle cx="250" cy="250" r="15" fill="url(#grad1)" opacity="0.8" />
          </IllustrationSVG>
        </HeroIllustration>
      </HeroContainer>
    </HeroSection>
  )
}
