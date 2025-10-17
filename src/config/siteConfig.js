export const siteConfig = {
  company: {
    name: "Biztek Solutions",
    slogan: "Expertos en soluciones IT",
    description:
      "Desarrollo de software, integración de sistemas, automatización y optimización para empresas que buscan innovar.",
  },
  contact: {
    email: "solutionsbiztek@gmail.com",
    phone: "+54 9 11 1234 5678",
    whatsapp: "+5492345659559",
  },
  social: {
    linkedin: "https://linkedin.com/company/biztek-solutions",
    instagram: "https://instagram.com/bizteksolutions",
  },
  ui: {
    animations: {
      enabled: true,
      style: "underline", // 'grid' | 'underline' | 'orbs'
    },
  },
  services: [
    {
      id: 1,
      title: "Desarrollo Web & Mobile",
      description:
        "Aplicaciones web y móviles escalables con las últimas tecnologías y mejores prácticas.",
      icon: "code",
    },
    {
      id: 2,
      title: "Integración de Sistemas",
      description:
        "Conectamos tus plataformas y herramientas para optimizar flujos de trabajo.",
      icon: "integration",
    },
    {
      id: 3,
      title: "Automatización de Procesos",
      description:
        "Reducí tiempos y errores automatizando tareas repetitivas y procesos críticos.",
      icon: "automation",
    },
    {
      id: 4,
      title: "SEO & Performance",
      description:
        "Optimización técnica para mejorar velocidad, posicionamiento y experiencia de usuario.",
      icon: "speed",
    },
    {
      id: 5,
      title: "DevOps & Cloud",
      description:
        "Infraestructura escalable, CI/CD y despliegues automatizados en la nube.",
      icon: "cloud",
    },
    {
      id: 6,
      title: "Trazabilidad & IoT",
      description:
        "Soluciones de seguimiento en tiempo real y conectividad de dispositivos.",
      icon: "iot",
    },
    {
      id: 7,
      title: "Mantenimiento Evolutivo",
      description:
        "Soporte continuo y mejoras incrementales para mantener tu software actualizado.",
      icon: "maintenance",
    },
    {
      id: 8,
      title: "Consultoría IT",
      description:
        "Asesoramiento estratégico para transformación digital y arquitectura de soluciones.",
      icon: "consulting",
    },
  ],
  technologies: [
    { name: "React", logo: "react" },
    { name: "Node.js", logo: "nodejs" },
    { name: "JavaScript", logo: "javascript" },
    { name: "HTML5", logo: "html5" },
    { name: "CSS3", logo: "css3" },
    { name: "Python", logo: "python" },
    { name: "Java", logo: "java" },
    { name: "Vercel", logo: "vercel" },
    { name: "Astro", logo: "astro" },
    { name: "TypeScript", logo: "typescript" },
    { name: "Docker", logo: "docker" },
    { name: "AWS", logo: "aws" },
  ],
  process: [
    {
      step: 1,
      title: "Elicitación",
      description:
        "Entendemos tus necesidades, objetivos y contexto de negocio.",
    },
    {
      step: 2,
      title: "Análisis & Diseño",
      description: "Definimos arquitectura, flujos y experiencia de usuario.",
    },
    {
      step: 3,
      title: "Implementación",
      description:
        "Desarrollo ágil con entregas incrementales y feedback continuo.",
    },
    {
      step: 4,
      title: "Testeo",
      description:
        "Pruebas exhaustivas de funcionalidad, performance y seguridad.",
    },
    {
      step: 5,
      title: "Despliegue",
      description:
        "Puesta en producción con estrategias de deployment seguras.",
    },
    {
      step: 6,
      title: "Seguimiento",
      description: "Monitoreo, soporte y mejoras continuas post-lanzamiento.",
    },
  ],
  clients: [
    {
      id: 1,
      name: "TechCorp",
      description: "Plataforma de gestión empresarial",
      logo: "https://picsum.photos/seed/client1/200/100",
    },
    {
      id: 2,
      name: "InnovateLab",
      description: "Sistema de trazabilidad IoT",
      logo: "https://picsum.photos/seed/client2/200/100",
    },
    {
      id: 3,
      name: "CloudFirst",
      description: "Migración a arquitectura cloud",
      logo: "https://picsum.photos/seed/client3/200/100",
    },
    {
      id: 4,
      name: "DataFlow",
      description: "Integración de sistemas legacy",
      logo: "https://picsum.photos/seed/client4/200/100",
    },
  ],
  projects: [
    {
      id: 1,
      category: "CASE STUDIES / DEVELOPMENT",
      title: "Capikua - Events",
      description:
        "Capikua launched a high-performance marketplace for ticket resales and experiences, with custom features that support secure payments and real-time event listings.",
      link: "#",
      mockup: "/images/project-mockup-example.png",
      technologies: ["react", "nodejs", "docker", "aws"],
    },
    {
      id: 2,
      category: "CASE STUDIES / E-COMMERCE",
      title: "TechStore - Marketplace",
      description:
        "Plataforma de e-commerce escalable con integración de pagos, gestión de inventario en tiempo real y sistema de recomendaciones personalizado.",
      link: "#",
      mockup: "https://picsum.photos/seed/project2/1200/800",
      technologies: ["react", "nodejs", "stripe", "vercel"],
    },
    {
      id: 3,
      category: "CASE STUDIES / IOT",
      title: "LogisTrack - Trazabilidad",
      description:
        "Sistema de trazabilidad IoT para logística con seguimiento en tiempo real, alertas automáticas y dashboard de analytics avanzado.",
      link: "#",
      mockup: "https://picsum.photos/seed/project3/1200/800",
      technologies: ["react", "python", "docker", "aws"],
    },
  ],
};
