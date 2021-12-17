import { useState, useEffect } from 'react';

interface ISathaObject {
  get: () => any;
  subscribe: (arg0: (state: any) => void) => any;
  unsubscribe: (arg0: any) => void;
}

export const useSatha = (sathaObject: ISathaObject) => {
  const [value, setValue] = useState(sathaObject.get());

  useEffect(() => {
    const subscribe = sathaObject.subscribe((state: any) => {
      setValue(state);

      console.log(state);

    })

    return () => {
      sathaObject.unsubscribe(subscribe);
    };
  }, [value, setValue]);

  return value;
};