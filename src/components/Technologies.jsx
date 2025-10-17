"use client";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
  SiAstro,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTypescript,
  SiPython,
} from "react-icons/si";

const technologies = [
  { Icon: SiReact, name: "React", color: "#10b981" },
  { Icon: SiSvelte, name: "Svelte", color: "#f97316" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#3b82f6", size: "3.5rem" },
  { Icon: SiVercel, name: "Vercel", color: "#000000" },
  { Icon: SiAstro, name: "Astro", color: "#000000" },
  { Icon: SiJavascript, name: "Javascript", color: "#eab308" },
  { Icon: SiHtml5, name: "HTML5", color: "#f97316" },
  { Icon: SiCss3, name: "CSS3", color: "#3b82f6" },
  { Icon: SiNodedotjs, name: "NodeJS", color: "#10b981" },
  { Icon: SiTypescript, name: "Typescript", color: "#3b82f6" },
  { Icon: FaJava, name: "Java", color: "#60a5fa" },
  { Icon: SiPython, name: "Python", color: "#3b82f6" },
];
const TechSection = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding-top: 3.5rem;
  padding-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 400;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

const TechSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: visible;
  padding: 2rem 0 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 4%,
    rgba(0, 0, 0, 0.65) 20%,
    rgba(0, 0, 0, 0.65) 80%,
    rgba(0, 0, 0, 0.2) 96%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 4%,
    rgba(0, 0, 0, 0.65) 20%,
    rgba(0, 0, 0, 0.65) 80%,
    rgba(0, 0, 0, 0.2) 96%,
    transparent 100%
  );
  overscroll-behavior-x: contain;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
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
    mask-image: none;
    -webkit-mask-image: none;

    &::before,
    &::after {
      display: none;
    }
  }
`;

const TechGrid = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-end;
  min-width: max-content;
  padding: 0 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  transition: gap 0.2s;
  scroll-snap-type: x mandatory;
  overflow: visible;
  @media (max-width: 900px) {
    gap: 2rem;
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  scroll-snap-align: center;
`;

const IconWrapper = styled.div`
  height: 3.5rem;
  color: ${(props) => props.color};
  @media (min-width: 768px) {
    height: ${(props) => props.size || "4.5rem"};
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Label = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export function Technologies() {
  const sliderRef = useRef(null);
  const scrollVelocityRef = useRef(0);
  const animationRef = useRef(null);

  const stopAutoScroll = () => {
    scrollVelocityRef.current = 0;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const step = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (Math.abs(scrollVelocityRef.current) < 0.1) {
      animationRef.current = null;
      return;
    }

    slider.scrollLeft += scrollVelocityRef.current;
    animationRef.current = requestAnimationFrame(step);
  };

  const startAutoScroll = () => {
    if (!animationRef.current) {
      animationRef.current = requestAnimationFrame(step);
    }
  };

  // Desplazamiento suave al mover el mouse cerca de los extremos
  const handleMouseMove = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const { left, right } = slider.getBoundingClientRect();
    const mouseX = e.clientX;
    const edge = Math.min(140, slider.clientWidth / 3);
    const distanceLeft = mouseX - left;
    const distanceRight = right - mouseX;

    let velocity = 0;
    if (distanceLeft < edge) {
      const intensity = Math.max(0, 1 - distanceLeft / edge);
      velocity = -Math.pow(intensity, 1.5) * 12;
    } else if (distanceRight < edge) {
      const intensity = Math.max(0, 1 - distanceRight / edge);
      velocity = Math.pow(intensity, 1.5) * 12;
    }

    scrollVelocityRef.current = velocity;

    if (velocity !== 0) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <TechSection id="tecnologias" className="section">
      <SectionTitle>Las tecnologías que activamos en cada etapa</SectionTitle>
      <TechSlider
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={stopAutoScroll}
      >
        <TechGrid>
          {technologies.map(({ Icon, name, color, size }) => (
            <TechItem key={name}>
              <IconWrapper color={color} size={size}>
                <Icon />
              </IconWrapper>
              <Label>{name}</Label>
            </TechItem>
          ))}
        </TechGrid>
      </TechSlider>
    </TechSection>
  );
}
