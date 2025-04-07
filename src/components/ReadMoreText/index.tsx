import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';
import useOnResize from '../../hooks/useOnResize';
import { TUser } from '../../redux/user/types';

type CommentTextType = {
  text: string;
  className?: string;
  mentionedUser?: TUser;
  displayedRows?: number;
  maxDisplayedRows?: number;
  showAll?: () => void;
};

const ExtensibleText: React.FC<CommentTextType> = ({
  text,
  mentionedUser,
  className,
  displayedRows = 3,
  maxDisplayedRows = 30,
  showAll,
}) => {
  const [isExpaned, setIsExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const onClickSeeMore = () => {
    if (textRef.current) {
      setIsExpanded(!isExpaned);
    }
  };

  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkTextOverflows = useCallback(() => {
    const element = textRef.current;
    if (element) {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, []);

  useEffect(() => checkTextOverflows, [text, isExpaned, textRef.current]);
  useOnResize(checkTextOverflows);

  return (
    <div className={styles.root}>
      <p
        ref={textRef}
        className={classNames(styles.root__text, className)}
        style={{
          WebkitLineClamp: isExpaned ? maxDisplayedRows : displayedRows,
        }}
      >
        {mentionedUser?.id && <span className={styles.root__mentionedUser}>{mentionedUser.username} </span>}
        {text}
      </p>
      <div className={styles.root__row}>
        {isOverflowing ? (
          <>
            <button className={styles.root__button} onClick={onClickSeeMore}>
              {isExpaned ? 'Ascunde' : 'Mai mult'}
            </button>
            {isExpaned && (
              <button onClick={showAll} className={classNames(styles.root__button, styles.root__showAll)}>
                Show all
              </button>
            )}
          </>
        ) : (
          <>
            {isExpaned && (
              <button onClick={onClickSeeMore} className={styles.root__button}>
                Ascunde
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExtensibleText;
