import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  color: rgba(0, 0, 0, 0.8);\n  font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #000;\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from '@emotion/styled';
import hexToRgba from '../../utils/hexToRgba';
export var StyledAlert = styled.div({
  padding: 10,
  borderRadius: 4,
  marginBottom: 10,
  '&:last-child': {
    marginBottom: 0
  }
}, function (_ref) {
  var theme = _ref.theme,
      type = _ref.type;
  var color = theme.colors[type];
  return {
    border: "1px solid ".concat(color),
    backgroundColor: "".concat(hexToRgba(color, 0.45))
  };
});
export var Title = styled.div(_templateObject());
export var Message = styled.div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      withDescription = _ref2.withDescription;
  return theme.fontSize[withDescription ? 'large' : 'default'];
});
export var Description = styled.div(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSize["default"];
});