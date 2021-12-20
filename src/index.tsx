import { useState, useEffect } from 'react';

type StateProp = string | number | null | undefined | object | [];

interface ISathaObject {
  get: () => StateProp;
  subscribe: (arg0: (state: any) => void) => string;
  unsubscribe: (arg0: any) => void;
  set: (state: StateProp) => StateProp;
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