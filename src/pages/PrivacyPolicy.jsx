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
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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

export function PrivacyPolicy() {
  return (
    <Wrap>
      <Navbar />
      <Main>
        <Eyebrow>Legal</Eyebrow>
        <Title>Política de Privacidad</Title>
        <LastUpdated>Última actualización: mayo de 2025</LastUpdated>

        <Section>
          <P>
            En <strong>{siteConfig.company.name}</strong> nos comprometemos a proteger tu privacidad.
            Esta política describe qué datos recopilamos cuando visitás nuestro sitio, cómo los usamos
            y qué derechos tenés sobre ellos.
          </P>
          <P>
            Cumplimos con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina
            y con las normativas aplicables de la Dirección Nacional de Protección de Datos Personales (DNPDP).
          </P>
        </Section>

        <Section>
          <H2>1. Datos que recopilamos</H2>
          <P>Solo recopilamos información que vos nos proporcionás de forma voluntaria:</P>
          <UL>
            <li><strong>Formulario de contacto:</strong> nombre, dirección de correo electrónico y el mensaje que nos enviás.</li>
            <li><strong>Datos de uso:</strong> información técnica básica como el tipo de navegador y el país de acceso, sin identificarte personalmente.</li>
          </UL>
          <P>No recopilamos datos sensibles, no usamos cookies de rastreo ni publicidad.</P>
        </Section>

        <Section>
          <H2>2. Para qué usamos tus datos</H2>
          <P>Los datos del formulario de contacto se utilizan exclusivamente para:</P>
          <UL>
            <li>Responderte y darte seguimiento a tu consulta.</li>
            <li>Evaluar si podemos ayudarte con tu proyecto.</li>
          </UL>
          <P>No vendemos, alquilamos ni compartimos tu información con terceros para fines comerciales.</P>
        </Section>

        <Section>
          <H2>3. Almacenamiento y seguridad</H2>
          <P>
            Los mensajes recibidos se almacenan en sistemas protegidos con acceso restringido.
            Conservamos los datos el tiempo necesario para responder tu consulta y, en caso de
            convertirse en un proyecto, durante la vigencia de la relación comercial más el plazo
            legal aplicable.
          </P>
        </Section>

        <Section>
          <H2>4. Tus derechos</H2>
          <P>De acuerdo con la Ley 25.326, tenés derecho a:</P>
          <UL>
            <li><strong>Acceso:</strong> conocer qué datos tenemos sobre vos.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar que eliminemos tus datos.</li>
          </UL>
          <P>
            Para ejercer cualquiera de estos derechos, escribinos a{" "}
            <ContactLink href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </ContactLink>.
          </P>
        </Section>

        <Section>
          <H2>5. Cookies</H2>
          <P>
            Este sitio no utiliza cookies de rastreo ni de publicidad. Podemos usar cookies técnicas
            estrictamente necesarias para el funcionamiento del sitio, que no requieren tu consentimiento.
          </P>
        </Section>

        <Section>
          <H2>6. Cambios en esta política</H2>
          <P>
            Podemos actualizar esta política en cualquier momento. Si los cambios son significativos,
            lo indicaremos con la fecha de actualización al inicio del documento.
          </P>
        </Section>

        <Section>
          <H2>7. Contacto</H2>
          <P>
            Ante cualquier consulta sobre privacidad, podés escribirnos a{" "}
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
