import { FC } from 'react';
import classnames from 'classnames/bind';

import { PropsType } from './types';
import styles from './styles.module.css';

const cn = classnames.bind(styles);

export const ActionButton: FC<PropsType> = ({
  variant = 'primary',
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.button, {
        [styles.button_primary]: variant === 'primary',
        [styles.button_secondary]: variant === 'secondary',
      })}
    >
      {children}
    </button>
  );
};
