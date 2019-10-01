import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button } from '../../src';
import info from './info.md';

storiesOf('Modal', module)
  .addParameters({
    component: Modal,
    notes: {
      markdown: info
    }
  })
  .add('default', () => {
    function ModalComponent() {
      const [open, setOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
          <Modal open={open} onHide={() => setOpen(false)}>
            <Modal.Header>Header</Modal.Header>
            <Modal.Body>Content</Modal.Body>
            <Modal.Footer>
              <Button type="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    return <ModalComponent />;
  });
