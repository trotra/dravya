export default function (hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!/^#(?:[0-9a-f]{3}){1,2}$/i.test(hex)) {
    throw new Error('Invalid color');
  }

  hex = hex.replace('#', '');

  if (hex && hex.length == 3) {
    hex += hex;
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacity, ")");
}