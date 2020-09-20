import React from "react";
import Alert from '@material-ui/lab/Alert';
 // eslint-disable-next-line
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import Modal from "react-bootstrap/Modal";
import ReactGoogleMaps from './ReactGoogleMaps';

const ModalMaps = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
   // eslint-disable-next-line
  const [title, setTitle] = React.useState("Transitioning...");

   const onClick = (event) => {
      showModal();
   }

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    //setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
      <button style={props.style}>
        <strong><span type="submit" onClick={onClick}>Google Mapa</span></strong>
      </button>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header style={{background: '#2196f3'}} >
            <Alert variant="filled" style={{background: '#2196f3'}}>{props.title}</Alert>
        </Modal.Header>
        <Modal.Body style={{ height: '550px', width: '600px'}}>
        <ReactGoogleMaps />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMaps;