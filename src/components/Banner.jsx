import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  background: url(${({ $background }) => $background}) no-repeat center center;
  background-size: cover;
  padding: 2rem;
  gap: 2rem;
  .banner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }
  .banner-video {
    flex: 1;
  }
`;

const Tag = styled.span`
  background-color: ${({ theme, categoria }) => theme.colors[categoria]};
  color: #000;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
`;

const Banner = ({ video }) => {
  return (
    <BannerContainer $background={video.urlImagemCapa} className="container">
      <div className="banner-content">
        <Tag categoria={video.categoria}>{video.categoria}</Tag>
        <h1>{video.titulo}</h1>
        <p>{video.descricao}</p>
      </div>
      <div className="banner-video">
        <VideoEmbed
          src={video.urlVideo.replace('watch?v=', 'embed/')}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </BannerContainer>
  );
};

export default Banner;
