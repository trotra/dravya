export function getPx(scale, size) {
  return size.map(v => `${v * scale}px`).join(' ');
}
