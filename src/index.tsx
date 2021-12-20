import { useState, useEffect } from 'react';

type StateProp = string | number | null | undefined | object | [];

interface ISathaObject {
  get: () => StateProp;
  set: (arg0: (state: StateProp) => void) => void;
  subscribe: (arg0: (state: StateProp) => void) => string;
  reset: () => void;
  unsubscribe: (id: string) => void;
  unsubscribeAll: () => void;
}

export const useSatha = (sathaObject: ISathaObject) => {
  const [value, setValue] = useState(sathaObject.get());

  useEffect(() => {
    const subscribe = sathaObject.subscribe((state: StateProp) => {
      setValue(state);
    })

    return () => {
      sathaObject.unsubscribe(subscribe);
    };
  }, [value, setValue]);

  return [value, sathaObject.set];
};