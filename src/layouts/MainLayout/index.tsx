import React from 'react';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import Navigation from '../../components/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Navigation />
      <div className={styles.root__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
