import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
import { theme } from "./styles/theme"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Process } from "./components/Process"
import { Technologies } from "./components/Technologies"
import { Projects } from "./components/Projects"
import { Clients } from "./components/Clients"
import { CTA } from "./components/CTA"
import { ContactForm } from "./components/ContactForm"
import { Footer } from "./components/Footer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Technologies />
        <Projects />
        <Clients />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
