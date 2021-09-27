import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 4.25rem;
  background: #2d2d2d;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & p {
    color: #fff;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-decoration: none;
  }

  & button {
    border: none;
    background: transparent;

    color: #fff;
    font-family: Rubik, sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  & a {
    color: #fff;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-decoration: none;
  }

  #menu {
    margin-left: auto;
    width: 25rem;

    display: flex;
    gap: 5rem;
    p {
      color: #fff;
      font-weight: 600;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  width: 8rem;
  margin-left: 8rem;
`;
