import ToasterProvider, {useToaster, DEFAULT_MAX_SHOWN, DEFAULT_DURATION, type Variant, type ToasterProps} from '.';
import {type Meta} from '@storybook/react';

const meta: Meta = {
  title: 'Toaster',
  args: {
    maxShown: DEFAULT_MAX_SHOWN,
    duration: DEFAULT_DURATION,
  },
};

export default meta;

function Component({variant}: {variant?: Variant}) {
  const {enqueue} = useToaster();

  const handleClick = () => enqueue(self.crypto.randomUUID(), {variant});

  return (
    <button className="button" onClick={handleClick}>
      Enqueue {variant ?? 'default'}
    </button>
  );
}

export function Toaster(props: ToasterProps) {
  return (
    <ToasterProvider {...props}>
      <ul className="button-list">
        <li>
          <Component />
        </li>
        <li>
          <Component variant="failure" />
        </li>
        <li>
          <Component variant="warning" />
        </li>
        <li>
          <Component variant="success" />
        </li>
        <li>
          <Component variant="info" />
        </li>
      </ul>
    </ToasterProvider>
  );
}
