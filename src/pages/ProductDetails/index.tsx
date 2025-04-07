import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IoArrowBack, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';

import styles from './styles.module.scss';
import PrimaryButton from '../../components/PrimaryButton';
import { selectSelectedCartItem } from '../../redux/cart/selectors';
import ProductImages from './components/ProductImages';
import ReadMoreText from '../../components/ReadMoreText';
import Label from './components/Label';
import ColorSelection from './components/ColorSelection';
import { useAppDispatch } from '../../redux';
import { addCartItem, setSelectedCartItem } from '../../redux/cart/slice';
import { numberToPrice } from '../../utils/numbers';
import { CART_ROUTE } from '../../utils/consts';

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedCartItem = useSelector(selectSelectedCartItem);

  if (!selectedCartItem) return <></>;

  const { product, selectedColor } = selectedCartItem;

  const handleSelectColor = (selectedColor: string) => {
    dispatch(setSelectedCartItem({ ...selectedCartItem, selectedColor }));
  };

  const handleAddToCart = () => {
    dispatch(addCartItem(selectedCartItem));
    navigate(CART_ROUTE);
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__top}>
        <PrimaryButton title="Înapoi" icon={<IoArrowBack />} onClick={() => navigate(-1)} />
      </div>
      <div className={styles.root__content}>
        <h1 className={styles.root__title}>{product.title}</h1>
        <ProductImages product={product} />
        <div className={styles.root__details}>
          <div className={styles.root__row}>
            <Label icon={<IoStar />} title={`${4.8} Reiting`} />
            <Label title={`${3.2}k+ Recenzii`} />
            <Label title={`${13}k Vanzari`} />
          </div>

          <ReadMoreText
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis nisi fuga iusto impedit
          cupiditate nulla error reiciendis! Ducimus deserunt quo atque saepe sint officiis optio nobis accusamus
          necessitatibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis nisi fuga iusto impedit
          cupiditate nulla error reiciendis! Ducimus deserunt quo atque saepe sint officiis optio nobis accusamus
          necessitatibus in."
          />
          {product.colors && (
            <ColorSelection selectedColor={selectedColor} onSelect={handleSelectColor} colors={product.colors} />
          )}
          <div className={styles.root__bottom}>
            <label className={styles.root__price}>{numberToPrice(product.price)}</label>

            <PrimaryButton
              icon={<LuShoppingCart />}
              title="Adaugă în coș"
              onClick={handleAddToCart}
              className={styles.root__button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
