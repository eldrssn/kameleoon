import { FC } from 'react';

import { SortingItem } from '@ui-kit';
import { useAppContext } from '@hooks';

import { PropsType } from './types';
import styles from './styles.module.css';

export const Sorting: FC<PropsType> = ({ items, style }) => {
  const { onSort, sortDirection, sortBy } = useAppContext();

  return (
    <div style={style} className={styles.sortingList}>
      {items.map((item) => (
        <SortingItem
          item={item}
          key={item.value}
          onSort={onSort}
          sortDirection={sortDirection}
          sortBy={sortBy}
        />
      ))}
    </div>
  );
};
