import { FC } from 'react';

import { useFetchData } from '@hooks';

import { PropsType } from './types';
import styles from './styles.module.css';

export const Layout: FC<PropsType> = ({ children }) => {
  useFetchData();

  return <main className={styles.main}>{children}</main>;
};
