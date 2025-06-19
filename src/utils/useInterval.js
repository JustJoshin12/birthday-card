import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const saved = useRef();

  // Remember the latest callback.
  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) return;

    function tick() {
      saved.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
} 