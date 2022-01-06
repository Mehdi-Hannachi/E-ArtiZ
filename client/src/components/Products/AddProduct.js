import React from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Input,
} from "reactstrap";

// core components

function AddProduct() {
  const [modal1, setModal1] = React.useState(false);
  return (
    <>
      <div>
        <Container>
          
          
            
              <h4>Modal</h4>
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
              >
                Add Product
              </Button>
             
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Modal title</h4>
                </div>
                <ModalBody>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
              
                </ModalBody>
                <div className="modal-footer">
                  <Button color="default" type="button">
                    Add Product
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
             
          
        </Container>
      </div>
    </>
  );
}

export default AddProduct;
