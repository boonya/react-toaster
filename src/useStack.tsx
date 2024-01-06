import {useCallback, useState} from 'react';
import {type ToastEffectProps} from './ToastEffect';

export type StackOptions = {
  duration: number;
};

export type Message = ToastEffectProps['message'];

export type ToastOptions = Omit<ToastEffectProps, 'id' | 'message' | 'duration'>;

export default function useStack({duration}: StackOptions) {
  const [stack, setStack] = useState<ToastEffectProps[]>([]);

  const enqueue = useCallback(
    (message: Message, options?: ToastOptions) => {
      const id = self.crypto.randomUUID();
      setStack((v) => [
        ...v,
        {
          id,
          message,
          duration,
          ...options,
        },
      ]);
      return id;
    },
    [duration],
  );

  const dequeue = useCallback((id: string) => {
    setStack((v) => v.filter((i) => i.id !== id));
  }, []);

  return {
    enqueue,
    dequeue,
    stack,
  };
}
