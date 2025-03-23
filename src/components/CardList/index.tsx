import React from 'react';

import styles from './styles.module.scss';

interface CardListProps {
  children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default CardList;
