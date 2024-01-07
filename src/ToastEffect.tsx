import {useCallback, useEffect, useRef, useState} from 'react';
import {useToaster} from './Context';
import {CSSTransition} from 'react-transition-group';
import Toast, {type ToastProps} from './Toast';
import {css} from 'goober';

export type ToastEffectProps = Omit<ToastProps, 'onClose'> & {
  id: string;
  duration: number;
};

const CLASSNAME_PREFIX = 'opacity';

const opacityClassName = css({
  [`&.${CLASSNAME_PREFIX}-enter`]: {
    opacity: 0,
  },
  [`&.${CLASSNAME_PREFIX}-enter-active`]: {
    opacity: 1,
    transition: 'opacity 200ms',
  },
  [`&.${CLASSNAME_PREFIX}-exit`]: {
    opacity: 1,
  },
  [`&.${CLASSNAME_PREFIX}-exit-active`]: {
    opacity: 0,
    transition: 'opacity 200ms',
  },
});

export default function ToastEffect({id, duration, ...props}: ToastEffectProps) {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const {dequeue} = useToaster();

  const timeout = useRef<NodeJS.Timeout>();

  const hide = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    setShow(true);
    if (!timeout.current && duration) {
      timeout.current = setTimeout(() => {
        hide();
      }, duration);
    }
    return () => {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    };
  }, [duration, hide]);

  return (
    <CSSTransition
      nodeRef={ref}
      unmountOnExit
      classNames={CLASSNAME_PREFIX}
      timeout={200} // Must be the same value as in css transition property
      in={show}
      onExited={() => {
        dequeue(id);
      }}
    >
      <Toast ref={ref} onClose={hide} className={opacityClassName} {...props} />
    </CSSTransition>
  );
}
