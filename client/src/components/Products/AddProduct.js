import { getAllProducts } from "components/JS/actions/productsActions";
import React from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
import { useDispatch } from "react-redux";
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
  const [photo, setPhoto] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const add = (e) => {
    e.preventDefault();
    const newProduct = {
      photo,
      title,
      price,
      description,
    };

    dispatch(getAllProducts());
  };

  return (
    <>
      <div>
        <Container>
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
              <h4 className="title title-up">
                They are waiting for your product
              </h4>
            </div>
            <ModalBody>
              <FormGroup>
                <Input
                  value={photo}
                  placeholder="Photo"
                  type="text"
                  onChange={(e) => setPhoto(e.target.value)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  value={title}
                  placeholder="Product name"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  value={price}
                  placeholder="Price"
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  value={description}
                  placeholder="Description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
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
