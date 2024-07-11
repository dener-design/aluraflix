import React from 'react';
import styled from 'styled-components';

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;

`;

const DialogContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
`;

const VideoEmbed = styled.iframe`
  width: 560px;
  height: 315px;
  border: none;
`;

const VideoDialog = ({ video, onClose }) => {
  return (
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        <VideoEmbed
          src={video.urlVideo.replace('watch?v=', 'embed/')}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContainer>
    </DialogOverlay>
  );
};

export default VideoDialog;
