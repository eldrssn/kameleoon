import { useState, useEffect } from 'react';
import { getSites, getTests } from '@api';
import { Site, Test } from '@models';

export const useFetchData = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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
        setError(
          error instanceof Error ? error : new Error('An error occurred'),
        );
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tests, sites, loading, error };
};
