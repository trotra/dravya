export default function(hex, opacity = 1) {
  if (!/^#(?:[0-9a-f]{3}){1,2}$/i.test(hex)) {
    throw new Error('Invalid color');
  }

  hex = hex.replace('#', '');

  if (hex && hex.length === 3) {
    hex += hex;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
}
