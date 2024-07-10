import React, { createContext, useState, useContext } from 'react';
import videosData from '../data/videos.json';
import bannerVideoData from '../data/bannerVideo.json';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(videosData);
  const [bannerVideo] = useState(bannerVideoData);

  const adicionarVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const removerVideo = (id) => {
    const novosVideos = videos.filter(video => video.id !== id);
    setVideos(novosVideos);
  };

  const atualizarVideo = (videoAtualizado) => {
    const novosVideos = videos.map(video =>
      video.id === videoAtualizado.id ? videoAtualizado : video
    );
    setVideos(novosVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, bannerVideo, adicionarVideo, removerVideo, atualizarVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
