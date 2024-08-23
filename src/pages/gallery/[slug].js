import { useRouter } from "next/router";
import Image from "next/image";

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
              <Image
                src={image}
                alt={city.name}
                width={800}  
                height={600}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </ImageWrapper>
          ))}
        </Images>
      </CityContainer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const cities = require("../gallery/cities.json");
  const paths = cities.map((city) => ({
    params: { slug: city.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const cities = require("../gallery/cities.json");
  const city = cities.find((city) => city.slug === params.slug);

  if (!city) {
    return { notFound: true };
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
  width: 100%; 
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
