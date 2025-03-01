import { FC } from 'react';
import { PropsType } from './types';
import styles from './styles.module.css';

export const Layout: FC<PropsType> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};
