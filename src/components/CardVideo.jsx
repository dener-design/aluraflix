import React, { useState } from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../context/VideoContext';
import DialogForm from './DialogForm';
import VideoDialog from './VideoDialog';

const CardContainer = styled.div`
  position: relative;
  width: 200px;
  cursor: pointer;
`;

const VideoThumb = styled.img`
  width: 100%;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardVideo = ({ video }) => {
  const { removerVideo } = useVideoContext();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isVideoDialogOpen, setVideoDialogOpen] = useState(false);

  const handleEditClick = () => {
    setDialogOpen(true);
  };

  const handleRemoveClick = () => {
    removerVideo(video.id);
  };

  const handleVideoClick = () => {
    setVideoDialogOpen(true);
  };

  return (
    <CardContainer>
      <VideoThumb src={video.urlImagemCapa} alt={video.titulo} onClick={handleVideoClick} />
      <CardActions>
        <Button onClick={handleRemoveClick}>🗑 Deletar</Button>
        <Button onClick={handleEditClick}>✏️ Editar</Button>
      </CardActions>
      {isDialogOpen && <DialogForm video={video} onClose={() => setDialogOpen(false)} />}
      {isVideoDialogOpen && <VideoDialog video={video} onClose={() => setVideoDialogOpen(false)} />}
    </CardContainer>
  );
};

export default CardVideo;
