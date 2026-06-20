"use client";

import { useEffect, useRef, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const initialRef = useRef(initial);
  const [value, setValue] = useState<T>(initial);
  const eventName = `local-storage:${key}`;

  useEffect(() => {
    const hydrate = () => {
      try {
        const stored = window.localStorage.getItem(key);
        setValue(stored ? (JSON.parse(stored) as T) : initialRef.current);
      } catch {
        window.localStorage.removeItem(key);
        setValue(initialRef.current);
      }
    };

    hydrate();
    window.addEventListener(eventName, hydrate);
    window.addEventListener("storage", hydrate);
    return () => {
      window.removeEventListener(eventName, hydrate);
      window.removeEventListener("storage", hydrate);
    };
  }, [eventName, key]);

  const save = (next: T) => {
    window.localStorage.setItem(key, JSON.stringify(next));
    setValue(next);
    window.dispatchEvent(new Event(eventName));
  };

  return [value, save] as const;
}
