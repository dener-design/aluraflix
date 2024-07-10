import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  background: url(${({ $background }) => $background}) no-repeat center center;
  background-size: cover;
  padding: 2rem;
  gap: 2rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

const VideoEmbed = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
`;

const Banner = ({ video }) => {
  return (
    <BannerContainer $background={video.urlImagemCapa}>
      <Info>
        <span>{video.categoria}</span>
        <h1>{video.titulo}</h1>
        <p>{video.descricao}</p>
      </Info>
      <VideoEmbed 
        src={video.urlVideo.replace("watch?v=", "embed/")} 
        title={video.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </BannerContainer>
  );
};

export default Banner;
