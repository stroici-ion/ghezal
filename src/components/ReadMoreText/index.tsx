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
    <div>
      <p
        ref={textRef}
        className={classNames(styles.text, className)}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: isExpaned ? maxDisplayedRows : displayedRows,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {mentionedUser?.id && <span className={styles.text__mentionedUser}>{mentionedUser.username} </span>}
        {text}
      </p>
      <div className={styles.text__row}>
        {isOverflowing ? (
          <>
            <button className={styles.text__button} onClick={onClickSeeMore}>
              {isExpaned ? 'Hide' : 'See more'}
            </button>
            {isExpaned && (
              <button onClick={showAll} className={classNames(styles.text__button, styles.text__showAll)}>
                Show all
              </button>
            )}
          </>
        ) : (
          <>
            {isExpaned && (
              <button onClick={onClickSeeMore} className={styles.text__button}>
                Hide
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExtensibleText;
