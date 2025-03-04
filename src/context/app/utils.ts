import { CombineItem, Site, SortDirectionType, Test } from '@models';
import { STATUS_PRIORITY } from './constants';

const formatUrl = (url: string) => {
  return url.replace(/(^\w+:|^)\/\/(www\.)?/, '');
};

export const combineData = (tests: Test[], sites: Site[]): CombineItem[] => {
  return tests.map((test) => {
    const site = sites.find((site) => site.id === test.siteId);
    return {
      ...test,
      siteUrl: site ? formatUrl(site.url) : '',
    };
  });
};

type GetSortedListType = {
  list: CombineItem[];
  sortBy: string | null;
  sortDirection: SortDirectionType;
};

export const getSortedList = ({
  list,
  sortBy,
  sortDirection,
}: GetSortedListType): CombineItem[] => {
  if (sortDirection === null || !sortBy) {
    return list;
  }

  return [...list].sort((a, b) => {
    let valueA, valueB;

    switch (sortBy) {
      case 'Name':
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase();
        break;
      case 'Type':
        valueA = a.type.toLowerCase();
        valueB = b.type.toLowerCase();
        break;
      case 'Status':
        valueA = STATUS_PRIORITY[a.status.toUpperCase()];
        valueB = STATUS_PRIORITY[b.status.toUpperCase()];
        break;
      case 'Site':
        valueA = a.siteUrl.toLowerCase();
        valueB = b.siteUrl.toLowerCase();
        break;
      default:
        return 0;
    }

    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
};
