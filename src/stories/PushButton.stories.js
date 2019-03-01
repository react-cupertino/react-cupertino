/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PushButton from '../components/PushButton';

storiesOf('PushButton', module)
  .add('with color props', () => (
    <PushButton click={action('clicked')} color="pink" title="Pink" />
  ))
  .add('with size props', () => (
    <PushButton click={action('clicked')} size="large" title="Large button" />
  ))
  .add('with custom styles', () => (
    <PushButton
      title="Comic Sans font"
      color="orange"
      style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif', fontSize: '12px' }}
    />
  ));
