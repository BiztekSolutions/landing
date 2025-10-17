# Biztek Solutions - Landing Page

Landing page moderna y responsive para Biztek Solutions, empresa de soluciones IT.

## 🚀 Inicio Rápido

\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
/src
  /components      # Componentes React reutilizables
  /sections        # Secciones de la landing page
  /styles          # Estilos globales y tema
  /config          # Configuración del sitio
  /assets          # Imágenes y recursos
  main.jsx         # Punto de entrada
  App.jsx          # Componente principal
/public            # Archivos estáticos
\`\`\`

## ⚙️ Configuración

### Editar Contenido

Todos los datos del sitio se encuentran en `src/config/siteConfig.js`:

- Información de la empresa
- Datos de contacto (email, WhatsApp, dirección)
- Servicios
- Tecnologías
- Proceso de trabajo
- Clientes

### Configurar Animaciones

Las animaciones se controlan desde `src/config/siteConfig.js`:

\`\`\`js
ui: {
  animations: {
    enabled: true,              // true/false para activar/desactivar
    style: 'underline'          // 'grid' | 'underline' | 'orbs'
  }
}
\`\`\`

**Opciones de animación:**

- **`underline`** (recomendado): Línea animada cyan→azul en headings y links del navbar. Costo de rendimiento: cero.
- **`grid`**: Retícula de puntos sutil con parallax en el hero. Costo: bajo.
- **`orbs`**: Orbes difusos con movimiento orbital lento. Costo: medio.

**Desactivar animaciones:**
\`\`\`js
ui: {
  animations: {
    enabled: false
  }
}
\`\`\`

**Nota:** Las animaciones respetan automáticamente `prefers-reduced-motion` del sistema operativo del usuario.

### Cambiar Colores

Los colores se definen en `src/styles/theme.js`:

\`\`\`js
colors: {
  primary: '#00C2FF',        // Color principal (cyan)
  secondary: '#0070F3',      // Color secundario (azul)
  bg: '#FFFFFF',             // Fondo principal
  bgContact: '#F8FAFC',      // Fondo sección contacto
  text: '#0F172A',           // Texto principal
  textSecondary: '#334155',  // Texto secundario
  // ... más colores
}
\`\`\`

**Colores de la sección Contacto (AA+ accesible):**

\`\`\`js
bgContact: '#F8FAFC',      // Fondo de la sección
bgCard: '#FFFFFF',         // Fondo del formulario
border: '#E5E7EB',         // Bordes
borderHover: '#94A3B8',    // Bordes en hover
text: '#0F172A',           // Labels y títulos
textSecondary: '#334155',  // Texto secundario
placeholder: '#6B7280',    // Placeholders
error: '#DC2626',          // Bordes de error
errorText: '#B91C1C',      // Texto de error
success: '#059669',        // Bordes de éxito
\`\`\`

Todos los colores cumplen con contraste AA/AAA de WCAG 2.1.

### Cambiar Tipografías

Las fuentes se configuran en:
1. `index.html` - Importación de Google Fonts
2. `src/styles/theme.js` - Definición de la familia tipográfica

Fuente actual: **Space Grotesk** (pesos 300-600)

## 📧 Integrar Formulario de Contacto

El formulario actualmente envía datos a `/api/contact`. Para integrarlo:

1. Crear un endpoint en tu backend
2. Actualizar la URL en `src/components/Contact.jsx`:

\`\`\`js
const response = await fetch('TU_ENDPOINT_AQUI', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
\`\`\`

## ♿ Accesibilidad (AA+)

El sitio cumple con WCAG 2.1 nivel AA y AAA en áreas críticas:

**Formulario de Contacto:**
- Inputs con altura mínima de 48px (área clicable 44px+)
- Focus ring doble: 2px #0070F3 + 1px interno #00C2FF
- Contraste de texto AA+ (#0F172A sobre #F8FAFC = 15.8:1)
- Estados de error con iconos y `aria-live="polite"`
- Labels asociados correctamente con `htmlFor`
- Validación accesible con `aria-invalid` y `aria-describedby`

**Navegación:**
- Navegación por teclado completa
- ARIA labels en botones y controles
- Semántica HTML correcta
- Respeto a `prefers-reduced-motion`

**Contraste de colores:**
- Texto principal: 15.8:1 (AAA)
- Texto secundario: 8.2:1 (AA)
- Botones: 4.8:1 (AA)

## 🌐 Deploy en Vercel

1. Conectar repositorio en Vercel
2. Configurar build:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automático en cada push

## 📱 Responsive

El sitio es completamente responsive con breakpoints:
- Mobile: 360px+
- Tablet: 768px+
- Desktop: 1024px+
- Wide: 1280px+

## 🎨 Tecnologías

- React 18
- Vite
- styled-components
- framer-motion

## 🧪 Testing Visual

Para verificar la accesibilidad del formulario:

1. **Contraste**: Usar herramientas como WebAIM Contrast Checker
2. **Teclado**: Navegar con Tab/Shift+Tab, verificar focus visible
3. **Screen readers**: Probar con NVDA (Windows) o VoiceOver (Mac)
4. **Reduced motion**: Activar en sistema operativo y verificar que animaciones se desactivan

## 📄 Licencia

© 2025 Biztek Solutions. Todos los derechos reservados.
# landing
