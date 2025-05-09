import React, { JSX } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import { GoHeart } from 'react-icons/go';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import PrimaryButton from '../PrimaryButton';
import { TProduct } from '../../redux/products/types';
import { useAppDispatch } from '../../redux';
import { selectProduct } from '../../redux/cart/slice';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/selectors';

interface ProductProps {
  product: TProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(selectProduct(product));
    navigate(`/${product.id}`);
  };

  const isInCart = cartItems.map((cI) => cI.product.id).includes(product.id);

  return (
    <div className={styles.root}>
      <PrimaryButton icon={<GoHeart />} size="sm" onClick={() => {}} className={styles.root__favoriteButton} />
      <div className={styles.root__imageContainer}>
        <div className={styles.root__image} style={{ backgroundImage: `url(${product.imageUrls[0]})` }} />
      </div>
      <div className={styles.root__info}>
        <h2 className={styles.root__title}>
          <a href="#" aria-label="title">
            {product.title}
          </a>
        </h2>
        <label className={styles.root__price}>{product.price} lei</label>
      </div>
      <div className={styles.root__actions}>
        <PrimaryButton
          icon={<LuShoppingCart />}
          title={isInCart ? 'În coș' : 'Adaugă în coș'}
          size="sm"
          onClick={handleAddToCart}
          className={classNames(styles.root__cartButton, isInCart && styles.active)}
        />
      </div>
    </div>
  );
};

export default Product;
