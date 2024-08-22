import styled from "styled-components";
import "../../styles/styles";

export default function Banner({ date, place, status }) {
  return (
    <Container>
      <LeftContent>
        <Status><p>{status}</p></Status>
        <Place><p>{place}</p></Place>
      </LeftContent>
      <Date><p>{date}</p></Date>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: var(--space12);
  padding: var(--space12) var(--space16);
  background-color: #F2F2F2;
  margin-bottom: var(--space32);
`;

const LeftContent = styled.div`
  display: flex;
  gap: var(--space8); 
`;

const Status = styled.span`
  font-weight: bold;
  color: var(--accent); 
`;

const Place = styled.span`
  color: var(--dark); 
`;

const Date = styled.span`
  color: var(--grey); 
`;