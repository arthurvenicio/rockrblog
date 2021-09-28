import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .error {
    height: 100vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: rgb(241, 161, 10);
  background: -moz-linear-gradient(
    90deg,
    rgba(241, 161, 10, 1) 0%,
    rgba(52, 35, 3, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(241, 161, 10, 1) 0%,
    rgba(52, 35, 3, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(241, 161, 10, 1) 0%,
    rgba(52, 35, 3, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f1a10a",endColorstr="#342303",GradientType=1);
`;

export const Cards = styled.div`
  width: auto;
  height: auto;

  margin-top: 1.5rem;

  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  &.loading {
    padding: 2rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: Rubik, sans-serif;
      font-weight: 600;
    }
  }
`;
