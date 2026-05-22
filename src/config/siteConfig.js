export const siteConfig = {
  company: {
    name: "Biztek Solutions",
    tagline: "Software que mueve negocios",
    description:
      "Creamos software a medida para que dejes atrás las planillas, conectes tus sistemas y tu equipo recupere horas. De la idea al lanzamiento en semanas, no en meses.",
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
  heroRotator: [
    "distribuidoras",
    "e-commerce",
    "logística",
    "PyMEs",
    "tu negocio",
  ],
  services: [
    {
      id: "web-mobile",
      title: "Aplicaciones web y mobile",
      description:
        "Una plataforma a medida para tu negocio, que abre rápido y crece con vos. Pensada para que la usen tus clientes y tu equipo desde la compu o el celular.",
      icon: "code",
      size: "wide",
    },
    {
      id: "integraciones",
      title: "Conexión entre sistemas",
      description:
        "Hacemos que tus herramientas hablen entre sí: facturación, ventas, pagos, WhatsApp, mapas. Sin cargar lo mismo dos veces ni copiar datos a mano.",
      icon: "integration",
      size: "square",
    },
    {
      id: "automatizacion",
      title: "Automatización de tareas",
      description:
        "Sacamos del medio el trabajo manual y repetitivo: pedidos, facturas, avisos, reportes. Tu equipo dedica el tiempo a lo que de verdad importa.",
      icon: "automation",
      size: "square",
    },
    {
      id: "cloud-devops",
      title: "Infraestructura y puesta online",
      description:
        "Tu sistema online, seguro y disponible 24/7. Nos encargamos del hosting, los respaldos, el certificado de seguridad y el monitoreo para que vos no pienses en eso.",
      icon: "cloud",
      size: "tall",
    },
    {
      id: "data-iot",
      title: "Datos y trazabilidad",
      description:
        "Tableros en vivo para ver cómo va tu negocio, seguimiento de envíos en el mapa y reportes claros para tomar mejores decisiones.",
      icon: "iot",
      size: "wide",
    },
    {
      id: "consultoria",
      title: "Acompañamiento técnico",
      description:
        "¿Ya tenés un sistema y no sabés si está bien? Lo revisamos, te decimos qué conviene mejorar y sumamos experiencia a tu equipo.",
      icon: "consulting",
      size: "square",
    },
  ],
  process: [
    {
      step: "01",
      title: "Conocer tu negocio",
      description:
        "Antes de proponer nada, escuchamos. Entendemos cómo trabajás hoy, dónde se pierde tiempo y qué te haría la diferencia.",
    },
    {
      step: "02",
      title: "Diseñar la solución",
      description:
        "Te mostramos cómo va a verse y funcionar antes de empezar a construir. Si algo no convence, lo cambiamos ahí, sin costo.",
    },
    {
      step: "03",
      title: "Construir paso a paso",
      description:
        "Cada semana o dos te mostramos el avance y vos decidís el rumbo. Ves cosas reales funcionando, no diapositivas.",
    },
    {
      step: "04",
      title: "Probar y lanzar",
      description:
        "Revisamos que todo funcione bien y lo ponemos online sin interrumpir tu operación. Quedan los respaldos y el monitoreo activos desde el día uno.",
    },
    {
      step: "05",
      title: "Acompañarte después",
      description:
        "No desaparecemos al entregar. Seguimos cerca para resolver dudas, mejorar lo que haga falta y crecer con tu negocio.",
    },
  ],
  projects: [
    {
      id: "abastolink",
      slug: "abastolink",
      eyebrow: "Caso real · Plataforma entre empresas",
      title: "AbastoLink",
      subtitle: "Plataforma para conectar distribuidoras con sus compradores",
      problem:
        "Las distribuidoras manejaban todo entre mensajes de WhatsApp, planillas de Excel y llamados. No sabían qué stock tenían, dónde estaba cada pedido ni cuánto vendían. Cada jornada terminaba siendo un rompecabezas hecho a mano.",
      solution:
        "Armamos un solo lugar donde distribuidoras y compradores se encuentran: catálogo online, pedidos en vivo, mapa con el recorrido de cada entrega, números claros de venta y descuentos personalizados por cliente. Todo el día a día ordenado en una sola pantalla.",
      highlights: [
        { label: "Tiempo del pedido", value: "↓ 70%" },
        { label: "Errores en entregas", value: "↓ 85%" },
        { label: "Trazabilidad", value: "100%" },
      ],
      stack: ["React 19", "Redux Toolkit", "Node.js", "PostgreSQL", "Mapbox GL", "Recharts"],
      image: "/images/abastolink-dashboard.png",
      url: null,
    },
  ],
  faq: [
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Una primera versión funcionando en 4 a 8 semanas. Un producto completo entre 3 y 6 meses, según el alcance. Cada una o dos semanas te mostramos el avance para que veas resultados reales.",
    },
    {
      q: "¿Pueden trabajar sobre un sistema viejo que ya tengo?",
      a: "Sí. Podemos conectar tu sistema actual con uno nuevo y migrar de a poco, sin que dejes de operar. Cambiamos lo que conviene y conservamos lo que funciona.",
    },
    {
      q: "¿Pueden seguir atendiendo el sistema después del lanzamiento?",
      a: "Sí. Ofrecemos planes mensuales de soporte con tiempos de respuesta garantizados, monitoreo activo y horas para mejoras continuas.",
    },
    {
      q: "¿Trabajan con clientes fuera de Argentina?",
      a: "Sí. Facturamos en dólares al exterior y atendemos en español e inglés. Ya trabajamos con clientes de Latinoamérica y Europa.",
    },
  ],
}
