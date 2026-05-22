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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
    </ThemeProvider>
  )
}

export default App
