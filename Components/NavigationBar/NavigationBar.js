import { FixedFlexRow, StyledLink } from "../StyledComponents";

export function NavigationBar() {
  return (
    <FixedFlexRow>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/">Favorites</StyledLink>
    </FixedFlexRow>
  );
}
