import { useState, useEffect } from 'react';

export function useRender(show) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    show && setRender(show);
  }, [show]);

  function onAnimationEnd() {
    !show && setRender(false);
  }

  return { render, onAnimationEnd };
}
