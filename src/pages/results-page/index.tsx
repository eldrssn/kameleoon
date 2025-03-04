import { useParams } from 'react-router-dom';

import { useAppContext } from '@hooks';
import { BackButton, Header } from '@ui-kit';

export const ResultsPage = () => {
  const { testId } = useParams<{ testId: string }>();
  const { tests } = useAppContext();

  const test = tests.find((test) => test.id === Number(testId));

  return (
    <>
      <Header>Results</Header>
      {test ? <h2>{test.name}</h2> : <h2>Test with ID {testId} not found</h2>}
      <BackButton />
    </>
  );
};
