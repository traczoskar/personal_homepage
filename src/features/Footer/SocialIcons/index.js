import { socialsStore } from "./socialsStore";
import { SocialContainer, SocialList } from "./styled";

export const SocialIcons = () => {
  return (
    <SocialList>
      {socialsStore.map(({ name, url, Icon }) => (
        <Item key={name}>
          <Link href={url} title={name} target="_blank" rel="noreferrer">
            <Icon />
          </Link>
        </Item>
      ))}
      ;
    </SocialList>
  );
};
