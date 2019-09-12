import styled from '@emotion/styled';
import List from '../List';

const BORDER_POSITION = {
  row: invert => (invert ? 'borderTop' : 'borderBottom'),
  column: invert => (invert ? 'borderLeft' : 'borderRight')
};

export const Tabs = styled('div')(props => ({
  display: 'flex',
  flexDirection: props.orientation === 'row' && 'column'
}));

export const TabList = styled(List)(props => {
  const borderPosition = BORDER_POSITION[props.orientation](props.invertBorder);

  return {
    [`${borderPosition}`]: `1px solid ${props.theme.colors.border}`
  };
});

export const Tab = styled(List.Item)(props => {
  const borderPosition = BORDER_POSITION[props.orientation](props.invertBorder);
  const color = props.isActive ? props.theme.colors.primary : 'transparent';

  return {
    [`${borderPosition}`]: `2px solid ${color}`
  };
});

export const Content = styled.div({
  width: '100%',
  padding: '12px 16px'
});
