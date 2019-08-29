import styled from '@emotion/styled';
import hexToRgba from '../../utils/hexToRgba';

export const StyledAlert = styled.div(
  {
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0
    }
  },
  ({ theme, type }) => {
    const color = theme.colors[type];

    return {
      border: `1px solid ${color}`,
      backgroundColor: `${hexToRgba(color, 0.45)}`
    };
  }
);

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.div`
  color: #000;
  font-size: ${({ theme, withDescription }) => theme.fontSize[withDescription ? 'large' : 'default']};
`;

export const Description = styled.div`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.8);
  font-size: ${({ theme }) => theme.fontSize.default};
`;
