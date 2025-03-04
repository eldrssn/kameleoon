/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getSites, getTests } from '@api';
import { useAppContext } from '@hooks';

export const useFetchData = () => {
  const { setTests, setSites } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testsData, sitesData] = await Promise.all([
          getTests(),
          getSites(),
        ]);
        setTests(testsData);
        setSites(sitesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
};
