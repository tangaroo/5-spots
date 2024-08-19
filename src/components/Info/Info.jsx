import styled from "styled-components";
import "../../styles/styles";

export default function Info() {
  return (
    <Container>
      <Content>
      <About>
        <h2>ABOUT</h2>
        <p>
          A mini blog containing 5 conceptual places per 
          city that have been carefully curated from my travels.
        </p>
      </About>
      <Disclaimer>
        Say hey @{" "}
        <StyledLink href="https://cassandratang.com" target="_blank">
          cassandratang.com
        </StyledLink>
      </Disclaimer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  grid-area: info;
  margin-top: var(--space40);

  @media (min-width: 800px) {
  margin: 0px;
  }
`;

const Content = styled.div`
  position: sticky;
  top: var(--space20);
  right: 0;
  z-index: 10;
`

const About = styled.div`
  display: block;
  color: var(--grey);

  a:hover {
    border-bottom: 1px solid red;
  }

  h2 {
    margin-bottom: var(--space16);
  }
`;

const Disclaimer = styled.p`
  color: var(--grey);
  margin-top: var(--space20);
`;

const StyledLink = styled.a`
  color: var(--grey);
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid var(--grey);
    color: var(--grey);
    text-decoration: none;
  }
`;
