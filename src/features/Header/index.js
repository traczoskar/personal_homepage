import { AboutMe } from "./AboutMe";
import { Photo, Wrapper } from "./styled";
import photo from "../../assets/photo.jpg";

export const Header = () => {
  return (
    <Wrapper>
      <Photo src={photo} alt="Oskar Tracz" />
      <AboutMe />
    </Wrapper>
  );
};
