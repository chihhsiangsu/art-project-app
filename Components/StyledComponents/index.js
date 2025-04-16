import styled from "styled-components";
import Link from "next/link";

export const StyledCard = styled.div`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.2s ease;
  margin: 10px;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const StyledInfo = styled.div`
  padding: 1rem;
`;

export const StyledTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
`;

export const StyledArtist = styled.p`
  margin: 0;
  color: #666;
`;

export const StyledHeading = styled.h1`
  margin: 20px;
  color: grey;
  text-align: center;
  text-shadow: #fc0 1px 0 10px;
`;

export const FixedFlexRow = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  background-color: ${({ $active }) => ($active ? "pink" : "black")};
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledBody = styled.body`
  margin-bottom: 80px;
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const StyledFavoriteIcon = styled.img`
  width: 40px;
  height: 40px;
`;
