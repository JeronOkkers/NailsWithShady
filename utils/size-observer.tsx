"use client";
import React, { useCallback, useEffect, useState } from "react";

interface SizeContextProps {
  innerWidth: number;
}

export const SizeContext = React.createContext<SizeContextProps>({
  innerWidth: 0,
});

interface SizeObserverProps {
  children: React.ReactNode;
}

const SizeObserver: React.FC<SizeObserverProps> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Initialize the innerWidth state immediately.
    handleResize();

    // Define the event listener options including capture: false.
    const eventOptions = { passive: true, capture: false };

    window.addEventListener("resize", handleResize, eventOptions);
    return () => {
      window.removeEventListener("resize", handleResize, eventOptions);
    };
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
