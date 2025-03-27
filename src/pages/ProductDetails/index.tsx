import React from "react";
import { useNavigate } from "react-router-dom";

import { IoArrowBack, IoStar } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

import styles from "./styles.module.scss";
import PrimaryButton from "../../components/PrimaryButton";
import { useSelector } from "react-redux";
import { selectSelectedCartItem } from "../../redux/cart/selectors";
import ProductImages from "./components/ProductImages";
import ReadMoreText from "../../components/ReadMoreText";
import Label from "./components/Label";
import ColorSelection from "./components/ColorSelection";

const ProductDetails = () => {
  const navigate = useNavigate();
  const selectedCartItem = useSelector(selectSelectedCartItem);

  if (!selectedCartItem) return <></>;

  const { product, selectedColor } = selectedCartItem;

  return (
    <div className={styles.root}>
      <PrimaryButton
        title="Înapoi"
        icon={<IoArrowBack />}
        onClick={() => navigate(-1)}
      />
      <h1 className={styles.root__title}>{product.title}</h1>
      <ProductImages product={product} />
      <div className={styles.root__details}>
        <div className={styles.root__row}>
          <Label
            icon={<IoStar />}
            title={`${4.8} Reiting`}
            className={styles.root__label}
          />
          <Label title={`${3.2}k+ Recenzii`} className={styles.root__label} />
          <Label title={`${13}k Vanzari`} className={styles.root__label} />
        </div>

        <ReadMoreText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis nisi fuga iusto impedit
          cupiditate nulla error reiciendis! Ducimus deserunt quo atque saepe sint officiis optio nobis accusamus
          necessitatibus in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis nisi fuga iusto impedit
          cupiditate nulla error reiciendis! Ducimus deserunt quo atque saepe sint officiis optio nobis accusamus
          necessitatibus in."
        />
        {product.colors && (
          <ColorSelection
            selectedColor={selectedColor}
            colors={product.colors}
          />
        )}
        <div className={styles.root__bottom}>
          <label className={styles.root__price}>{product.price} lei</label>

          <PrimaryButton
            icon={<LuShoppingCart />}
            title="Adaugă în coș"
            onClick={() => {}}
            className={styles.root__button}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
