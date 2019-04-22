/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange();
    this.setState({
      checked: e.target.checked
    });
  }

  render() {
    const { checked, color, size, title, theme, id } = this.props;

    return (
      <label
        className={`rc-radio-container ${size}-rc-radio-container rc-radio-${theme}-text rc-radio-${color}-back`}
        htmlFor={`def-rc-radio-${id}`}
      >
        {title}
        <input
          type="radio"
          className="rc-radio-button"
          id={`def-rc-radio-${id}`}
          defaultChecked={checked}
          onChange={this.handleChange}
          name="radio"
        />
        <span className={`rc-checkmark ${size}-rc-checkmark`} />
      </label>
    );
  }
}

RadioButton.defaultProps = {
  checked: false,
  color: 'blue',
  onChange: null,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: 'dark',
  title: ''
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['dark', 'light']),
  title: PropTypes.string
};

export default RadioButton;
