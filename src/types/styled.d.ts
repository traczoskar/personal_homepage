import "styled-components";
import { themeDark, themeLight } from "../theme";

type Theme = typeof themeDark | typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
