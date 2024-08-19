import styled from "styled-components";
import "../../styles/styles";

export default function ImageWithText ({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space8);
  margin-bottom: var(--space12);
`;
