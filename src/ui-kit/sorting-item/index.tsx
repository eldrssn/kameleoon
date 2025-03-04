import { FC } from 'react';

import { PropsType } from './types';
import styles from './styles.module.css';

export const SortingItem: FC<PropsType> = ({
  item,
  onSort,
  sortDirection,
  sortBy,
}) => {
  const handleClick = () => {
    onSort(item.value);
  };
  return (
    <button type="button" className={styles.button} onClick={handleClick}>
      <span>{item.name}</span>
      {sortDirection !== null && sortBy === item.value && (
        <span
          className={sortDirection === 'desc' ? styles.sortDesc : undefined}
        >
          <svg
            width="7"
            height="4"
            viewBox="0 0 7 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1.7637e-07 3.50001L3.13529 0.364715L3.5 7.09765e-06L3.86471 0.364715L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L-1.7637e-07 3.50001Z"
              fill="#999999"
            />
          </svg>
        </span>
      )}
    </button>
  );
};
