import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex align-items-center">
      <Button className="question mr-2" variant="primary" onClick={handleShow}>
        ?
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is this WEB about?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        This is an INFLATION CALCULATOR. It can be used to measure the purchasing power of a currency over time
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InfoModal;
