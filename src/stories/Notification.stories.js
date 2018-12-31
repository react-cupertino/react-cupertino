/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '../components/Notification';

storiesOf('Notification', module)
  .add('with position props', () => (
    <Notification message="New message" position="top-right" />
  ))
  .add('with typo in position props', () => (
    <Notification
      message="Supeeeer looooong message with no sense at all"
      position="typo"
    />
  ))
  .add('with timeout props', () => (
    <Notification
      message="Update available!"
      position="top-left"
      timeout={10000}
    />
  ))
  .add('with dismissLabelColor props', () => (
    <Notification message="Update available!" dismissLabelColor="orange" />
  ))
  .add('with handleClick', () => (
    <Notification message="Update available!" handleClick={action('clicked')} />
  ));
