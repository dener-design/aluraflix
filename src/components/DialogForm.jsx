import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../context/VideoContext';

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
`;

const DialogContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.text)};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? theme.colors.error : theme.colors.text)};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
`;

const DialogForm = ({ video, onClose }) => {
  const { adicionarVideo, atualizarVideo } = useVideoContext();
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [urlImagemCapa, setUrlImagemCapa] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (video) {
      setTitulo(video.titulo);
      setCategoria(video.categoria);
      setUrlImagemCapa(video.urlImagemCapa);
      setUrlVideo(video.urlVideo);
      setDescricao(video.descricao);
    }
  }, [video]);

  const validate = () => {
    const newErrors = {};
    if (!titulo) newErrors.titulo = 'Título é obrigatório';
    if (!categoria) newErrors.categoria = 'Categoria é obrigatória';
    if (!urlImagemCapa) newErrors.urlImagemCapa = 'URL da imagem de capa é obrigatória';
    if (!urlVideo) newErrors.urlVideo = 'URL do vídeo é obrigatória';
    if (!descricao) newErrors.descricao = 'Descrição é obrigatória';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const videoAtualizado = { ...video, titulo, categoria, urlImagemCapa, urlVideo, descricao };
    
    if (video.id) {
      atualizarVideo(videoAtualizado);
    } else {
      adicionarVideo(videoAtualizado);
    }

    // Resetar campos e fechar o diálogo
    setTitulo('');
    setCategoria('');
    setUrlImagemCapa('');
    setUrlVideo('');
    setDescricao('');
    onClose();
  };

  return (
    <DialogOverlay onClick={onClose}>
      <DialogContainer onClick={(e) => e.stopPropagation()}>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            $hasError={errors.titulo}
          />
          {errors.titulo && <ErrorMessage>{errors.titulo}</ErrorMessage>}
          <Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            $hasError={errors.categoria}
          >
            <option value="">Categoria</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Mobile">Mobile</option>
          </Select>
          {errors.categoria && <ErrorMessage>{errors.categoria}</ErrorMessage>}
          <Input
            type="text"
            placeholder="URL da Imagem de Capa"
            value={urlImagemCapa}
            onChange={(e) => setUrlImagemCapa(e.target.value)}
            $hasError={errors.urlImagemCapa}
          />
          {errors.urlImagemCapa && <ErrorMessage>{errors.urlImagemCapa}</ErrorMessage>}
          <Input
            type="text"
            placeholder="URL do Vídeo"
            value={urlVideo}
            onChange={(e) => setUrlVideo(e.target.value)}
            $hasError={errors.urlVideo}
          />
          {errors.urlVideo && <ErrorMessage>{errors.urlVideo}</ErrorMessage>}
          <Input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            $hasError={errors.descricao}
          />
          {errors.descricao && <ErrorMessage>{errors.descricao}</ErrorMessage>}
          <Button type="submit">Salvar</Button>
        </Form>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default DialogForm;
