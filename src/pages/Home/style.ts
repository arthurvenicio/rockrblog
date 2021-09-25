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
