import styled from '@emotion/styled';

export const StyledIcon = styled.i(props => ({
  color: props.color,
  fontSize: props.size ? `${props.size}px` : props.theme.fontSize.default,
  cursor: props.onClick && !props.disabled ? 'pointer' : 'default',
  opacity: props.disabled ? 0.5 : 1,
  ...(props.onClick &&
    !props.disabled && {
      '&:hover': {
        opacity: 0.7
      }
    })
}));
