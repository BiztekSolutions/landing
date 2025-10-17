"use client"

import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { siteConfig } from "../config/siteConfig"
import { AnimatedUnderline } from "./AnimatedUnderline"

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.03em;
  line-height: 1.15;
`

const ProjectCard = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 18px 18px 16px 16px;
  padding: 48px 40px 40px 40px;
  box-shadow: 0 2px 16px rgba(0, 194, 255, 0.10), 0 1.5px 0 0 ${({ theme }) => theme.colors.accent};
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  margin-bottom: 2rem;
  overflow: visible;
  transition: box-shadow ${({ theme }) => theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 32px;
    width: 120px;
    height: 32px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent} 60%, ${({ theme }) => theme.colors.accentHover});
    border-radius: 12px 12px 0 0;
    box-shadow: 0 2px 8px rgba(0, 194, 255, 0.10);
    z-index: 2;
    opacity: 0.85;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 194, 255, 0.18);
    border-color: ${({ theme }) => theme.colors.accentHover};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 32px 16px 24px 16px;
    gap: ${({ theme }) => theme.spacing.lg};
    &::before {
      left: 16px;
      width: 80px;
      height: 24px;
    }
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const ProjectCategory = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.2;
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-weight: 300;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  width: fit-content;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  svg {
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover svg {
    transform: translateX(4px);
  }
`

const TechStack = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const TechIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.bgSecondary};
  text-transform: uppercase;
  font-weight: 600;
`

const ProjectMockup = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #E0F7FF 0%, #F8FAFC 100%);
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
`

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const NavDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $active }) => ($active ? theme.colors.accent : "transparent")};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  padding: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.2);
  }
`

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = siteConfig.projects || []

  if (projects.length === 0) return null

  const currentProject = projects[currentIndex]

  return (
    <ProjectsSection id="proyectos">
      <Container>
        <SectionHeader>
          <SectionTitle>
            Proyectos
            {siteConfig.ui.animations.enabled && siteConfig.ui.animations.style === "underline" && (
              <AnimatedUnderline />
            )}
          </SectionTitle>
        </SectionHeader>

        <AnimatePresence mode="wait">
          <ProjectCard
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectContent>
              <ProjectCategory>{currentProject.category}</ProjectCategory>
              <ProjectTitle>{currentProject.title}</ProjectTitle>
              <ProjectDescription>{currentProject.description}</ProjectDescription>
              <ProjectLink href={currentProject.link}>
                Discover the project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </ProjectLink>
              <TechStack>
                {currentProject.technologies.map((tech, idx) => (
                  <TechIcon key={idx} title={tech}>
                    {tech.slice(0, 2)}
                  </TechIcon>
                ))}
              </TechStack>
            </ProjectContent>

            <ProjectMockup>
              <img src={currentProject.mockup || "/placeholder.svg"} alt={currentProject.title} />
            </ProjectMockup>
          </ProjectCard>
        </AnimatePresence>

        <Navigation>
          {projects.map((_, index) => (
            <NavDot
              key={index}
              $active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </Navigation>
      </Container>
    </ProjectsSection>
  )
}
