import styled from '@emotion/styled';
import { disabledCss } from '../../utils/commonStyles';

export const Table = styled.table({
  width: '100%',
  textAlign: 'left',
  borderCollapse: 'collapse'
});

const Cell = styled.div(
  {
    padding: '16px',
    fontSize: '14px'
  },
  props => ({
    borderBottom: `1px solid ${props.theme.colors.border}`,
    textAlign: props.align
  })
);

export const TH = styled(Cell)({
  backgroundColor: '#fafafa'
});

export const TD = styled(Cell)({});

export const Row = styled.tr(
  {
    '&:hover': {
      '&>td': {
        backgroundColor: '#e6f7ff'
      }
    }
  },
  props => ({
    ...(props.disabled && disabledCss)
  })
);
