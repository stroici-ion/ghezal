import React from 'react';

import logo from '../../images/logo.png';
import styles from './styles.module.scss';

const Logo = () => {
  return <img src={logo} className={styles.root}></img>;
};

export default Logo;
