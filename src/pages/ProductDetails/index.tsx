import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IoArrowBack } from 'react-icons/io5';

import styles from './styles.module.scss';
import PrimaryButton from '../../components/PrimaryButton';
import { useSelector } from 'react-redux';
import { selectSelectedCartItem } from '../../redux/cart/selectors';
import ProductImages from './components/ProductImages';
import ReadMoreText from '../../components/ReadMoreText';

const ProductDetails = () => {
  const navigate = useNavigate();
  const selectedCartItem = useSelector(selectSelectedCartItem);

  if (!selectedCartItem) return <></>;

  const { product } = selectedCartItem;

  return (
    <div className={styles.root}>
      <PrimaryButton title="Înapoi" icon={<IoArrowBack />} onClick={() => navigate(-1)} />
      <h1 className={styles.root__title}>{product.title}</h1>
      <ProductImages product={product} />
      <div className={styles.root__details}>
        <ReadMoreText
          text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis nisi fuga iusto impedit
          cupiditate nulla error reiciendis! Ducimus deserunt quo atque saepe sint officiis optio nobis accusamus
          necessitatibus in."
        />
      </div>
    </div>
  );
};

export default ProductDetails;
