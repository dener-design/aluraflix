import React, { useState } from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../context/VideoContext';
import DialogForm from './DialogForm';

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

  const handleEditClick = () => {
    setDialogOpen(true);
  };

  const handleRemoveClick = () => {
    removerVideo(video.id);
  };

  return (
    <CardContainer>
      <VideoThumb src={video.urlImagemCapa} alt={video.titulo} />
      <CardActions>
        <Button onClick={handleRemoveClick}>🗑 Deletar</Button>
        <Button onClick={handleEditClick}>✏️ Editar</Button>
      </CardActions>
      {isDialogOpen && <DialogForm video={video} onClose={() => setDialogOpen(false)} />}
    </CardContainer>
  );
};

export default CardVideo;
