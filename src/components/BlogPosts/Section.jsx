import styled from "styled-components";
import "../../styles/styles";

export default function Section ({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space16);
`;
