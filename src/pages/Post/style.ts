import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
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

export const Box = styled.div`
  width: 50rem;
  height: 60rem;
  background: #fff;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SubBox = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 1px solid black; */
`;

export const Article = styled.div`
  width: 38.75rem;
  height: 32.5rem;

  margin-top: 4rem;

  p {
    font-family: Rubik, sans-serif;
    font-weight: 400;
    font-size: 0.984rem;
  }
`;

export const Image = styled.img`
  height: 100%;
`;

export const Info = styled.div`
  width: 20rem;
  height: 14.75rem;
  margin-left: 5rem;
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-family: Rubik, sans-serif;

    &.date {
      font-size: 0.854rem;
      font-weight: 400;
    }

    &.author {
      font-size: 1.354rem;
      font-weight: 400;
    }

    &.title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f1a10a;
    }
  }
`;
