import React from 'react';

import styles from './styles.module.scss';
import Product from '../../../../components/Product';
import { TCartItem } from '../../../../redux/cart/types';

interface CartItemProps {
  cartItem: TCartItem;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div className={styles.root}>
      <Product product={cartItem.product} />
    </div>
  );
};

export default CartItem;
