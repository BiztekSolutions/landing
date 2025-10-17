"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import { AnimatedUnderline } from "./AnimatedUnderline";

const ContactSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bgContact};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 400;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  line-height: 1.15;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.bgCard};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: -1;
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InfoValue = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  font-weight: 400;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  min-height: 48px;
  padding: 0.875rem 1rem;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.borderFocus};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgCard};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover:not(:focus) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : "#00C2FF"};
    box-shadow: 0 0 0 2px
      ${({ theme, $hasError }) =>
        $hasError ? "rgba(220, 38, 38, 0.2)" : "#0070F3"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 300;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  min-height: 120px;
  padding: 0.875rem 1rem;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.borderFocus};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bgCard};
  resize: vertical;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover:not(:focus) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : theme.colors.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error : "#00C2FF"};
    box-shadow: 0 0 0 2px
      ${({ theme, $hasError }) =>
        $hasError ? "rgba(220, 38, 38, 0.2)" : "#0070F3"};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 300;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  min-height: 48px;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #0b1220;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover:not(:disabled) {
    background: linear-gradient(180deg, #00c2ff 0%, #0070f3 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 194, 255, 0.25);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.errorText};
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <ContactSection id="contacto" className="section">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedUnderline>Hablemos</AnimatedUnderline>
        </SectionTitle>
        <ContactContainer>
          <Form onSubmit={handleSubmit} noValidate>
            {isSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                role="status"
                aria-live="polite"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </SuccessMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Nombre *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                $hasError={!!errors.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={isSubmitting}
              />
              {errors.name && (
                <ErrorMessage id="name-error" role="alert">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.name}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                $hasError={!!errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isSubmitting}
              />
              {errors.email && (
                <ErrorMessage id="email-error" role="alert">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.email}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 9 11 1234-5678"
                disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensaje *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Contanos sobre tu proyecto..."
                $hasError={!!errors.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                disabled={isSubmitting}
              />
              {errors.message && (
                <ErrorMessage id="message-error" role="alert">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </SubmitButton>
          </Form>

          <ContactInfo>
            <InfoItem>
              <InfoIcon aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    style={{ color: "inherit" }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </InfoValue>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon aria-hidden="true">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>WhatsApp</InfoLabel>
                <InfoValue>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </InfoValue>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
        </ContactContainer>
      </div>
    </ContactSection>
  );
}
