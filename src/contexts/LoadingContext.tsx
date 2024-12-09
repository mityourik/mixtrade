import React, { createContext, useState, useEffect } from 'react';

const frames: string[] = [];
for (let i = 1000; i <= 1159; i++) {
  frames.push(new URL(`../vendor/images/frames/Composition_1_${i}.jpg`, import.meta.url).href);
}

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
    const totalResources = frames.length;

    frames.forEach(src => {
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