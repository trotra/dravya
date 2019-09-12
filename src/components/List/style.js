import styled from '@emotion/styled';
import { getPx } from '../../utils/getPixels';
import { disabledCss } from '../../utils/commonStyles';

export const List = styled.ul(
  {
    display: 'flex',
    paddingLeft: 0,
    margin: 0,
    listStyleType: 'none'
  },
  props => ({
    flexDirection: props.orientation === 'column' && 'column'
  })
);

export const Item = styled.li(
  {
    cursor: 'pointer'
  },
  ({ theme, isActive, disabled, size }) => ({
    padding: getPx(theme.scale, theme.sizes[size]),
    color: theme.colors[isActive ? 'primary' : 'font'],
    fontSize: theme.fontSize[size],
    ...(disabled && disabledCss),
    '&:hover': {
      color: theme.colors.primary
    }
  })
);
