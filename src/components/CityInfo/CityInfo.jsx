import styled from "styled-components";

export default function CityInfo({
  firstTitle,
  secondTitle,
  firstDescription,
  secondDescription,
}) {
  return (
    <Container>
      <Box flex="4">
        <Title>{firstTitle}</Title>
        <p>{firstDescription}</p>
      </Box>
      <Box flex="2">
        <Title>{secondTitle}</Title>
        <p>{secondDescription}</p>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid var(--light-grey);
  margin: 0px 0px var(--space40) 0px;
`;

const Box = styled.div`
  flex: ${(props) => props.flex};
  padding: var(--space12);
  box-sizing: border-box;

  &:first-of-type {
    border-right: 1px solid var(--light-grey);
  }

  &:last-child {
    margin-bottom: 0;
  }

    p {
    margin: 0px;
  }

`;

const Title = styled.h2`
  color: var(--accent);
`;