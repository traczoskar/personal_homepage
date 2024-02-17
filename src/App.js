import { Container } from "./common/Container";
import { Header } from "./common/Header";
import { Section } from "./common/Section/styled";
import { Icon } from "./common/Icon";
import { Skills } from "./features/Skills";

function App() {
  return (
    <Container>
      <Section>
        <Header>
          My skillset includes <Icon>🛠️</Icon>
        </Header>
        <Skills />
      </Section>
    </Container>
  );
}

export default App;
