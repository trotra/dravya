import styled from '@emotion/styled';
import { hexToRgba } from '../../utils/hexToRgba';
import { fadeIn, fadeOut } from '../../utils/animation';
import Animation from '../Animation';

export const StyledAlert = styled(Animation)(
  {
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0
    }
  },
  ({ theme, type, show }) => {
    const color = theme.colors[type];

    return {
      border: `1px solid ${color}`,
      backgroundColor: `${hexToRgba(color, 0.45)}`,
      animation: `${show ? fadeIn : fadeOut} 0.2s ease-out`
    };
  }
);

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.div(({ theme, withDescription }) => ({
  color: theme.colors.font,
  fontSize: theme.fontSize[withDescription ? 'large' : 'default']
}));

export const Description = styled.div(
  {
    marginTop: 10
  },
  ({ theme }) => ({
    color: theme.colors.font,
    fontSize: theme.fontSize.default
  })
);
