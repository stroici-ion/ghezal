import React from "react";

import styles from "./styles.module.scss";
import { TProduct } from "../../../../redux/products/types";
import classNames from "classnames";

interface LabelProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
}

const Label: React.FC<LabelProps> = ({ className, icon, title }) => {
  return (
    <label className={classNames(styles.root, className)}>
      {icon && <span className={styles.root__icon}>{icon}</span>}
      {title && title}
    </label>
  );
};

export default Label;
