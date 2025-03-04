import { useAppContext } from '@hooks';
import { SearchInput } from '@ui-kit';

export const SearchBar = () => {
  const { filterText, setFilterText, filtredList } = useAppContext();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const postfixText = `${filtredList.length} item${
    filtredList.length === 1 ? '' : 's'
  }`;

  return (
    <SearchInput
      text={filterText}
      onChange={handleFilterChange}
      postfix={postfixText}
    />
  );
};
