import styled, { keyframes } from "styled-components";
import Navigation from "../Navigation/Navigation";
import Info from "../Info/Info";
import { GlobalStyle } from "@/styles/styles";
import SEO from "../Head/Head";

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      <Main>
        <Navigation />
        <Content>{children}</Content>
        <Info />
      </Main>
    </>
  );
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 15% auto 25%; 
  grid-template-areas: "nav content info"; 
  gap: var(--space48);
  min-height: 100vh;
  max-width: 800px; 
  margin: 0 auto; 
  padding: var(--space40) 0;
  box-sizing: border-box;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.div`
  grid-area: content;
  overflow: hidden; 
`;