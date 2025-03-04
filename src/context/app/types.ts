import { ReactNode } from 'react';

import { CombineItem, Site, SortDirectionType, Test } from '@models';

export interface AppContextType {
  tests: Test[];
  sites: Site[];
  filterText: string;
  filtredList: CombineItem[];
  sortedList: CombineItem[];
  sortBy: string | null;
  sortDirection: SortDirectionType;
  setTests: (tests: Test[]) => void;
  setSites: (sites: Site[]) => void;
  setFilterText: (text: string) => void;
  onSort: (value: string) => void;
  clearFilterText: () => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
