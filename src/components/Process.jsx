"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const ProcessSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bgAlt};
  padding: 6rem 0 5rem;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 500;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.04em;
  line-height: 1.1;
`

const SectionIntro = styled(motion.p)`
  max-width: 720px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: 300;
`

const Timeline = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  scrollbar-width: none;
  -ms-overflow-style: none;
  overscroll-behavior-x: contain;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before,
  &::after {  
    content: "";
    position: absolute;
    top: 0;
    bottom: ${({ theme }) => theme.spacing.lg};
    width: 60px;
    pointer-events: none;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    mask-image: none;
    -webkit-mask-image: none;

    &::before,
    &::after {
      display: none;
    }
  }
`

const TimelineItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  min-width: 260px;
  max-width: 320px;
  flex: 0 0 auto;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.05);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
    transform: translateY(-4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 100%;
    max-width: none;
  }
`

const StepNumber = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`

const StepTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
  font-weight: 300;
`

export function Process() {
  const timelineRef = useRef(null)
  const scrollVelocityRef = useRef(0)
  const animationRef = useRef(null)

  const stopAutoScroll = () => {
    scrollVelocityRef.current = 0
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  const step = () => {
    const timeline = timelineRef.current
    if (!timeline) return

    if (Math.abs(scrollVelocityRef.current) < 0.15) {
      animationRef.current = null
      return
    }

    timeline.scrollLeft += scrollVelocityRef.current
    animationRef.current = requestAnimationFrame(step)
  }

  const startAutoScroll = () => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(step)
    }
  }

  const handleMouseMove = (event) => {
    const timeline = timelineRef.current
    if (!timeline) return

    const { left, right } = timeline.getBoundingClientRect()
    const mouseX = event.clientX
    const edge = Math.min(160, timeline.clientWidth / 2.5)
    const distanceLeft = mouseX - left
    const distanceRight = right - mouseX

    let velocity = 0
    if (distanceLeft < edge) {
      const intensity = Math.max(0, 1 - distanceLeft / edge)
      velocity = -Math.pow(intensity, 1.4) * 14
    } else if (distanceRight < edge) {
      const intensity = Math.max(0, 1 - distanceRight / edge)
      velocity = Math.pow(intensity, 1.4) * 14
    }

    scrollVelocityRef.current = velocity

    if (velocity !== 0) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <ProcessSection id="proceso" className="section">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cómo acompañamos tu proyecto
        </SectionTitle>
        <SectionIntro
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Desglosamos cada etapa para asegurar foco en resultados medibles y comunicación constante durante todo el viaje.
        </SectionIntro>
        <Timeline
          ref={timelineRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={stopAutoScroll}
        >
          {siteConfig.process.map((step, index) => (
            <TimelineItem
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StepNumber>{step.step}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </ProcessSection>
  )
}
