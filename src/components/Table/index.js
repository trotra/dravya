import { withTheme } from '../../hoc/withTheme';
import Table from './table';
import Head from './head';
import HeaderCell from './headerCell';
import Body from './body';
import Row from './row';
import DataCell from './dataCell';

Table.Head = Head;
Table.TH = HeaderCell;
Table.Body = Body;
Table.Row = Row;
Table.TD = DataCell;

export default withTheme(Table);
