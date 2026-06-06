"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { HiEnvelope, HiChatBubbleLeftRight, HiCheckCircle } from "react-icons/hi2"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { siteConfig } from "../config/siteConfig"
import { useT } from "../context/LangContext"

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
  background: radial-gradient(ellipse at 80% 20%, rgba(30, 64, 175, 0.08), transparent 55%);
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
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: var(--color-bgCard);
  backdrop-filter: blur(12px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-accent);
  width: fit-content;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  color: var(--color-text);
  line-height: 1.1;

  span {
    background: var(--gradient-brand);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1120px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`

const InfoCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const InfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.6rem, 2.6vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-text);
  line-height: 1.15;
`

const InfoText = styled.p`
  color: var(--color-textSecondary);
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 480px;
`

const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const ContactItem = styled.li`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--color-text);
    font-size: 1rem;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: var(--color-accent);
    }

    svg {
      color: var(--color-accent);
      flex-shrink: 0;
    }
  }
`

const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-bgCard);
  color: var(--color-textSecondary);
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: var(--color-borderAccent);
    color: var(--color-accent);
    box-shadow: 0 0 18px var(--color-accentGlow);
    transform: translateY(-2px);
  }
`

const FormCard = styled(motion.div)`
  border: 1px solid var(--color-border);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: var(--color-bgCard);
  padding: ${({ theme }) => theme.spacing.lg};
  backdrop-filter: blur(8px);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const FieldLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-textTertiary);
`

const baseInputStyles = ({ theme }) => `
  background: var(--color-bgElevated);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: 0.85rem 1rem;
  border-radius: ${theme.borderRadius.md};
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  width: 100%;
  transition: border-color ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};

  &::placeholder {
    color: var(--color-textTertiary);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px var(--color-accentGlow);
  }
`

const Input = styled.input`
  ${(p) => baseInputStyles(p)}
`

const Textarea = styled.textarea`
  ${(p) => baseInputStyles(p)}
  min-height: 120px;
  resize: vertical;
  font-family: ${({ theme }) => theme.fonts.body};
`

const SubmitBtn = styled.button`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: 0.95rem 1.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 500;
  font-size: 0.98rem;
  color: var(--color-bg);
  background: var(--color-accent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  transition: all ${({ theme }) => theme.transitions.normal};
  overflow: hidden;
  isolation: isolate;
  width: 100%;
  cursor: pointer;
  border: none;

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
    transform: translateX(4px);
  }
`

const SuccessCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid var(--color-success);
  background: rgba(16, 185, 129, 0.08);
  color: var(--color-text);

  svg {
    color: var(--color-success);
    flex-shrink: 0;
  }

  strong {
    color: var(--color-success);
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 600;
    margin-right: 0.35rem;
  }
`

export function ContactForm() {
  const t = useT()
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })

  useEffect(() => {
    if (!sent) return
    const id = setTimeout(() => setSent(false), 5000)
    return () => clearTimeout(id)
  }, [sent])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}`

  return (
    <Section id="contacto">
      <BgAccent />
      <Container>
        <SectionHead {...fadeUp}>
          <EyebrowChip>{t.contact.eyebrow}</EyebrowChip>
          <SectionTitle>
            {t.contact.title} <span>{t.contact.titleEm}</span> {t.contact.titleSub}
          </SectionTitle>
        </SectionHead>

        <Grid>
          <InfoCol
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <InfoTitle>{t.contact.infoTitle}</InfoTitle>
            <InfoText>{t.contact.infoText}</InfoText>

            <ContactList>
              <ContactItem>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  <HiEnvelope size={20} />
                  {siteConfig.contact.email}
                </a>
              </ContactItem>
              <ContactItem>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <HiChatBubbleLeftRight size={20} />
                  {siteConfig.contact.whatsapp}
                </a>
              </ContactItem>
            </ContactList>

            <SocialRow>
              <SocialLink
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </SocialLink>
              <SocialLink
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </SocialLink>
            </SocialRow>
          </InfoCol>

          <FormCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <SuccessCard
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <HiCheckCircle size={28} />
                  <div>
                    <strong>{t.contact.success.title}</strong>
                    {t.contact.success.sub}
                  </div>
                </SuccessCard>
              ) : (
                <Form key="form" onSubmit={handleSubmit}>
                  <Field>
                    <FieldLabel>{t.contact.labels.name}</FieldLabel>
                    <Input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.name}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>{t.contact.labels.email}</FieldLabel>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.email}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>{t.contact.labels.company}</FieldLabel>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.company}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>{t.contact.labels.message}</FieldLabel>
                    <Textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.placeholders.message}
                    />
                  </Field>
                  <SubmitBtn type="submit">
                    {t.contact.submit}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </SubmitBtn>
                </Form>
              )}
            </AnimatePresence>
          </FormCard>
        </Grid>
      </Container>
    </Section>
  )
}
