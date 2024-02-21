import { ThemeSwitch } from "../../../common/ThemeSwitch/index";
import { AboutMe } from "./AboutMe";
import { Photo, Wrapper } from "./styled";
import OskarTraczAvatar from "../../../assets/photo.jpg";

export const Header = () => {
  return (
    <Wrapper>
      <Photo src={OskarTraczAvatar} alt="Oskar Tracz" />
      <AboutMe />
    </Wrapper>
  );
};
