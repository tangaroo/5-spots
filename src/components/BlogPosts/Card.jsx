import styled from "styled-components";
import "../../styles/styles";

export default function Card ({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space12);
  padding: var(--space16);
  border: 1px solid var(--light-grey);

  a:hover {
    border-bottom: 1px solid;
  }
`;
