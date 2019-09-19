import styled from '@emotion/styled';
import { disabledCss } from '../../utils/commonStyles';

export const StyledIcon = styled.i(props => ({
  color: props.color || `${props.theme.colors.font}`,
  fontSize: props.size ? `${props.size}px` : props.theme.fontSize.default,
  ...(props.disabled && disabledCss),
  ...(props.onClick && {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7
    }
  })
}));
