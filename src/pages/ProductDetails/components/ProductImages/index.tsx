import React from 'react';

import styles from './styles.module.scss';
import { TProduct } from '../../../../redux/products/types';

interface ProductImagesProps {
  product: TProduct;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  return (
    <div>
      <div className={styles.root} style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
    </div>
  );
};

export default ProductImages;
