import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Form/TextField',
  args: {
    onClick: action('clicked'),
    onChange: action('changed'),
    onInput: action('input'),
    onFocus: action('focused'),
    onBlur: action('blurred'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  render: (args) => (
    <TextField
      {...args}
      id="TextField"
      placeholder="sumzap-game"
      variant="large"
    />
  ),
};

export const LargeWithError: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="sumzap-game"
      hasError
      id="TextFieldWithError"
      variant="large"
    />
  ),
};

export const Medium: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="sumzap-game"
      id="TextField"
      variant="medium"
    />
  ),
};

export const MediumWithError: Story = {
  render: (args) => (
    <TextField
      {...args}
      placeholder="sumzap-game"
      hasError
      id="TextFieldWithError"
      variant="medium"
    />
  ),
};
