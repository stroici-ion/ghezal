import React from 'react';
import { LuSearch } from 'react-icons/lu';

import styles from './styles.module.scss';
import Logo from '../Logo';
import PrimaryButton from '../PrimaryButton';
import CartButton from '../CartButton';

const Header = () => {
  return (
    <div className={styles.root}>
      <Logo />
      <div className={styles.root__actions}>
        <PrimaryButton icon={<LuSearch />} onClick={() => {}} className={styles.root__button} />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;
