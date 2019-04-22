import React from 'react';
import PropTypes from 'prop-types';
import { COLORS } from '../../styles/ColorSchema';
import './Notification.css';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.onClickDismiss = this.onClickDismiss.bind(this);
  }

  componentDidMount() {
    const { timeout, visible } = this.props;
    setTimeout(this.onClickDismiss, timeout);
    this.setState({ visible });
  }

  onClickDismiss() {
    this.setState({ visible: false });
  }

  setPosition() {
    const style = {};
    const offset = '10px';
    const { position } = this.props;
    switch (position) {
      case 'top-left':
        style.top = offset;
        style.left = offset;
        break;

      case 'top-right':
        style.top = offset;
        style.right = offset;
        break;

      case 'bottom-right':
        style.bottom = offset;
        style.right = offset;
        break;

      default:
      case 'bottom-left':
        style.bottom = offset;
        style.left = offset;
        break;
    }
    return style;
  }

  generateMessage() {
    const { message } = this.props;
    let generatedMessage = [];
    let NotificationHeight;
    if (message > 35) {
      let line1Complete = false;
      generatedMessage = message
        .substring(0, 70)
        .split(' ')
        .reduce((arr, msg) => {
          if (arr[0].length < 35 && !line1Complete) {
            if (arr[0].length + msg.length > 35) {
              // when too big for 1 line
              arr.concat(msg);
              line1Complete = true;
            } else {
              // eslint-disable-next-line
              arr[0] = arr[0].length ? `${arr[0]} ${msg}` : msg; // construct line 1
            }
          } else {
            // eslint-disable-next-line
            arr[1] = arr[1].length ? `${arr[1]} ${msg}` : msg; // construct line 2
          }
          return arr;
        }, []);
      NotificationHeight = '68px';
    } else {
      generatedMessage = generatedMessage.concat(message);
      NotificationHeight = '48px';
    }

    // wrap message lines in <p>
    generatedMessage = generatedMessage.map(msg => (
      <p className="rc-notification-message-line" key={msg.id}>
        {msg}
      </p>
    ));

    return { generatedMessage, NotificationHeight };
  }

  handleClick() {
    const { handleClick } = this.props;
    return handleClick
      ? handleClick(this.onClickDismiss)
      : this.onClickDismiss();
  }

  render() {
    const { generatedMessage, NotificationHeight } = this.generateMessage();
    const { dismissLabelColor, dismissLabel } = this.props;
    const { visible } = this.state;
    let style = {
      display: visible ? 'flex' : 'none',
      height: NotificationHeight
    };

    style = Object.assign(style, this.setPosition());

    const dissmissLabelStyle = {
      color: dismissLabelColor
    };

    /* eslint-disable jsx-a11y/label-has-associated-control */
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div className="rc-notification" style={style}>
        <div className="rc-notification-message">{generatedMessage}</div>
        <label
          className="rc-notification-button"
          onClick={this.handleClick}
          style={dissmissLabelStyle}
        >
          {dismissLabel}
        </label>
      </div>
    );
  }
}

Notification.defaultProps = {
  dismissLabel: 'DISMISS',
  visible: true,
  timeout: 5000,
  message: 'NOTIFICATION!',
  position: 'bottom-left',
  dismissLabelColor: 'red'
};

Notification.propTypes = {
  visible: PropTypes.bool,
  timeout: PropTypes.number,
  dismissLabel: PropTypes.string,
  message: PropTypes.string,
  position: PropTypes.oneOf(
    'bottom-left',
    'bottom-right',
    'top-left',
    'top-right'
  ),
  dismissLabelColor: PropTypes.oneOf(Object.keys(COLORS)), // eslint-disable-next-line
  handleClick: PropTypes.func
};

export default Notification;
