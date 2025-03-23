import React, { JSX } from 'react';
import { LuShoppingCart } from 'react-icons/lu';

import styles from './styles.module.scss';
import PrimaryButton from '../PrimaryButton';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/selectors';
import { useNavigate } from 'react-router-dom';
import { CART_ROUTE } from '../../utils/consts';
// import classNames from 'classnames';

interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = ({}) => {
  const navigate = useNavigate();
  const cartItemsCount = useSelector(selectCartItems).length;

  return (
    <div className={styles.root}>
      <PrimaryButton icon={<LuShoppingCart />} onClick={() => navigate(CART_ROUTE)} className={styles.root__button} />
      {cartItemsCount > 0 && <div className={styles.root__indicator}>{cartItemsCount}</div>}
    </div>
  );
};

export default CartButton;
