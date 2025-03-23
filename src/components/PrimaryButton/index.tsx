import React, { JSX } from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface PrimaryButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  title?: string;
  size?: 'sm' | 'lg';
  responsive?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, icon, title, size, responsive = true, className }) => {
  return (
    <button
      className={classNames(
        styles.root,
        responsive && styles.responsive,
        size === 'sm' && styles.small,
        title && styles.hasText,
        className
      )}
      onClick={onClick}
    >
      {icon && icon}
      {title && title}
    </button>
  );
};

export default PrimaryButton;
