import styled from "styled-components";
import Link from "next/link";
import { useMemo } from "react";

export default function BlogPosts({ posts }) {
    
    if (!posts) {
      return null;
    }
  
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${month}-${year}`;
    };
  
    const formatIndex = (index) => {
      return String(index).padStart(3, '0');
    };
  
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );  
  
    const numberOfPosts = sortedPosts.length;
  
    return (
      <Container>
      {sortedPosts.map((post, i) => (
        <Row key={`blog-post-${i}`}>
          <Link href={`/posts/${post.slug}`} passHref>
            <StyledLink>
              <TitleAndIndex>
                <Index>{formatIndex(numberOfPosts - i)}</Index>
                <Title>{post.frontmatter.title}</Title>
              </TitleAndIndex>
              <PostDate>{formatDate(post.frontmatter.date)}</PostDate>
            </StyledLink>
          </Link>
        </Row>
      ))}
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  box-sizing: border-box;
`;

const Row = styled.div`
  align-items: center;
  width: 100%;
  padding-top: var(--spacing-unit);
  margin: var(--space8) 0px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--dark);  
  }
`;

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
  justify-content: space-between; 

  &:hover {
    color: var(--background);  
  }
`;

const TitleAndIndex = styled.div`
  display: flex;
  align-items: center;
`;

const Index = styled.span`
  color: var(--accent);
  margin-right: var(--space8);
  font-weight: bold;
`;

const Title = styled.span`
  overflow-wrap: break-word;
`;

const PostDate = styled.div`
  margin-left: var(--space8);
  min-width: fit-content;
  color: var(--grey);
  font-weight: normal;
`;