import React from 'react';
import styled from 'styled-components';
import CardVideo from './CardVideo';

const SectionContainer = styled.section`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  background: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
`;

const VideosContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
`;

const Section = ({ title, videos }) => {
  if (videos.length === 0) {
    return null;
  }

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <VideosContainer>
        {videos.map((video) => (
          <CardVideo key={video.id} video={video} />
        ))}
      </VideosContainer>
    </SectionContainer>
  );
};

export default Section;
