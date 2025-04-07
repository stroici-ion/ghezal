import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { TProduct } from '../../../../redux/products/types';

interface ProductImagesProps {
  product: TProduct;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  // const [selectedImageUrl, setSelectedImageUrl] = useState(product.imageUrls[0]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageWidth = useRef(0);

  const handleOnScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    imageWidth.current = sliderRef.current.clientWidth;
    const index = Math.round(scrollLeft / imageWidth.current);
    setSelectedImageUrl(index);
  };

  return (
    <div className={styles.root}>
      <div ref={sliderRef} className={styles.root__slider} onScroll={handleOnScroll}>
        {product.imageUrls.map((imageUrl) => (
          <div key={imageUrl} className={styles.root__image} style={{ backgroundImage: `url(${imageUrl})` }} />
        ))}
      </div>
      <div className={styles.root__dots}>
        {product.imageUrls.map((imageUrl, index) => (
          <div key={imageUrl} className={classNames(styles.root__dot, selectedImageUrl === index && styles.active)} />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
