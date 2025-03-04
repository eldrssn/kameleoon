export type SortingItemType = {
  name: string;
  value: string;
};

export type PropsType = {
  items: SortingItemType[];
  style?: Record<string, string>;
};
