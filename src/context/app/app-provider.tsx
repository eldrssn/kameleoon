import { useState } from 'react';
import { AppProviderProps } from './types';
import { Site, Test } from '@models';
import { AppContext } from './app-context';

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tests, setTests] = useState<Test[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [filterText, setFilterText] = useState<string>('');

  return (
    <AppContext.Provider
      value={{ tests, sites, filterText, setTests, setSites, setFilterText }}
    >
      {children}
    </AppContext.Provider>
  );
};
