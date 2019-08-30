import { useEffect, useRef } from 'react';

export default function useEffectAfterMount(callback, dependencies) {
  let justMounted = useRef(true);

  useEffect(() => {
    if (!justMounted.current) {
      callback();
    }
    justMounted.current = false;
  }, dependencies);
}
