/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from '../components/RadioButton';

storiesOf('RadioButton', module)
  .add('checked', () => (
    <RadioButton title="Checked" theme="dark" color="red" checked />
  ))
  .add('group', () => (
    <React.Fragment>
    <RadioButton title="1" id="1" theme="dark" size="small" />
    <RadioButton title="2" id="2" theme="dark" size="small" />
    <RadioButton title="3" id="3" theme="dark" size="small" />
    </React.Fragment>
  ))
  .add('with color props', () => (
    <RadioButton title="Purple" theme="dark" color="purple" />
  ))
  .add('with onChange props', () => (
    <RadioButton title="Option 1" theme="dark" onChange={()=>{console.log('clicked')}} />
  ))
  .add('with size props', () => (
    <RadioButton title="Small" theme="dark" size="small" />
  ))
  .add('with theme props', () => <RadioButton title="Dark" theme="dark" />);
