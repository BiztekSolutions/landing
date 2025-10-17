"use client"

import styled from "styled-components"
import { motion, useReducedMotion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"
import { useMemo } from "react"

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  position: relative;
  overflow: hidden;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AnimatedSquaresBackground = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`

const Square = styled(motion.div)`
  position: absolute;
  border: 1px solid ${({ $color }) => $color};
  border-radius: 8px;
  opacity: 0.4;
`

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  text-align: center;
  position: relative;
  z-index: 1;
`

const CTATitle = styled(motion.h2)`
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.text};
`

const CTADescription = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  font-weight: 300;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.01em;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 194, 255, 0.10);

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 194, 255, 0.25);
  }
`

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.01em;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 194, 255, 0.10);
  }
`

export function CTA() {
  const shouldReduceMotion = useReducedMotion()
  const whatsappLink = `https://api.whatsapp.com/send?phone=${siteConfig.contact.whatsapp}&text=Hola! Quiero desplegar mi proyecto con Biztek Solutions.`

  const squares = useMemo(() => {
    const colors = ["#00C2FF", "#0070F3"]
    const sizes = [40, 60, 80, 100, 120, 150]

    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <CTASection className="section">
      {!shouldReduceMotion && (
        <AnimatedSquaresBackground>
          {squares.map((square) => (
            <Square
              key={square.id}
              $color={square.color}
              style={{
                width: square.size,
                height: square.size,
                left: `${square.x}%`,
                top: `${square.y}%`,
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -30, 20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: square.duration,
                delay: square.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </AnimatedSquaresBackground>
      )}

      <CTAContainer>
        <CTATitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Listos para tu próximo lanzamiento
        </CTATitle>
        <CTADescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transformamos ideas en soluciones digitales escalables. Hablemos de tu próximo proyecto.
        </CTADescription>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contactar equipo
          </PrimaryButton>
          <SecondaryButton href="#contacto">Ver más proyectos</SecondaryButton>
        </ButtonGroup>
      </CTAContainer>
    </CTASection>
  )
}
