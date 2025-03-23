import { useEffect } from 'react';

const useOnResize = (onResize: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('resize', onResize);
    };
  }, []);
};

export default useOnResize;
