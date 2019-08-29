import { useEffect, useRef } from 'react';
export default function useEffectAfterMount(callback, dependencies) {
  var justMounted = useRef(true);
  useEffect(function () {
    if (!justMounted.current) {
      callback();
    }

    justMounted.current = false;
  }, dependencies);
}