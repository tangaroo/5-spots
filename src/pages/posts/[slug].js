import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "styled-components";

import Layout from "@/components/Layout/Layout";
import { getTimeAgo } from "../../utils/getTimeAgo";
import Link from 'next/link';

import CityInfo from "@/components/CityInfo/CityInfo";
import Card from "@/components/BlogPosts/Card";
import Section from "@/components/BlogPosts/Section";
import ContentContainer from "@/components/BlogPosts/ContentContainer";
import ImageWithText from "@/components/BlogPosts/ImageWithText";
import IconWithText from "@/components/IconWithText/IconWithText";

const components = {
  CityInfo,
  Section,
  Card,
  ContentContainer,
  IconWithText,
  ImageWithText
};

const Post = ({ frontmatter, mdxSource, previousSlug, nextSlug, previousTitle, nextTitle, currentIndex }) => {
  const { date, title } = frontmatter;
  const timeAgoString = getTimeAgo(date);

  const formatIndex = (index) => {
    return String(index).padStart(3, '0');
  };

  return (
    <Layout frontmatter={frontmatter}>
      <>
        <Heading>
          <h1><span>{formatIndex(currentIndex)}</span> {title}</h1>
          <h1>{timeAgoString}</h1>
        </Heading>
        <MDXProvider components={components}>
          <MDXRemote {...mdxSource} />
        </MDXProvider>
        <Navigation>
          {previousSlug ? ( 
            <StyledLink href={previousSlug}>
              ← {previousTitle}
            </StyledLink>
          ) : (
            <p> </p>
          )}
          {nextSlug ? (
            <StyledLink href={nextSlug}>
              {nextTitle} →
            </StyledLink>
          ) : (
            " "
          )}
        </Navigation>
      </>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "src", "blog-posts");
  const fileNames = fs.readdirSync(postsDirectory);

  // Extract slugs and their associated data
  const slugs = fileNames.map((fileName) => path.basename(fileName, path.extname(fileName)));

  // Function to get post data from slug
  const getPostData = (slug) => {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data;
  };

  // Get all posts with their frontmatter
  const posts = slugs.map(slug => ({ slug, ...getPostData(slug) }));

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Find the index of the current post
  const originalIndex = posts.findIndex(post => post.slug === slug);

  // Total number of posts
  const numberOfPosts = posts.length;

  // Calculate currentIndex in a reversed manner
  const currentIndex = numberOfPosts - originalIndex;

  // Determine next and previous posts
  const previousPost = posts[originalIndex + 1] || null; // Older post
  const nextPost = posts[originalIndex - 1] || null; // Newer post

  // Read the current post's content
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
      previousSlug: previousPost ? `/posts/${previousPost.slug}` : null,
      nextSlug: nextPost ? `/posts/${nextPost.slug}` : null,
      previousTitle: previousPost ? previousPost.title : null,
      nextTitle: nextPost ? nextPost.title : null,
      currentIndex, // Pass currentIndex for displaying
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "src", "blog-posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => {
    const slug = path.basename(fileName, path.extname(fileName));
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space48);

  span {
    color: var(--accent);
  }

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navigation = styled.div`
  margin-top: var(--space48);
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;