import React, { useState } from 'react';
import styled from 'styled-components';
import { useVideoContext } from '../context/VideoContext';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  padding: 2rem;
`;

const FormTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
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

const NovoVideo = () => {
  const { adicionarVideo } = useVideoContext();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [urlImagemCapa, setUrlImagemCapa] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [errors, setErrors] = useState({});

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

    const novoVideo = { titulo, categoria, urlImagemCapa, urlVideo, descricao };
    adicionarVideo(novoVideo);

    // Resetar campos
    setTitulo('');
    setCategoria('');
    setUrlImagemCapa('');
    setUrlVideo('');
    setDescricao('');

    // Redirecionar para Home
    navigate('/');
  };

  return (
    <FormContainer>
      <FormTitle>Novo Vídeo</FormTitle>
      <p>Complete o formulário para criar um novo card de vídeo.</p>
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
    </FormContainer>
  );
};

export default NovoVideo;
