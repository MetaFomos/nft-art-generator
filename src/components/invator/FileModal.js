import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

const FileModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body className="text-center pt-0">
          <Container className="mt-5">
            <span className="bg-primary px-3 pt-3 pb-2 rounded-circle">
              <i className="far fa-folder-open text-white text-center fs-4"></i>
            </span>
            <h5 className="mt-4">Let's get started.</h5>
            <p className="text-muted p-3">
              Select a folder to import, or just take it for a spin with a demo
              project from{" "}
              <span className="text-primary">Diamond Hands Hotel.</span>
            </p>
            <Button className="text-primary fw-bolder bg-blues border-0 width-100 p-2">
              Try with a demo project →
            </Button>
            <div className="mt-3">
              <Button
                className="bg-white width-100 rounded-3 p-5 border-dash"
                type="file"
              >
                <span className="px-3 pt-3 pb-2 rounded-circle bg-blues">
                  <i class="fas fa-upload text-primary"></i>
                </span>
                <p className="text-secondary fw-bold mt-3 mb-1">
                  Click to select a folder
                </p>
                <small className="text-muted">
                  Selected folder should contain a folder for each trait with a
                  file for each trait variation
                </small>
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FileModal;
