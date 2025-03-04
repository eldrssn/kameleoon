import { useMemo, useState } from 'react';

import { Site, SortDirectionType, Test } from '@models';

import { AppProviderProps } from './types';
import { AppContext } from './app-context';
import { combineData, getSortedList } from './utils';

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tests, setTests] = useState<Test[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [filterText, setFilterText] = useState<string>('');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirectionType>(null);

  const combinedData = combineData(tests, sites);

  const filtredList = useMemo(
    () =>
      combinedData.filter((test) =>
        test.name.toLowerCase().includes(filterText.toLowerCase()),
      ),
    [combinedData, filterText],
  );

  const sortedList = useMemo(
    () =>
      getSortedList({
        list: filtredList,
        sortBy,
        sortDirection,
      }),
    [filtredList, sortBy, sortDirection],
  );

  const onSort = (value: string) => {
    if (sortBy === value) {
      setSortDirection((prev) => {
        if (prev === 'asc') return 'desc';
        if (prev === 'desc') return null;
        return 'asc';
      });
    } else {
      setSortBy(value);
      setSortDirection('asc');
    }
  };

  const clearFilterText = () => setFilterText('');

  return (
    <AppContext.Provider
      value={{
        tests,
        sites,
        filterText,
        filtredList,
        sortedList,
        sortBy,
        sortDirection,
        setTests,
        setSites,
        setFilterText,
        onSort,
        clearFilterText
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
