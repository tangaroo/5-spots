import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import cities from "../gallery/cities.json";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return <p>City not found</p>;
  }

  return (
    <Layout>
      <CityContainer>
        <h1>{city.name}</h1>
        <p>{city.description}</p>
        <Images>
          {city.images.map((image, index) => (
            <ImageWrapper key={index}>
              <img src={image} alt={city.name} />
            </ImageWrapper>
          ))}
        </Images>
      </CityContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const cities = require('../gallery/cities.json'); // Adjust the path if necessary
  const paths = cities.map((city) => ({
    params: { slug: city.slug },
  }));

  return {
    paths,
    fallback: false, // Change to 'blocking' or 'true' for different fallback behavior
  };
}

export async function getStaticProps({ params }) {
  const cities = require('../gallery/cities.json'); // Adjust the path if necessary
  const city = cities.find((city) => city.slug === params.slug);

  if (!city) {
    return { notFound: true }; // Handle cases where city is not found
  }

  return {
    props: {
      city,
    },
  };
}

const CityContainer = styled.div`
  padding: 0px;

  p {
    margin: var(--space32) 0px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space32);
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
