import React, { createContext, useState, useEffect } from 'react';

const frames: string[] = [];
for (let i = 1000; i <= 1159; i++) {
  frames.push(new URL(`../vendor/images/frames/Composition_1_${i}.jpg`, import.meta.url).href);
}
// equip
import BM670 from '../vendor/images/carousel/mixcement.png';
import XLStation from '../vendor/images/carousel/xl.png';
import VStation from '../vendor/images/carousel/v-series.png';
import pumpMinStation from '../vendor/images/carousel/pumpmin.png';
// equip
import bm670img from '../vendor/images/buttons/button_bm670.png';
import xlImg from '../vendor/images/buttons/button_xl.png';
import vImg from '../vendor/images/buttons/button_v-series.png';
import pumpMinImg from '../vendor/images/buttons/button_rm-l.png';
// community
import imgBag from '../vendor/images/bag.png';
// hero
import heroVideo from '../vendor/images/video/xl_web_60fps.mp4';

const equipImages = [
  BM670,
  XLStation,
  VStation,
  pumpMinStation,
  bm670img,
  xlImg,
  vImg,
  pumpMinImg
];

const communityImages = [imgBag];

const heroVideos = [heroVideo];

const allImagesToLoad = [...frames, ...equipImages, ...communityImages, ...heroVideos];

interface LoadingContextValue {
  isLoading: boolean;
  progress: number;
}

export const LoadingContext = createContext<LoadingContextValue>({
  isLoading: true,
  progress: 0,
});

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const totalResources = allImagesToLoad.length;

    allImagesToLoad.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalResources) * 100));
        if (loadedCount === totalResources) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalResources) * 100));
        if (loadedCount === totalResources) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, progress }}>
      {children}
    </LoadingContext.Provider>
  );
};