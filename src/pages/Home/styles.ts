import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 50rem;
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 10rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 2rem;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
