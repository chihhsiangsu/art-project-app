import { FixedFlexRow, StyledLink } from "../StyledComponents";
import { useRouter } from "next/router";

export function NavigationBar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <FixedFlexRow>
      <StyledLink href="/" $active={isActive("/")}>
        Spotlight
      </StyledLink>
      <StyledLink href="/art-pieces" $active={isActive("/art-pieces")}>
        Gallery
      </StyledLink>
      <StyledLink href="/favorites" $active={isActive("/favorites")}>
        Favorites
      </StyledLink>
    </FixedFlexRow>
  );
}
