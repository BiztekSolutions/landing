"use client"

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { siteConfig } from "../config/siteConfig"

const UnderlineWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const AnimatedLine = styled(motion.div)`
  position: absolute;
  bottom: -8px;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00C2FF 0%, #0070F3 100%);
  border-radius: 2px;
`

export function AnimatedUnderline({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()
  const [hasAnimated, setHasAnimated] = useState(false)

  // Check if animations are enabled in config
  const animationsEnabled = siteConfig.ui?.animations?.enabled !== false
  const animationStyle = siteConfig.ui?.animations?.style || "underline"

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  // Don't render animation if disabled or wrong style
  if (!animationsEnabled || animationStyle !== "underline") {
    return <UnderlineWrapper ref={ref}>{children}</UnderlineWrapper>
  }

  // Respect user's motion preferences
  const shouldAnimate = !shouldReduceMotion && hasAnimated

  return (
    <UnderlineWrapper ref={ref}>
      {children}
      <AnimatedLine
        initial={{ width: 0 }}
        animate={shouldAnimate ? { width: "100%" } : { width: 0 }}
        transition={{
          duration: 0.32,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />
    </UnderlineWrapper>
  )
}
