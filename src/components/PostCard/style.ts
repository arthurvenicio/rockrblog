import styled from "styled-components";

export const Card = styled.div`
  width: 45rem;
  height: 10rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1);

  display: flex;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 10rem;
`;

export const Data = styled.div`
  margin-top: 1rem;
  p {
    &.author {
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 0.84rem;
      color: #2d2d2d;
    }

    &.title {
      max-height: 1rem;
      max-width: 30rem;
      font-family: Rubik, sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      color: #f1a10a;
    }

    &.article {
      max-height: 2rem;
      max-width: 30rem;
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 0.95rem;
      color: #2d2d2d;
    }
  }
`;
