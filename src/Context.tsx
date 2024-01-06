import {useContext} from 'react';
import {createContext} from 'react';
import type {Message, ToastOptions} from './useStack';

type Context = {
  enqueue: (message: Message, options?: ToastOptions) => string;
  dequeue: (id: string) => void;
};

const Context = createContext<Context | undefined>(undefined);

export function useToaster() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('The hook must be used within a ToasterProvider context.', {cause: {context}});
  }
  return context;
}

export default Context;
