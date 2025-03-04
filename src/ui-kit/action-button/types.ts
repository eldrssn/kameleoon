import { ReactNode } from 'react';

export type PropsType = {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  onClick?: () => void;
};
