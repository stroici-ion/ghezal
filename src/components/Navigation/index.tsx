import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';
import PrimaryButton from '../PrimaryButton';
import useSwipe from '../../hooks/useSwipe';
import { KEEP_CONTROLS_ROUTE } from '../../utils/consts';
import { navigationButtons } from './utils';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const [swiping, setSwiping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useSwipe({
    onSwipe: () => {
      if (KEEP_CONTROLS_ROUTE.includes(location.pathname)) return;
      document.body.scroll(0, 10);

      setSwiping(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setSwiping(false);
      }, 1000);
    },
    direction: 'up',
    threshold: 50,
  });

  return (
    <div className={classNames(styles.root, swiping && styles.hidden)}>
      <div className={styles.root__panel}>
        {navigationButtons.map((button) => (
          <PrimaryButton
            key={button.path}
            responsive={false}
            icon={location.pathname === button.path ? button.iconActive : button.icon}
            onClick={() => {
              setSwiping(false);
              navigate(button.path);
            }}
            className={classNames(styles.root__button, location.pathname === button.path && styles.active)}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
