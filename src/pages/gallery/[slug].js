import { useRouter } from 'next/router';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import cities from '../gallery/cities.json'

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  const city = cities.find(city => city.slug === slug);

  if (!city) {
    return <p>City not found</p>;
  }

  return (
    <Layout>
      <CityContainer>
        <h1>{city.name}</h1>
        <ImageGrid>
          {/* Render images here */}
        </ImageGrid>
      </CityContainer>
    </Layout>
  );
}

const CityContainer = styled.div`
  padding: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;