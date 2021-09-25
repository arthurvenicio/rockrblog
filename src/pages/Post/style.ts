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
  height: 45rem;
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
