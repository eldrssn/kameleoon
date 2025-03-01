import { useFetchData } from '@hooks';

export const MainPage = () => {
  const { tests, sites, loading, error } = useFetchData();
  console.log('tests', tests);
  console.log('sites', sites);
  return <div></div>;
};
