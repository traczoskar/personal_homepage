import { socialsStore } from "./socialsStore";
import { SocialList, Item, Link } from "./styled";

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
    </SocialList>
  );
};
