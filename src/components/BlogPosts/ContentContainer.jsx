import styled from "styled-components";
import "../../styles/styles";

export default function ContentContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space40);

  a:hover {
    border-bottom: 1px solid;
  }
`;
