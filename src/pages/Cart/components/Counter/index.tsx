import React from 'react';

import styles from './styles.module.scss';
import { numberToPrice } from '../../../../utils/numbers';
import PrimaryButton from '../../../../components/PrimaryButton';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      <PrimaryButton title="-" onClick={() => onChange(value - 1)} />
      <PrimaryButton title={value.toString()} onClick={() => {}} />
      <PrimaryButton title="+" onClick={() => onChange(value + 1)} />
    </div>
  );
};

export default Counter;
