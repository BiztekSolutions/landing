"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import logo from "../images/logo.png"

const ClientsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`

const ClientCard = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`

const ClientLogo = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter ${({ theme }) => theme.transitions.normal};
  }

  ${ClientCard}:hover & img {
    filter: grayscale(0%);
  }
`

const ClientName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`

const ClientDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 300;
  line-height: 1.6;
`

export function Clients() {
  return (
    <ClientsSection id="clientes" className="section">
      <div className="container">
  {/* Se eliminó el título duplicado de Proyectos Destacados */}
        <ClientsGrid>
          {siteConfig.clients.map((client, index) => (
            <ClientCard
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ClientLogo>
                <img
                  src={client.logo === 'biztek' ? logo : client.logo || '/placeholder.svg'}
                  alt={`Logo de ${client.name}`}
                  loading="lazy"
                  style={{
                    objectFit: 'contain',
                    background: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                    padding: '8px',
                    maxWidth: '80%',
                    maxHeight: '80%',
                  }}
                />
              </ClientLogo>
              <ClientName>{client.name}</ClientName>
              <ClientDescription>{client.description}</ClientDescription>
            </ClientCard>
          ))}
        </ClientsGrid>
      </div>
    </ClientsSection>
  )
}
