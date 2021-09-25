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

export const titleBox = styled.div`
  width: auto;
  height: auto;
  background: transparent;
  margin-top: 1rem;

  color: #f1a10a;
  font-family: Rubik, sans-serif;
  font-weight: 700;
`;

export const Image = styled.img`
  margin-top: 2rem;
  width: 10rem;
  border-radius: 50%;
  transition: transform 1s;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.105);
  }
`;

export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Inputs = styled.div`
  width: 22.54rem;
  height: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: Rubik, sans-serif;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  padding: 0.65rem;
  width: 22.54rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

export const TextArea = styled.div`
  width: 22.54rem;
  height: 7.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: Rubik, sans-serif;
    font-weight: 400;
  }
`;

export const textArea = styled.textarea`
  max-width: 22.54rem;
  padding: 0.65rem;
  width: 22.54rem;
  height: 6rem;
  border: 1px solid black;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background: #2d2d2d;
  border-radius: 0.25rem;

  color: #fff;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
`;
