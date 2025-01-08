import {
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const tailwindConfig = {
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      primary: "#1F272D",
      secondary: "#0A1F30",
      accent: "#3DA5D9",
    },
  },
};

export const ContactEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="nunitosans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind config={tailwindConfig}>
        <Section className="text-primary">
          <Section>
            <Row>
              <Heading as="h3" className="font-light">
                Client Inquiry
              </Heading>
              <Heading as="h4" className="font-light">
                A client has sent you an email from heenakapadialaw.com
              </Heading>
            </Row>
          </Section>
          <Section>
            {/* <Hr className="mx-0 w-full border border-solid !border-primary/20" /> */}
            <Section>
              <Text>Name: {name}</Text>
            </Section>
            <Hr className="mx-0 w-full border border-solid !border-primary/20" />
            <Section>
              <Text>Email: {email}</Text>
            </Section>
            <Hr className="mx-0 w-full border border-solid !border-primary/20" />
            <Section>
              <Text>Phone Number: {phone}</Text>
            </Section>
            <Hr className="mx-0 w-full border border-solid !border-primary/20" />
            <Section>
              <Text>Message: {message}</Text>
            </Section>
            <Hr className="mx-0 w-full border border-solid !border-primary/20" />
          </Section>
        </Section>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
