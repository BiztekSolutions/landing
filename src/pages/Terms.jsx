import styled from "styled-components"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { siteConfig } from "../config/siteConfig"

const Wrap = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  padding: 120px ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 100px ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xxl};
  }
`

const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.2;
`

const LastUpdated = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.displaySans};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const P = styled.p`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const UL = styled.ul`
  padding-left: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  li {
    font-size: 0.97rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.75;
    margin-bottom: 0.35rem;
  }
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export function Terms() {
  return (
    <Wrap>
      <Navbar />
      <Main>
        <Eyebrow>Legal</Eyebrow>
        <Title>Términos y Condiciones</Title>
        <LastUpdated>Última actualización: mayo de 2025</LastUpdated>

        <Section>
          <P>
            Al contratar los servicios de <strong>{siteConfig.company.name}</strong> o al usar
            este sitio web, aceptás los presentes Términos y Condiciones. Si no estás de acuerdo,
            por favor no uses el sitio ni nuestros servicios.
          </P>
        </Section>

        <Section>
          <H2>1. Sobre {siteConfig.company.name}</H2>
          <P>
            {siteConfig.company.name} es una empresa de desarrollo de software a medida con sede en
            la República Argentina. Ofrecemos servicios de diseño, desarrollo, integración de sistemas,
            automatización y acompañamiento técnico.
          </P>
        </Section>

        <Section>
          <H2>2. Alcance de los servicios</H2>
          <P>
            Los servicios prestados, plazos, entregables y condiciones económicas se definen en el
            contrato o propuesta comercial firmada entre las partes para cada proyecto.
          </P>
          <P>
            Este sitio web tiene carácter informativo. El uso del formulario de contacto no implica
            la contratación de ningún servicio ni genera obligaciones de ningún tipo entre las partes.
          </P>
        </Section>

        <Section>
          <H2>3. Propiedad intelectual</H2>
          <P>
            Todo el contenido de este sitio (textos, imágenes, diseño, código) es propiedad de
            {" "}{siteConfig.company.name} o de sus licenciantes y está protegido por las leyes
            de propiedad intelectual de Argentina.
          </P>
          <P>
            Respecto al software desarrollado a medida: salvo acuerdo expreso en contrario,
            una vez recibido el pago total del proyecto, el cliente adquiere los derechos de uso
            del producto entregado. {siteConfig.company.name} puede retener derechos sobre
            componentes genéricos o librerías de uso interno.
          </P>
        </Section>

        <Section>
          <H2>4. Pagos y facturación</H2>
          <P>
            Las condiciones de pago se establecen en cada propuesta comercial. Por lo general:
          </P>
          <UL>
            <li>Se requiere un anticipo para iniciar el desarrollo.</li>
            <li>Los pagos parciales se realizan según hitos acordados.</li>
            <li>La mora en los pagos puede implicar la suspensión del servicio.</li>
          </UL>
          <P>
            Los precios se expresan en la moneda indicada en cada propuesta (pesos argentinos o
            dólares estadounidenses según corresponda).
          </P>
        </Section>

        <Section>
          <H2>5. Limitación de responsabilidad</H2>
          <P>
            {siteConfig.company.name} no será responsable por daños indirectos, lucro cesante o
            pérdida de datos derivados del uso o la imposibilidad de uso del software entregado,
            salvo dolo o culpa grave comprobada.
          </P>
          <P>
            El cliente es responsable de realizar copias de seguridad de sus datos antes de
            cualquier actualización o migración, a menos que el contrato disponga lo contrario.
          </P>
        </Section>

        <Section>
          <H2>6. Confidencialidad</H2>
          <P>
            Ambas partes se comprometen a mantener la confidencialidad de la información
            intercambiada durante el proyecto. Esta obligación se extiende por dos años
            después de finalizada la relación comercial, salvo que se acuerde un plazo diferente.
          </P>
        </Section>

        <Section>
          <H2>7. Modificaciones</H2>
          <P>
            {siteConfig.company.name} puede modificar estos Términos en cualquier momento.
            La versión vigente es siempre la publicada en este sitio con la fecha de
            última actualización.
          </P>
        </Section>

        <Section>
          <H2>8. Ley aplicable y jurisdicción</H2>
          <P>
            Estos Términos se rigen por las leyes de la República Argentina. Ante cualquier
            controversia, las partes se someten a la jurisdicción de los tribunales ordinarios
            de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero.
          </P>
        </Section>

        <Section>
          <H2>9. Contacto</H2>
          <P>
            Para cualquier consulta sobre estos términos, escribinos a{" "}
            <ContactLink href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </ContactLink>.
          </P>
        </Section>
      </Main>
      <Footer />
    </Wrap>
  )
}
