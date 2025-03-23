import React from 'react';

import styles from './styles.module.scss';
import Product from '../../components/Product';
import CardList from '../../components/CardList';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/products/selectors';
import { Outlet } from 'react-router-dom';
import { selectSelectedCartItem } from '../../redux/cart/selectors';
import classNames from 'classnames';

const Home = () => {
  const products = useSelector(selectProducts);
  const selectedCartItem = useSelector(selectSelectedCartItem);

  return (
    <>
      <Outlet />
      <div className={classNames(styles.root, selectedCartItem && styles.disabled)}>
        <CardList>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </CardList>
      </div>
    </>
  );
};

export default Home;
