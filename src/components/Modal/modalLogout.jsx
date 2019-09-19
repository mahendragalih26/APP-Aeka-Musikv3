import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const modalLogout = props => {
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
          <Modal.Title id="contained-modal-title-vcenter">LogOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Apakah anda yakin ingin LogOut ?..</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.logoutData}>
            Logout
          </Button>
          <Button onClick={props.hide}>batal</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default modalLogout;
