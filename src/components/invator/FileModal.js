import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

const FileModal = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(event.target.files);
    props.handleFile(fileUploaded);
  };

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
            <span className="bg-primary folder-padding rounded-circle">
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
                onClick={handleClick}
              >
                <span className="upload-padding rounded-circle bg-blues">
                  <i className="fas fa-upload text-primary"></i>
                </span>
                <p className="text-secondary fw-bold mt-3 mb-1">
                  Click to select a folder
                </p>
                <small className="text-muted">
                  Selected folder should contain a folder for each trait with a
                  file for each trait variation
                </small>
                <input
                  type="file"
                  id="hidden-upload"
                  ref={hiddenFileInput}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  webkitdirectory="true"
                  directory="true"
                />
              </Button>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FileModal;
