import {createPortal} from 'react-dom';
import ToastEffect, {type ToastEffectProps} from './ToastEffect';
import {css} from 'goober';

const portalClassName = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: '0.5rem',
  /** Portal positioning */
  position: 'absolute',
  left: 0,
  bottom: 0,
});

export type PortalProps = {
  container: HTMLElement;
  maxShown: number;
  stack: ToastEffectProps[];
};

export default function Portal({stack, container, maxShown}: PortalProps) {
  if (!stack.length) {
    return null;
  }

  const list = stack.slice(0, maxShown).map((props) => <ToastEffect key={props.id} {...props} />);

  return createPortal(
    <div role="presentation" className={portalClassName}>
      {list}
    </div>,
    container,
  );
}
