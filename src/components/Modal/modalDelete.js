import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDelete = props => {
  return (
    <Fragment>
      <Modal
        {...props}
        show={props.open}
        onHide={props.hide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Apakah anda yakin ingin menghpus data ini........</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.deleteData}>Close</Button>
          <Button onClick={props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalDelete;
