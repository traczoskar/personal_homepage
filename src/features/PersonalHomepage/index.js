import { Container } from "../../common/Container";
import { Section } from "../../common/Section/styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Skills } from "./Skills";
import { ToLearn } from "./ToLearn";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => {
  return (
    <Container>
      <ThemeSwitch />
      <Header />
      <Section>
        <Skills />
      </Section>
      <Section>
        <ToLearn />
      </Section>
      <Portfolio />
      <Footer />
    </Container>
  );
};
