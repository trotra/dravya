import styled from '@emotion/styled';
import { getPx } from '../../utils/getPixels';
import { hexToRgba } from '../../utils/hexToRgba';
import { disabledCss } from '../../utils/commonStyles';

const VARIANT_STYLE = {
  filled(backgroundColor) {
    return {
      backgroundColor,
      color: '#fff',
      '&:hover': {
        backgroundColor: hexToRgba(backgroundColor, 0.75)
      }
    };
  },
  outline(color) {
    return {
      color,
      backgroundColor: '#fff',
      '&:hover': {
        color: hexToRgba(color, 0.75)
      }
    };
  },
  dashed(color) {
    return {
      ...this.outline(color),
      borderStyle: 'dashed'
    };
  },
  link(color) {
    return {
      ...this.outline(color),
      border: 'none'
    };
  }
};

const EDGE = {
  blunt: '4px',
  sharp: '0px',
  capsular: '500px',
  circle: '100%'
};

export const Button = styled.button(
  {
    marginRight: 10,
    boxSizing: 'border-box',
    cursor: 'pointer',
    border: '1px solid',
    transition: 'background-color 0.2s ease-out',
    '&:last-child': {
      marginRight: 0
    },
    '&:focus': {
      outline: 'none'
    }
  },
  ({ theme, type, size, disabled, block, shape }) => ({
    width: block && '100%',
    padding: getPx(theme.scale, theme.sizes[size]),
    fontSize: theme.fontSize[size],
    borderRadius: EDGE[shape],
    ...VARIANT_STYLE[type](theme.colors.primary),
    ...(disabled && disabledCss)
  })
);

export const Group = styled.div({
  display: 'inline-flex',
  overflow: 'hidden',
  [Button]: {
    marginRight: 0,
    borderRadius: 0,
    borderLeft: 0,
    '&:first-child': {
      borderLeft: '1px solid',
      borderRadius: '4px 0 0 4px'
    },
    '&:last-child': {
      borderRadius: '0 4px 4px 0'
    }
  }
});
