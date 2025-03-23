import React from 'react';

import styles from './styles.module.scss';

interface CategoryProps {
  icon?: React.ReactNode;
  title?: string;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ icon, title, onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      <div className={styles.root__icon}>{icon}</div>
      {title}
    </button>
  );
};

export default Category;
