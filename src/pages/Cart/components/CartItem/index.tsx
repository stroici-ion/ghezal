import React from 'react';

import styles from './styles.module.scss';
import { TCartItem } from '../../../../redux/cart/types';
import { numberToPrice } from '../../../../utils/numbers';
import Counter from '../Counter';
import { useAppDispatch } from '../../../../redux';
import { setCartItem } from '../../../../redux/cart/slice';

interface CartItemProps {
  cartItem: TCartItem;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const dispatch = useAppDispatch();

  const handleChangeCount = (value: number) => {
    dispatch(setCartItem({ ...cartItem, count: value }));
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__top}>
        <div className={styles.root__image} />
        <div className={styles.root__info}>
          <h2 className={styles.root__title}>{}</h2>
          <label className={styles.root__price}>{numberToPrice(cartItem.product.price)}</label>
        </div>
        <Counter value={cartItem.count} onChange={handleChangeCount}></Counter>
      </div>
    </div>
  );
};

export default CartItem;
