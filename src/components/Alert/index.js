import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useEffectAfterMount from '../../utils/useEffectAfterMount';
import withTheme from '../../utils/withTheme';
import Icon from '../Icon';
import { StyledAlert, Title, Message, Description } from './style';

function Alert({ message, description, type, closable, onClose }) {
  const [hide, setHide] = useState(false);

  useEffectAfterMount(onClose, [hide]);

  if (hide) {
    return null;
  }

  return (
    <StyledAlert type={type} data-testid="alert">
      <Title>
        <Message withDescription={!!description} data-testid="message">
          {message}
        </Message>
        {closable && <Icon name="remove" onClick={() => setHide(true)} data-testid="close" />}
      </Title>
      {description && <Description data-testid="description">{description}</Description>}
    </StyledAlert>
  );
}

Alert.defaultProps = {
  type: 'info',
  closable: false,
  onClose: () => {}
};

Alert.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  closable: PropTypes.bool,
  onClose: PropTypes.func
};

export default withTheme(Alert);
