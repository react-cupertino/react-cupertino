import React from 'react';
import PropTypes from 'prop-types';
import PushButton from '../PushButton';
import './Alert.css';

function Alert(props) {
  const { children, onClose, show, title } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="rc-alrt-backdrop">
      <div className="rc-alrt">
        {title && <h1 className="rc-alrt-title">{title}</h1>}
        <div className="rc-alrt-content">{children}</div>
        <div className="rc-alrt-footer">
          <PushButton title="OK" color="blue" size="small" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

Alert.defaultProps = {
  onClose: null,
  show: false,
  title: ''
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string
};

export default Alert;
