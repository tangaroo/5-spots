import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import "../styles/styles.js"

import BlogPosts from '../components/BlogPosts/BlogPosts';
import Layout from '../components/Layout/Layout';
import Banner from '@/components/Banner/Banner';

export default function Home({ posts }) {
  return (
    <Layout>
      <Banner date="23-09-2024" place="LISBON, PT" status="Planned" />
      <BlogPosts posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'blog-posts');
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = matter(fileContent);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}