"use client"

import { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useT } from "../context/LangContext"
import { siteConfig } from "../config/siteConfig"

const easeOut = [0.22, 1, 0.36, 1]

const Section = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  isolation: isolate;
  overflow-x: clip;

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
    radial-gradient(circle at 50% 0%, rgba(30, 64, 175, 0.07), transparent 55%),
    radial-gradient(circle at 50% 100%, rgba(6, 215, 255, 0.05), transparent 55%);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 920px;
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
`

const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--color-accentAltGlow);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: rgba(30, 64, 175, 0.08);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-accentAlt);
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
  color: var(--color-text);
  max-width: 720px;
`

const Sub = styled(motion.p)`
  font-size: clamp(1rem, 1.4vw, 1.1rem);
  color: var(--color-textSecondary);
  line-height: 1.6;
  max-width: 560px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`

const Item = styled(motion.div)`
  border-bottom: 1px solid var(--color-border);
`

const Row = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: 1.4rem 0.25rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${({ $open, theme }) => ($open ? "var(--color-text)" : "var(--color-textSecondary)")};
  transition: color ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: var(--color-text);
  }

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--color-borderAccent);
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1.2rem 0.25rem;
  }
`

const Question = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: inherit;
`

const IconWrap = styled(motion.span)`
  position: relative;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accentAlt);
`

const IconBar = styled.span`
  position: absolute;
  inset: 50% 0 auto 0;
  height: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transform: translateY(-50%);
`

const IconBarVertical = styled(motion.span)`
  position: absolute;
  inset: 0 50% 0 auto;
  width: 1.5px;
  background: currentColor;
  border-radius: 2px;
  transform-origin: center;
  transform: translateX(50%);
`

const Panel = styled(motion.div)`
  overflow: hidden;
`

const AnswerInner = styled.div`
  padding: 0 0 1.4rem 0;
  max-width: 700px;
`

const Answer = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-textSecondary);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.95rem;
  }
`

export function FAQ() {
  const t = useT()
  const items = t.faq.items
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i))
  }

  return (
    <Section id="faq">
      <SectionBg />
      <Container>
        <Header>
          <Eyebrow
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {t.faq.eyebrow}
          </Eyebrow>
          <Title
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            {t.faq.title}
          </Title>
          <Sub
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
          >
            {t.faq.sub}
          </Sub>
        </Header>

        <List>
          {items.map((item, i) => {
            const isOpen = i === openIndex
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <Item
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.08 }}
              >
                <Row
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  $open={isOpen}
                >
                  <Question>{item.q}</Question>
                  <IconWrap
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  >
                    <IconBar />
                    <IconBarVertical
                      animate={{ scaleY: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    />
                  </IconWrap>
                </Row>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <Panel
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                    >
                      <AnswerInner>
                        <Answer>{item.a}</Answer>
                      </AnswerInner>
                    </Panel>
                  )}
                </AnimatePresence>
              </Item>
            )
          })}
        </List>
      </Container>
    </Section>
  )
}
