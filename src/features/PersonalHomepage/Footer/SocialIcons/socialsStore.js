import { ReactComponent as GitIcon } from "../../../../assets/git_icon.svg";
import { ReactComponent as FacebookIcon } from "../../../../assets/facebook_icon.svg";
import { ReactComponent as LinkedInIcon } from "../../../../assets/linkedIn_icon.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/instagram_icon.svg";
import { styleIcon } from "./styled";

export const socialsStore = [
  {
    name: "GitHub",
    url: "https://github.com/traczoskar",
    Icon: styleIcon(GitIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/oskar.tracz.1",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/traczoskar/",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },
];
