import styled from "styled-components";

export const Card = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
`;

export const Artist = styled.p`
  margin: 0;
  color: #666;
`;
