export const theme = {
  colors: {
    bg: "#08080C",
    bgAlt: "#0E0E14",
    bgElevated: "#13131B",
    bgCard: "rgba(255, 255, 255, 0.03)",
    bgCardHover: "rgba(255, 255, 255, 0.05)",
    bgGlass: "rgba(15, 15, 22, 0.6)",

    text: "#FAFAFA",
    textSecondary: "#A1A1AA",
    textTertiary: "#71717A",
    textMuted: "#52525B",

    accent: "#06D7FF",
    accentAlt: "#1E40AF",
    accentWarm: "#FF7A1A",
    accentGlow: "rgba(6, 215, 255, 0.4)",
    accentAltGlow: "rgba(30, 64, 175, 0.4)",

    border: "rgba(255, 255, 255, 0.08)",
    borderHover: "rgba(255, 255, 255, 0.16)",
    borderAccent: "rgba(6, 215, 255, 0.3)",

    success: "#10B981",
    error: "#EF4444",

    primary: "#06D7FF",
    secondary: "#1E40AF",
  },
  gradients: {
    brand: "linear-gradient(135deg, #06D7FF 0%, #1E40AF 100%)",
    brandSoft: "linear-gradient(135deg, rgba(6, 215, 255, 0.15) 0%, rgba(30, 64, 175, 0.15) 100%)",
    radial: "radial-gradient(circle at 20% 0%, rgba(6, 215, 255, 0.15), transparent 50%), radial-gradient(circle at 80% 100%, rgba(30, 64, 175, 0.12), transparent 50%)",
    text: "linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%)",
    accent: "linear-gradient(90deg, #06D7FF, #1E40AF, #06D7FF)",
  },
  fonts: {
    display: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    displaySans: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'Roboto Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "5rem",
    xxxl: "8rem",
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "18px",
    xl: "24px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
    md: "0 8px 24px rgba(0, 0, 0, 0.5)",
    lg: "0 24px 48px rgba(0, 0, 0, 0.6)",
    glow: "0 0 60px rgba(6, 215, 255, 0.25)",
    glowAlt: "0 0 60px rgba(30, 64, 175, 0.25)",
  },
  transitions: {
    fast: "0.18s cubic-bezier(0.4, 0, 0.2, 1)",
    normal: "0.32s cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
  motion: {
    fadeUp: {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    fadeUpDelayed: (delay = 0) => ({
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
  },
}
