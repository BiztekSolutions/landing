"use client"

import { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import logo from "../images/logo-inverted.png"

const Nav = styled(motion.nav)`
  position: fixed;
  top: 18px;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  transition: top ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 12px;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: all;
  min-height: 60px;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.bgGlass};
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      border-color: ${theme.colors.borderHover};
      box-shadow: ${theme.shadows.lg};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.4rem 0.5rem 0.4rem 0.9rem;
    min-height: 52px;
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  img {
    height: 36px;
    width: auto;
    object-fit: contain;
    display: block;
    transition: height ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    img {
      height: 30px;
    }
  }
`

const NavLinks = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: -0.005em;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.brand};
    border-radius: 1px;
    transition: width 0.32s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &:hover::after {
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`

const CTAButton = styled.a`
  padding: 0.55rem 1.1rem;
  background: ${({ theme }) => theme.gradients.brand};
  color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: -0.005em;
  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06) inset;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.glow},
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }

  span {
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all ${({ theme }) => theme.transitions.fast};
    transform-origin: center;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg) translateY(6px)" : "none")};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg) translateY(-6px)" : "none")};
    }
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 84px;
  left: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  pointer-events: all;
  background: ${({ theme }) => theme.colors.bgGlass};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const MobileNavLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgCardHover};
    color: ${({ theme }) => theme.colors.text};
  }
`

const MobileCTAButton = styled.a`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: 0.85rem 1rem;
  background: ${({ theme }) => theme.gradients.brand};
  color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  text-align: center;
  font-size: 0.95rem;
`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo trabajamos", href: "#proceso" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contacto", href: "#contacto" },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <NavContainer $scrolled={scrolled}>
        <Logo href="#hero" aria-label={`${siteConfig?.name ?? "Biztek"} - Inicio`}>
          <img src={logo} alt="Logo" />
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </NavLinks>

        <CTAButton href="#contacto">Contactanos</CTAButton>

        <HamburgerButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          $isOpen={mobileMenuOpen}
          aria-label="Menú de navegación"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLinks>
              {navItems.map((item) => (
                <li key={item.href}>
                  <MobileNavLink href={item.href} onClick={handleNavClick}>
                    {item.label}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavLinks>
            <MobileCTAButton href="#contacto" onClick={handleNavClick}>
              Contactanos
            </MobileCTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  )
}
