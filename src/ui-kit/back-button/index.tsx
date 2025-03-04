import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      Back
    </button>
  );
};
