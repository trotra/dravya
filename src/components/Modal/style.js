import styled from '@emotion/styled';
import { hexToRgba } from '../../utils/hexToRgba';
import { moveDown, moveUp } from '../../utils/animation';
import Animation from '../Animation';

export const Wrapper = styled(Animation)(
  {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center'
  },
  props => ({
    alignItems: props.centered ? 'center' : 'flex-start'
  })
);

export const Modal = styled.div(
  {
    position: 'relative',
    width: '520px',
    maxWidth: '100%',
    background: '#fff',
    margin: '0 16px',
    borderRadius: '4px'
  },
  props => ({
    top: !props.centered && '100px',
    boxShadow: `0 4px 12px ${hexToRgba(props.theme.colors.mask, 0.15)}`,
    animation: `${props.show ? moveDown : moveUp} 0.2s ease-out`
  })
);

export const Header = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px'
  },
  props => ({
    borderBottom: `1px solid ${props.theme.colors.border}`
  })
);

export const Title = styled.h3(
  {
    margin: 0,
    fontWeight: 500
  },
  props => ({
    color: props.theme.colors.font
  })
);

export const Body = styled.div({
  padding: 24
});

export const Footer = styled.div(
  {
    display: 'flex',
    padding: '10px 16px'
  },
  props => ({
    borderTop: `1px solid ${props.theme.colors.border}`,
    justifyContent: props.align === 'start' ? 'flex-start' : 'flex-end'
  })
);
