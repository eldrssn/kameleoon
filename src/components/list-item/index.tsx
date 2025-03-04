import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames/bind';

import { ActionButton } from '@ui-kit';

import { PropsType } from './types';
import { getColorBySiteId } from './utils';
import styles from './styles.module.css';

const cn = classnames.bind(styles);

export const ListItem: FC<PropsType> = ({ item, style }) => {
  const navigate = useNavigate();

  const { siteId, name, type, status, siteUrl } = item;

  const isFinalize = status === 'DRAFT';

  const handleResultsClick = () => {
    navigate(`/results/${item.id}`);
  };

  const handleFinalizeClick = () => {
    navigate(`/finalize/${item.id}`);
  };

  return (
    <article
      style={{ ...style, borderColor: getColorBySiteId(siteId) }}
      className={cn(styles.listWrapper, {})}
      onClick={isFinalize ? handleFinalizeClick : handleResultsClick}
      tabIndex={0}
    >
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemType}>{type}</div>
      <div
        className={cn(styles.itemStatus, {
          [styles.itemStatus_online]: status === 'ONLINE',
          [styles.itemStatus_paused]: status === 'PAUSED',
          [styles.itemStatus_draft]: status === 'DRAFT',
          [styles.itemStatus_stopped]: status === 'STOPPED',
        })}
      >
        {status}
      </div>
      <div className={styles.itemSite}>{siteUrl}</div>
      <div className={styles.itemAction}>
        <ActionButton variant={isFinalize ? 'secondary' : 'primary'}>
          {isFinalize ? 'Finalize' : 'Results'}
        </ActionButton>
      </div>
    </article>
  );
};
