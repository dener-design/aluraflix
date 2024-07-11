import React from 'react';
import styled from 'styled-components';
import CardVideo from './CardVideo';

const SectionContainer = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h2`
  background: ${({ theme, categoria }) => theme.colors[categoria]};
  padding: 0.5rem 1rem;
  color: #000;
`;

const VideosContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const Section = ({ title, videos, categoria }) => {
  if (videos.length === 0) {
    return null;
  }

  return (
    <SectionContainer>
      <SectionTitle categoria={categoria}>{title}</SectionTitle>
      <VideosContainer>
        {videos.map((video) => (
          <CardVideo key={video.id} video={video} />
        ))}
      </VideosContainer>
    </SectionContainer>
  );
};

export default Section;
