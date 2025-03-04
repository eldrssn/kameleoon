import { FC } from 'react';

import { PropsType } from './types';
import styles from './styles.module.css';

export const SearchInput: FC<PropsType> = ({ text, onChange, postfix }) => {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="What test are you looking for?"
        value={text}
        onChange={onChange}
        className={styles.searchInput}
      />
      <span className={styles.postfix}>{postfix}</span>
    </div>
  );
};
