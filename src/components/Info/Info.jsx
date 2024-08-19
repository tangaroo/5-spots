import styled from "styled-components";
import "../../styles/styles";

export default function Info() {
  return (
    <Container>
      <About>
        <h2>ABOUT</h2>
        <p>
          A mini blog containing 5 must-see, must do or must try places per
          city that have been carefully curated from my travels.
        </p>
      </About>
      <Disclaimer>
        Say hey @{" "}
        <StyledLink href="https://cassandratang.com" target="_blank">
          cassandratang.com
        </StyledLink>
      </Disclaimer>
    </Container>
  );
}

const Container = styled.div`
  grid-area: info;
`;

const About = styled.div`
  display: block;
  color: var(--grey);

  a:hover {
    border-bottom: 1px solid red;
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
