import { FC } from 'react';

import styles from './Square.module.scss';

export const Square: FC = () => {
  return <button className={styles.square}></button>;
};
