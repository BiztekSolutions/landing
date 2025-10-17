"use client"

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../src/styles/GlobalStyles"
import { theme } from "../src/styles/theme"
import { Navbar } from "../src/components/Navbar"
import { Hero } from "../src/components/Hero"
import { Services } from "../src/components/Services"
import { Technologies } from "../src/components/Technologies"
import { Process } from "../src/components/Process"
import { Clients } from "../src/components/Clients"
import { CTA } from "../src/components/CTA"
import { ContactForm } from "../src/components/ContactForm"
import { Footer } from "../src/components/Footer"

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Process />
        <Clients />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
