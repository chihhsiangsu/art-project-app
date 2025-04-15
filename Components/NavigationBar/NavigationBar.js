import { FixedFlexRow, StyledLink } from "../StyledComponents";

export function NavigationBar() {
  return (
    <FixedFlexRow>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Gallery</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </FixedFlexRow>
  );
}
