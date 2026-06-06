import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  html[data-theme="light"] {
    --color-bg: #FAFAFA;
    --color-bgAlt: #F4F4F5;
    --color-bgElevated: #FFFFFF;
    --color-bgCard: rgba(0, 0, 0, 0.04);
    --color-bgCardHover: rgba(0, 0, 0, 0.07);
    --color-bgGlass: rgba(250, 250, 250, 0.85);
    --color-text: #09090B;
    --color-textSecondary: #3F3F46;
    --color-textTertiary: #71717A;
    --color-textMuted: #A1A1AA;
    --color-accent: #0891B2;
    --color-accentAlt: #1E40AF;
    --color-accentWarm: #EA580C;
    --color-accentGlow: rgba(8, 145, 178, 0.25);
    --color-accentAltGlow: rgba(30, 64, 175, 0.25);
    --color-border: rgba(0, 0, 0, 0.1);
    --color-borderHover: rgba(0, 0, 0, 0.2);
    --color-borderAccent: rgba(8, 145, 178, 0.3);
    --color-success: #059669;
    --color-error: #DC2626;
    --color-primary: #0891B2;
    --color-secondary: #1E40AF;
    --color-grid-line: rgba(0, 0, 0, 0.05);
    --gradient-brand: linear-gradient(135deg, #0891B2 0%, #1E40AF 100%);
    --gradient-brandSoft: linear-gradient(135deg, rgba(8, 145, 178, 0.12) 0%, rgba(30, 64, 175, 0.12) 100%);
    --gradient-radial: radial-gradient(circle at 20% 0%, rgba(8, 145, 178, 0.1), transparent 50%), radial-gradient(circle at 80% 100%, rgba(30, 64, 175, 0.08), transparent 50%);
    --gradient-text: linear-gradient(135deg, #09090B 0%, #3F3F46 100%);
    --gradient-accent: linear-gradient(90deg, #0891B2, #1E40AF, #0891B2);
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.06);
    --shadow-glow: 0 0 40px rgba(8, 145, 178, 0.2);
    --shadow-glowAlt: 0 0 40px rgba(30, 64, 175, 0.2);
    --noise-opacity: 0.35;
    --noise-blend: multiply;
    color-scheme: light;
  }

  html[data-theme="dark"], [data-theme="dark"] {
    --color-bg: #08080C;
    --color-bgAlt: #0E0E14;
    --color-bgElevated: #13131B;
    --color-bgCard: rgba(255, 255, 255, 0.03);
    --color-bgCardHover: rgba(255, 255, 255, 0.05);
    --color-bgGlass: rgba(15, 15, 22, 0.6);
    --color-text: #FAFAFA;
    --color-textSecondary: #A1A1AA;
    --color-textTertiary: #71717A;
    --color-textMuted: #52525B;
    --color-accent: #06D7FF;
    --color-accentAlt: #1E40AF;
    --color-accentWarm: #FF7A1A;
    --color-accentGlow: rgba(6, 215, 255, 0.4);
    --color-accentAltGlow: rgba(30, 64, 175, 0.4);
    --color-border: rgba(255, 255, 255, 0.08);
    --color-borderHover: rgba(255, 255, 255, 0.16);
    --color-borderAccent: rgba(6, 215, 255, 0.3);
    --color-success: #10B981;
    --color-error: #EF4444;
    --color-primary: #06D7FF;
    --color-secondary: #1E40AF;
    --color-grid-line: rgba(255, 255, 255, 0.04);
    --gradient-brand: linear-gradient(135deg, #06D7FF 0%, #1E40AF 100%);
    --gradient-brandSoft: linear-gradient(135deg, rgba(6, 215, 255, 0.15) 0%, rgba(30, 64, 175, 0.15) 100%);
    --gradient-radial: radial-gradient(circle at 20% 0%, rgba(6, 215, 255, 0.15), transparent 50%), radial-gradient(circle at 80% 100%, rgba(30, 64, 175, 0.12), transparent 50%);
    --gradient-text: linear-gradient(135deg, #FAFAFA 0%, #A1A1AA 100%);
    --gradient-accent: linear-gradient(90deg, #06D7FF, #1E40AF, #06D7FF);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.5);
    --shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.6);
    --shadow-glow: 0 0 60px rgba(6, 215, 255, 0.25);
    --shadow-glowAlt: 0 0 60px rgba(30, 64, 175, 0.25);
    --noise-opacity: 0.7;
    --noise-blend: overlay;
    color-scheme: dark;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: var(--color-bg);
    color: var(--color-text);
    font-weight: 400;
    line-height: 1.6;
    overflow-x: clip;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Ambient noise texture overlay for depth */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    pointer-events: none;
    z-index: 1;
    opacity: var(--noise-opacity);
    mix-blend-mode: var(--noise-blend);
  }

  /* Custom selection */
  ::selection {
    background: var(--color-accent);
    color: var(--color-bg);
  }

  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-borderHover);
  }

  /* Containers */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 ${({ theme }) => theme.spacing.md};
    }
  }

  .section {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.spacing.xxl} 0;
    }
  }

  /* Utility — gradient text */
  .gradient-text {
    background: var(--gradient-brand);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  /* Utility — eyebrow label */
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--color-accent);
  }
  .eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--color-accent);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  *:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
