import styled from "styled-components"
import { siteConfig } from "../config/siteConfig"
import logo from "../images/logo.png"

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.bg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  background: linear-gradient(90deg, #f3f4f6 60%, #fff 100%);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    background: none;
    border-radius: 6px;
    box-shadow: none;
    margin-right: 0.5rem;
  }
`

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.8125rem;
  font-weight: 300;
`

const FooterTitle = styled.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8125rem;
  font-weight: 300;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      color: white;
    }
  }
`

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 300;
`

export function Footer() {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn>
          <Logo>
            <img src={logo} alt="Logo Biztek" />
            {siteConfig.company.name}
          </Logo>
          <FooterDescription>{siteConfig.company.description}</FooterDescription>
          <SocialLinks>
            <SocialLink
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Enlaces</FooterTitle>
          <FooterLinks>
            <li>
              <FooterLink href="#servicios">Servicios</FooterLink>
            </li>
            <li>
              <FooterLink href="#proceso">Cómo trabajamos</FooterLink>
            </li>
            <li>
              <FooterLink href="#tecnologias">Tecnologías</FooterLink>
            </li>
            <li>
              <FooterLink href="#clientes">Clientes</FooterLink>
            </li>
            <li>
              <FooterLink href="#contacto">Contacto</FooterLink>
            </li>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Legal</FooterTitle>
          <FooterLinks>
            <li>
              <FooterLink href="#terminos">Términos</FooterLink>
            </li>
            <li>
              <FooterLink href="#privacidad">Privacidad</FooterLink>
            </li>
          </FooterLinks>
        </FooterColumn>
      </FooterContainer>

      <FooterBottom>
        © {new Date().getFullYear()} {siteConfig.company.name}. Todos los derechos reservados.
      </FooterBottom>
    </FooterSection>
  )
}
