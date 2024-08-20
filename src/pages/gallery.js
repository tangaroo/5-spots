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
  gap: var(--space32);
`;

const CityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; 
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${CityCard}:hover & {
    opacity: 0.9; 
  }
`;

const CityName = styled.p`
  width: 100%;
  margin-top: var(--space8);  
  text-align: left; 
  color: var(--dark);
  transition: color 0.3s ease;

  ${CityCard}:hover & {
    color: var(--grey);
  }
`;