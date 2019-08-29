import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useEffectAfterMount from '../../utils/useEffectAfterMount';
import Icon from '../Icon';
import { StyledAlert, Title, Message, Description } from './style';

function Alert(_ref) {
  var message = _ref.message,
      description = _ref.description,
      type = _ref.type,
      closable = _ref.closable,
      onClose = _ref.onClose;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hide = _useState2[0],
      setHide = _useState2[1];

  useEffectAfterMount(onClose, [hide]);

  if (hide) {
    return null;
  }

  return React.createElement(StyledAlert, {
    type: type
  }, React.createElement(Title, null, React.createElement(Message, {
    withDescription: !!description
  }, message), closable && React.createElement(Icon, {
    name: "remove",
    onClick: function onClick() {
      return setHide(true);
    }
  })), description && React.createElement(Description, null, description));
}

Alert.defaultProps = {
  type: 'info',
  closable: false,
  onClose: function onClose() {}
};
Alert.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  closable: PropTypes.bool,
  onClose: PropTypes.func
};
export default Alert;