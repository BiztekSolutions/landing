import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { theme } from "./styles/theme"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Clients } from "./components/Clients"
import { Services } from "./components/Services"
import { Process } from "./components/Process"
import { Projects } from "./components/Projects"
import { Stats } from "./components/Stats"
import { FAQ } from "./components/FAQ"
import { CTA } from "./components/CTA"
import { ContactForm } from "./components/ContactForm"
import { Footer } from "./components/Footer"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"
import { Terms } from "./pages/Terms"

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Process />
        <Projects />
        <Stats />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
