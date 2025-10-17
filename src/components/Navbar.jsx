"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import logo from "../images/logo.png"

const Nav = styled(motion.nav)`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 1000;
  pointer-events: none;
  background: none;
  transition: all ${({ theme }) => theme.transitions.normal};
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  padding: 0.75rem 2.5rem 0.75rem 2rem;
  pointer-events: all;
  min-height: 64px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.5rem 1rem;
    border-radius: 14px;
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 2.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};
  border-radius: 12px;
  background: none;
  box-shadow: none;

  img {
    width: 78px;
    object-fit: contain;
    background: none;
    box-shadow: none;
    margin-right: 0.5rem;
    transition: width 0.2s, height 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
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
  font-size: 0.9375rem;
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
    background: linear-gradient(90deg, #00C2FF 0%, #0070F3 100%);
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
  padding: 0.625rem 1.25rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
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
    width: 24px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text};
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
  top: 70px;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`

const MobileNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 1.125rem;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgAlt};
    color: ${({ theme }) => theme.colors.primary};
  }
`

const MobileCTAButton = styled.a`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  text-align: center;
`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
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
    <Nav $scrolled={scrolled} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <NavContainer>
        <Logo href="#hero" aria-label="Biztek Solutions - Inicio">
          <img src={logo} alt="Logo Biztek" />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
