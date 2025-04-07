import React from 'react';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface ColorSelectionProps {
  selectedColor: string;
  colors: string[];
  onSelect?: (selectedColor: string) => void;
  className?: string;
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ className, selectedColor, colors, onSelect }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h2 className={styles.root__title}>Alege culoarea</h2>
      <div className={styles.root__colors}>
        {colors.map((color) => (
          <button
            key={color}
            className={classNames(styles.root__colorButton, color === selectedColor && styles.active)}
            onClick={() => onSelect?.(color)}
          >
            <div style={{ backgroundColor: color }} className={styles.root__color} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
