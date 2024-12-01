import React, { createContext, useState, ReactNode } from 'react';

interface LoadingContextProps {
  addLoadingTask: () => void;
  finishLoadingTask: () => void;
  isLoading: boolean;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingContext = createContext<LoadingContextProps>({
  addLoadingTask: () => {},
  finishLoadingTask: () => {},
  isLoading: false,
});

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const addLoadingTask = () => {
    setLoadingCount((prev) => prev + 1);
  };

  const finishLoadingTask = () => {
    setLoadingCount((prev) => Math.max(prev - 1, 0));
  };

  const isLoading = loadingCount > 0;

  return (
    <LoadingContext.Provider value={{ addLoadingTask, finishLoadingTask, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;