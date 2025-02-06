"use client";
import { useCallback, useRef, useEffect } from "react";

const useAnimationFrame = (enabled: boolean, callback: () => void) => {
  // Initialize the ref with null and update the type to include null.
  const requestRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null,
  );

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [enabled, animate]);
};

export default useAnimationFrame;
