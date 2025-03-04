import { FC } from 'react';

import { PropsType } from './types';
import styles from './styles.module.css';

export const Header: FC<PropsType> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};
