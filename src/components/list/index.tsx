import { ListItem, Sorting } from '@components';
import { useAppContext } from '@hooks';
import { ActionButton } from '@ui-kit';

import { ROW_STYLES, SORTING_VALUES } from './constants';
import styles from './styles.module.css';

export const List = () => {
  const { sortedList, clearFilterText } = useAppContext();

  return (
    <section className={styles.section}>
      {sortedList.length > 0 ? (
        <>
          <Sorting items={SORTING_VALUES} style={ROW_STYLES} />
          {sortedList.map((item) => (
            <ListItem item={item} key={item.id} style={ROW_STYLES} />
          ))}
        </>
      ) : (
        <div className={styles.noItemsBox}>
          <p className={styles.noItemsText}>
            Your search did not match any results.
          </p>
          <ActionButton onClick={clearFilterText}>Reset</ActionButton>
        </div>
      )}
    </section>
  );
};
