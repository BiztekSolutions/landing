import { createContext, useContext, useState } from "react"
import { translations } from "../i18n/index"

const LangContext = createContext({ lang: "es", setLang: () => {} })

export function useLang() {
  return useContext(LangContext)
}

export function useT() {
  const { lang } = useContext(LangContext)
  return translations[lang]
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem("biztek-lang")
      if (saved === "es" || saved === "en") return saved
    } catch {}
    return "es"
  })

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem("biztek-lang", l) } catch {}
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}
