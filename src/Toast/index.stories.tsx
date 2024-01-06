import Component from '.';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => (
      <div className="react-toaster">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Basic single-line snackbar.',
  },
};

export const VariantFailure: Story = {
  args: {
    message: 'Something went wrong.',
    variant: 'failure',
    onClose: action('onClose'),
  },
};

export const VariantWarning: Story = {
  args: {
    message: 'Be careful over there.',
    variant: 'warning',
    onClose: action('onClose'),
  },
};

export const VariantSuccess: Story = {
  args: {
    message: 'Successfully completed.',
    variant: 'success',
    onClose: action('onClose'),
  },
};

export const VariantInfo: Story = {
  args: {
    message: 'There is something valuable.',
    variant: 'info',
    onClose: action('onClose'),
  },
};

export const SingleLineWithClose: Story = {
  args: {
    message: 'Single-line snackbar with close affordance.',
    onClose: action('onClose'),
  },
};

export const SingleLineWithAction: Story = {
  args: {
    message: 'Single-line snackbar with action.',
    action: <button>Action</button>,
  },
};

export const SingleLineWithActionAndClose: Story = {
  args: {
    message: 'Single-line snackbar with action.',
    action: <button>Action</button>,
    onClose: action('onClose'),
  },
};

export const TwoLineWithoutAction: Story = {
  args: {
    message: (
      <>
        <p>Two-line snackbar</p>
        <p>without action</p>
      </>
    ),
    action: <button>Action</button>,
    onClose: action('onClose'),
  },
};
