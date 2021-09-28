import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.8px);
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 30rem;
  height: 35rem;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 1rem;
  font-family: Rubik, sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #f1a10a;
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

  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonExit = styled.button`
  margin-top: 1rem;
  margin-right: 1.758rem;
  margin-left: auto;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
