import { useEffect } from 'react';

const useOnResize = (onResize: () => void) => {
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('resize', onResize);
    };
  }, []);
};

export default useOnResize;
