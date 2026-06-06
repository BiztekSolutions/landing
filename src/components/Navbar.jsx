"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import styled, { css } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { siteConfig } from "../config/siteConfig"
import logoDark from "../images/logo-inverted.png"
import logoLight from "../images/logo.png"
import { useThemeToggle } from "../context/ThemeContext"
import { useLang, useT } from "../context/LangContext"

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
  background: var(--color-bgGlass);
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: var(--shadow-md);
  transition: border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      border-color: var(--color-borderHover);
      box-shadow: var(--shadow-lg);
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
  color: var(--color-textSecondary);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: -0.005em;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:hover {
    color: var(--color-text);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-brand);
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
  background: var(--gradient-brand);
  color: var(--color-bg);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: -0.005em;
  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06) inset;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-glow),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

const ThemeToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid var(--color-border);
  background: var(--color-bgCard);
  color: var(--color-textSecondary);
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-borderHover);
    color: var(--color-text);
    background: var(--color-bgCardHover);
  }
`

const LangGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const FlagBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1.5px solid ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-border)")};
  background: ${({ $active }) => ($active ? "var(--color-bgCard)" : "transparent")};
  font-size: 1.05rem;
  line-height: 1;
  cursor: pointer;
  transition: all 0.18s;
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  padding: 0;

  &:hover {
    opacity: 1;
    border-color: var(--color-borderHover);
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
    background-color: var(--color-text);
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
  background: var(--color-bgGlass);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: var(--shadow-lg);
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
  color: var(--color-textSecondary);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: var(--color-bgCardHover);
    color: var(--color-text);
  }
`

const MobileCTAButton = styled.a`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: 0.85rem 1rem;
  background: var(--gradient-brand);
  color: var(--color-bg);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  text-align: center;
  font-size: 0.95rem;
`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === "/"
  const { isDark, toggleTheme } = useThemeToggle()
  const { lang, setLang } = useLang()
  const t = useT()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navHashes = t.footer.navHashes
  const navLabels = t.footer.navItems

  const href = (hash) => isHome ? `#${hash}` : `/#${hash}`
  const handleNavClick = () => setMobileMenuOpen(false)

  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <NavContainer $scrolled={scrolled}>
        <Logo href={isHome ? "#hero" : "/"} aria-label="Biztek Solutions">
          <img src={isDark ? logoDark : logoLight} alt="Logo" />
        </Logo>

        <NavLinks>
          {navHashes.map((hash, i) => (
            <li key={hash}>
              <NavLink href={href(hash)}>{navLabels[i]}</NavLink>
            </li>
          ))}
        </NavLinks>

        <CTAButton href={href("contacto")}>{t.nav.cta}</CTAButton>

        <LangGroup>
          <FlagBtn onClick={() => setLang("es")} $active={lang === "es"} aria-label="Español">🇦🇷</FlagBtn>
          <FlagBtn onClick={() => setLang("en")} $active={lang === "en"} aria-label="English">🇺🇸</FlagBtn>
        </LangGroup>

        <ThemeToggleBtn onClick={toggleTheme} aria-label={isDark ? t.nav.ariaLight : t.nav.ariaDark}>
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </ThemeToggleBtn>

        <HamburgerButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          $isOpen={mobileMenuOpen}
          aria-label={t.nav.mobileMenu}
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
              {navHashes.map((hash, i) => (
                <li key={hash}>
                  <MobileNavLink href={href(hash)} onClick={handleNavClick}>
                    {navLabels[i]}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavLinks>
            <MobileCTAButton href={href("contacto")} onClick={handleNavClick}>
              {t.nav.cta}
            </MobileCTAButton>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
              <ThemeToggleBtn
                onClick={toggleTheme}
                aria-label={isDark ? t.nav.ariaLight : t.nav.ariaDark}
                style={{ flex: 1, borderRadius: "12px", height: "44px", gap: "0.5rem" }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{isDark ? t.nav.lightMode : t.nav.darkMode}</span>
              </ThemeToggleBtn>
              <FlagBtn onClick={() => setLang("es")} $active={lang === "es"} aria-label="Español" style={{ width: 44, height: 44, borderRadius: 12, fontSize: "1.2rem" }}>🇦🇷</FlagBtn>
              <FlagBtn onClick={() => setLang("en")} $active={lang === "en"} aria-label="English" style={{ width: 44, height: 44, borderRadius: 12, fontSize: "1.2rem" }}>🇺🇸</FlagBtn>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  )
}
