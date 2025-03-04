import { SortDirectionType } from '@models';
import { SortingItemType } from 'components/sorting/types';

export type PropsType = {
  item: SortingItemType;
  onSort: (value: string) => void;
  sortDirection: SortDirectionType;
  sortBy: string | null;
};
