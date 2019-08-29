import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './style';

function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutProperties(_ref, ["name"]);

  return React.createElement(StyledIcon, _extends({
    className: "glyphicons glyphicons-".concat(name),
    onClick: props.disabled ? null : props.onClick
  }, props));
}

Icon.defaultProps = {
  disabled: false
};
Icon.propTypes = {
  /** glyphicons icon name without "glyphicons-"  */
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
export default Icon;