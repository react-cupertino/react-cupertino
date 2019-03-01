import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import { GRADIENTS } from '../../styles/ColorSchema';
import defaultIcon from './checkmark.svg';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  componentDidMount() {
    const { checked, colorChecked, colorUnchecked } = this.props;

    this.setState(
      {
        checked
      },
      () => {
        /* eslint-disable-next-line */
        if (this.state.checked) {
          this.setState({
            color: GRADIENTS[colorChecked]
          });
        } else {
          this.setState({
            color: GRADIENTS[colorUnchecked]
          });
        }
      }
    );
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
    this.changeColor(e.target.checked);
  }

  handleIconClick() {
    const { checked } = this.state;

    this.setState(
      {
        checked: !checked
      },
      () => {
        /* eslint-disable-next-line */
        this.changeColor(this.state.checked);
      }
    );
  }

  changeColor(checked) {
    const { colorChecked, colorUnchecked } = this.props;
    if (checked) {
      this.setState({
        color: GRADIENTS[colorChecked]
      });
    } else {
      this.setState({
        color: GRADIENTS[colorUnchecked]
      });
    }
  }

  render() {
    const { icon, size } = this.props;
    const { checked, color } = this.state;
    return (
      <span
        className={`rc-checkbox rc-${size}-checkbox`}
        style={{ background: color }}
        onClick={this.handleIconClick}
        onKeyDown={this.handleIconClick}
        tabIndex="0"
        role="checkbox"
        aria-checked={checked}
      >
        <img className="rc-checkbox-icon " src={icon} alt="Checkbox" />
      </span>
    );
  }
}

Checkbox.defaultProps = {
  checked: false,
  colorChecked: 'blue',
  colorUnchecked: 'grey',
  icon: defaultIcon,
  size: 'small'
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  colorChecked: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  colorUnchecked: PropTypes.oneOf([
    'blue',
    'grey',
    'green',
    'orange',
    'pink',
    'purple',
    'red',
    'yellow'
  ]),
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Checkbox;
