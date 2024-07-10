import React from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
import { useVideoContext } from '../context/VideoContext';
import styled from 'styled-components';

const EmptyMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Home = () => {
  const { videos, bannerVideo } = useVideoContext();
  const frontEndVideos = videos.filter(video => video.categoria === 'Front-end');
  const backEndVideos = videos.filter(video => video.categoria === 'Back-end');
  const mobileVideos = videos.filter(video => video.categoria === 'Mobile');

  const allSectionsEmpty = frontEndVideos.length === 0 && backEndVideos.length === 0 && mobileVideos.length === 0;

  return (
    <>
      <Banner video={bannerVideo} />
      {allSectionsEmpty ? (
        <EmptyMessage>Nenhum vídeo cadastrado</EmptyMessage>
      ) : (
        <>
          <Section title="Front-end" videos={frontEndVideos} />
          <Section title="Back-end" videos={backEndVideos} />
          <Section title="Mobile" videos={mobileVideos} />
        </>
      )}
    </>
  );
};

export default Home;
