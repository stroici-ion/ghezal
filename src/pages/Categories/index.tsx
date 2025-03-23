import React from 'react';

import styles from './styles.module.scss';
import { productCategories } from './utils';
import Category from './components/Category';
import CardList from '../../components/CardList';

const Categories = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.root__title}>Categorii</h1>
      <div className={styles.root__categories}>
        <CardList>
          {productCategories.map((category) => (
            <Category key={category.title} {...category} onClick={() => {}} />
          ))}
        </CardList>
      </div>
    </div>
  );
};

export default Categories;
