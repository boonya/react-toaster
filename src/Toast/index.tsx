import {HTMLAttributes, forwardRef, useMemo} from 'react';
import CloseIcon from '../CloseIcon';
import {ReactElement} from 'react';
import toastStyles from './styles';

export type Variant = 'failure' | 'warning' | 'success' | 'info';

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  action?: React.ReactNode;
  className?: string;
  message: ReactElement | string | number;
  onClose?: () => void;
  variant?: 'failure' | 'warning' | 'success' | 'info';
};

function createClassName(variant: Variant | undefined, className?: string) {
  return [toastStyles, variant, className]
    .map((v) => v?.trim())
    .filter(Boolean)
    .join(' ');
}

const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const {variant, message, action, onClose, ...restProps} = props;

  const className = useMemo(() => {
    return createClassName(variant, restProps.className);
  }, [restProps.className, variant]);

  return (
    <div ref={ref} role="alert" {...restProps} className={className}>
      <p className="message">{message}</p>
      {action && <div className="action">{action}</div>}
      {onClose && (
        <button type="button" aria-label="Close" onClick={onClose} className="close">
          <CloseIcon />
        </button>
      )}
    </div>
  );
});

Toast.displayName = 'Toast';

export default Toast;
