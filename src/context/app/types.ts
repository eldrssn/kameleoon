import { ReactNode } from 'react';

import { Site, Test } from '@models';

export interface AppContextType {
  tests: Test[];
  sites: Site[];
  filterText: string;
  setTests: (tests: Test[]) => void;
  setSites: (sites: Site[]) => void;
  setFilterText: (text: string) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
