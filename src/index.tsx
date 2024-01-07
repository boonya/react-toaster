'use client';

import useStack from './useStack';
import {PropsWithChildren} from 'react';
import Portal from './Portal';
import Context from './Context';

export const DEFAULT_MAX_SHOWN = 1;
export const DEFAULT_DURATION = 5000;

export {useToaster} from './Context';
export type {Variant} from './Toast';

export type ToasterProps = {
  /**
   * Maximum amount of alerts to be popped up from the stack at the same time.
   *
   * @default 1
   */
  maxShown?: number;
  /**
   * The number of milliseconds to wait until a visible alert closed.
   *
   * @default 5000
   */
  duration?: number;
  /**
   * HTML Node element to target `ReactDOM.createPortal`.
   *
   * @default document.body
   */
  container?: HTMLElement;
};

export default function ToasterProvider({children, ...options}: PropsWithChildren<ToasterProps>) {
  const maxShown = options.maxShown ?? DEFAULT_MAX_SHOWN;
  const duration = options.duration ?? DEFAULT_DURATION;
  const container = options.container ?? document.body;

  const {stack, enqueue, dequeue} = useStack({duration});

  return (
    <Context.Provider value={{dequeue, enqueue}}>
      {children}
      <Portal stack={stack} container={container} maxShown={maxShown} />
    </Context.Provider>
  );
}
