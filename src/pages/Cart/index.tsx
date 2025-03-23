import React from 'react';
import { useSelector } from 'react-redux';

import CardList from '../../components/CardList';
import CartItem from './components/CartItem';
import { selectCartItems } from '../../redux/cart/selectors';

// import styles from './styles.module.scss';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CardList>
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} cartItem={cartItem} />
      ))}
    </CardList>
  );
};

export default Cart;
