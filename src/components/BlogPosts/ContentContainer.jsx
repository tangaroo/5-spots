import styled from "styled-components";
import "../../styles/styles";

export default function ContentContainer({children}) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 32px;
  }
`;
