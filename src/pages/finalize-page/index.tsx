import { useParams } from 'react-router-dom';

import { useAppContext } from '@hooks';
import { BackButton, Header } from '@ui-kit';

export const FinalizePage = () => {
  const { testId } = useParams<{ testId: string }>();
  const { tests } = useAppContext();

  const test = tests.find((test) => test.id === Number(testId));

  return (
    <>
      <Header>Finalize</Header>
      {test ? <h2>{test.name}</h2> : <h2>Test with ID {testId} not found</h2>}
      <BackButton />
    </>
  );
};
