import { withTheme } from '../../hoc/withTheme';
import Modal from './modal';
import Header from './header';
import Body from './body';
import Footer from './footer';

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default withTheme(Modal);
