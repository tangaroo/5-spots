import { MDXRemote } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styled from "styled-components";
import CityInfo from "@/components/CityInfo/CityInfo";
import Layout from "../../components/Layout/Layout";
import { getTimeAgo } from "../../utils/getTimeAgo";

const components = {
  CityInfo
};

const Post = ({ frontmatter, mdxSource }) => {
  const { date, tag } = frontmatter;
  const timeAgoString = getTimeAgo(date);

  return (
    <Layout frontmatter={frontmatter}>
      <Content>
        <Heading>
          <h2>{frontmatter.title}</h2>
          <h4>
            {timeAgoString} in {tag && <Tag>{tag}</Tag>}
          </h4>
        </Heading>
        <MDXProvider components={components}>
          <MDXRemote {...mdxSource} />
        </MDXProvider>
      </Content>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src", "blog-posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContent);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
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

const Content = styled.div`
  p {
    margin-bottom: var(--space32);
  }

  a:hover {
    border-bottom: 1px solid;
  }
`;

const Heading = styled.div`
  margin-bottom: var(--space48);
`;

const Tag = styled.span`
  font: 400 var(--type12) / 1.4 var(--accent-font), monospace;
  color: var(--greytext);
  background: var(--background-card);
  padding: var(--spacing-unit);
`;
