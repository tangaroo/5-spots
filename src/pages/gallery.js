import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import cities from '../pages/gallery/cities.json';

export default function Gallery() {
  return (
    <Layout>
      <GalleryContainer>
        {cities.map(city => (
          <Link key={city.slug} href={`/gallery/${city.slug}`} passHref>
            <CityCard>
              <Thumbnail src={city.thumbnail} alt={`${city.name} Thumbnail`} />
              <CityName>{city.name}</CityName>
            </CityCard>
          </Link>
        ))}
      </GalleryContainer>
    </Layout>
  );
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px;
  padding: 20px;
`;

const CityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const CityName = styled.p`
  width: 100%;
  margin-top: var(--space8);  
  text-align: left; 
  font-size: 1em;
  color: var(--dark);
`;