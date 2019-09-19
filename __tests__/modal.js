import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal, Button } from '../src';

function ModalComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal open={open} onHide={() => setOpen(false)}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Content</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)} data-testid="save">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

test('Should render modal', () => {
  const { getByText, queryByTestId } = render(<ModalComponent />);

  expect(queryByTestId('modal')).not.toBeInTheDocument();
  expect(queryByTestId('mask')).not.toBeInTheDocument();

  fireEvent.click(getByText('Open'));

  expect(queryByTestId('modal')).toBeInTheDocument();
  expect(queryByTestId('mask')).toBeInTheDocument();

  fireEvent.click(getByText('Save'));

  expect(queryByTestId('modal')).not.toBeInTheDocument();
  expect(queryByTestId('mask')).not.toBeInTheDocument();
});
