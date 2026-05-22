"use client"

import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import logo from "../images/logo-inverted.png"

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`

const FooterWrap = styled.footer`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  padding: ${({ theme }) => theme.spacing.xxl} 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  }
`

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const BrandColumn = styled(Column)`
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 320px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-column: 1 / -1;
    max-width: 420px;
  }
`

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  img {
    height: 38px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  &:hover {
    opacity: 0.85;
  }
`

const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  width: fit-content;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const StatusRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: ${({ theme }) => theme.colors.textTertiary};
`

const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  animation: ${pulse} 2.2s infinite;
`

const ColTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
`

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding: 0;
  margin: 0;
`

const FooterLink = styled.a`
  position: relative;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};
  padding: 0.1rem 0;
  width: fit-content;
  line-height: 1.4;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

const SocialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 14px ${({ theme }) => theme.colors.accentGlow};
    transform: translateY(-2px);
  }
`

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

const Copy = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.02em;
  margin: 0;
`

const BottomMeta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.02em;

  svg {
    color: ${({ theme }) => theme.colors.accentAlt};
  }
`

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const HeartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappDigits = (siteConfig.contact.whatsapp || "").replace(/[^\d]/g, "")
  const whatsappLink = whatsappDigits ? `https://api.whatsapp.com/send?phone=${whatsappDigits}` : null
  const services = (siteConfig.services || []).slice(0, 5)
  const social = siteConfig.social || {}
  const hasSocial = Boolean(social.linkedin || social.instagram)

  return (
    <FooterWrap>
      <Container
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Grid>
          <BrandColumn>
            <LogoLink href="#hero" aria-label={`${siteConfig.company.name} - Inicio`}>
              <img src={logo} alt={`${siteConfig.company.name} logo`} />
            </LogoLink>
            <Tagline>{siteConfig.company.tagline}.</Tagline>

            <ContactBlock>
              {siteConfig.contact.email && (
                <ContactLink href={`mailto:${siteConfig.contact.email}`}>
                  <MailIcon />
                  {siteConfig.contact.email}
                </ContactLink>
              )}
              {whatsappLink && (
                <ContactLink href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  WhatsApp
                </ContactLink>
              )}
            </ContactBlock>

            <StatusRow>
              <StatusDot />
              Tomando proyectos
            </StatusRow>
          </BrandColumn>

          <Column>
            <ColTitle>Navegación</ColTitle>
            <LinkList>
              {navItems.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </LinkList>
          </Column>

          <Column>
            <ColTitle>Servicios</ColTitle>
            <LinkList>
              {services.map((service) => (
                <li key={service.id}>
                  <FooterLink href="#servicios">{service.title}</FooterLink>
                </li>
              ))}
            </LinkList>
          </Column>

          {hasSocial && (
            <Column>
              <ColTitle>Redes</ColTitle>
              <SocialList>
                {social.linkedin && (
                  <SocialIcon
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </SocialIcon>
                )}
                {social.instagram && (
                  <SocialIcon
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </SocialIcon>
                )}
              </SocialList>
            </Column>
          )}
        </Grid>

        <BottomRow>
          <Copy>© {year} {siteConfig.company.name}. Todo el código queda tuyo.</Copy>
          <BottomMeta>
            Made with <HeartIcon /> in Argentina
          </BottomMeta>
        </BottomRow>
      </Container>
    </FooterWrap>
  )
}
