import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navigation() {
  const router = useRouter();

  // Helper function to determine if a link is active
  const isActive = (href) => {
    // Check if the current path matches or starts with href plus a slash
    return router.pathname === href || router.pathname.startsWith(`${href}/`);
  };

  const logo = (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="8.5" width="4" height="4" transform="rotate(-180 4 8.5)" fill="black" />
      <rect x="4" y="12.5" width="4" height="4" transform="rotate(-180 4 12.5)" fill="black" />
      <rect x="12" y="4.5" width="4" height="4" transform="rotate(-180 12 4.5)" fill="black" />
      <rect x="12" y="12.5" width="4" height="4" transform="rotate(-180 12 12.5)" fill="black" />
      <rect x="8" y="4.5" width="4" height="4" transform="rotate(-180 8 4.5)" fill="black" />
      <rect x="4" y="4.5" width="4" height="4" transform="rotate(-180 4 4.5)" fill="black" />
      <rect x="8" y="8.5" width="4" height="4" transform="rotate(-180 8 8.5)" fill="black" />
    </svg>
  );

  return (
    <Container>
      <Content>
      <Link href="/"><h1>{logo} 5 SPOTS</h1></Link>
      <Nav>
        <StyledLink href="/" selected={isActive("/") || router.pathname.startsWith("/posts")}>
          Blog
        </StyledLink>
        <StyledLink href="/gallery" selected={isActive("/gallery")}>
          Gallery
        </StyledLink>
      </Nav>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  grid-area: nav;

  h1 {
    margin-bottom: var(--space20);
    color: var(--dark);
  }
`;

const Content = styled.div`
  position: sticky;
  top: var(--space20);
  right: 0;
  z-index: 10;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: var(--space8);
  margin-bottom: var(--space32);

  @media (min-width: 800px){
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block; 
  width: fit-content;
  text-decoration: none;
  color: ${({ selected }) => (selected ? "var(--dark)" : "var(--grey)")};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  border-bottom: ${({ selected }) =>
    selected ? `1px solid var(--dark)` : "none"};
  transition: border-bottom 0.1s ease;
  
  &:hover {
    cursor: pointer;
    color: var(--grey);
    border-bottom: 1px solid var(--grey);
  }
`;