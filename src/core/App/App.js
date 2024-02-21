import { Container } from "../../common/Container";
import { Section } from "../../common/Section/styled";
import { Icon } from "../../common/Icon";
import { Skills } from "../../features/PersonalHomepage/Skills";
import { ToLearn } from "../../features/PersonalHomepage/ToLearn";
import { Header } from "../../features/PersonalHomepage/Header";
import { Title } from "../../common/Title";
import { Footer } from "../../features/PersonalHomepage/Footer";
import { ThemeSwitch } from "../../common/ThemeSwitch";

function App() {
  return (
    <Container>
      <ThemeSwitch />
      <Header />
      <Section>
        <Title>
          My skillset includes <Icon>🛠️</Icon>
        </Title>
        <Skills />
      </Section>
      <Section>
        <Title>
          What I want to learn next <Icon>🚀</Icon>
        </Title>
        <ToLearn />
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
