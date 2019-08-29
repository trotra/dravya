import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import styled from '@emotion/styled';
export var StyledIcon = styled.i(function (props) {
  return _objectSpread({
    color: props.color,
    fontSize: props.size ? "".concat(props.size, "px") : props.theme.fontSize["default"],
    cursor: props.onClick && !props.disabled ? 'pointer' : 'default',
    opacity: props.disabled ? 0.5 : 1
  }, props.onClick && !props.disabled && {
    '&:hover': {
      opacity: 0.7
    }
  });
});