import styled from '@emotion/styled';
import { hexToRgba } from '../../utils/hexToRgba';
import { fadeIn, fadeOut } from '../../utils/animation';
import Animation from '../Animation';

export const Mask = styled(Animation)(
  {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000
  },
  props => ({
    backgroundColor: hexToRgba(props.theme.colors.mask, 0.45),
    animation: `${props.show ? fadeIn : fadeOut} 0.2s ease-out`
  })
);
