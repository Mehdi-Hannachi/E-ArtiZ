import { deleteProduct } from "components/JS/actions/productsActions";
import { getAllProducts } from "components/JS/actions/productsActions";
import ExamplesNavbar from "components/NavBar/ExamplesNavbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import AddProduct from "./AddProduct";

// core components

function Productlist() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const allProducts = useSelector((state) => state.productReducer.allProducts);
  const user = useSelector((state) => state.userReducer.user);
  console.log("ssss", user);

  return (
    <>
      <ExamplesNavbar />
      <div className="section section-tabs">
        <Container>
          <aside style={{ position: "fixed" }}>
            <AddProduct />
          </aside>

          {allProducts &&
            allProducts.map((el) => (
              <Row>
                <Col className="ml-auto mr-auto" md="10" xl="6">
                  <Card>
                    <CardHeader>
                      <Nav
                        className="justify-content-center"
                        role="tablist"
                        tabs
                      >
                        <NavItem
                          onClick={() =>  {
                            dispatch(deleteProduct(user._id, el._id) ) ;
                            dispatch(getAllProducts())
                          }
                            
                          }
                        >
                          <NavLink>
                            <i className="now-ui-icons objects_umbrella-13"></i>
                            Delete
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink>
                            <i className="now-ui-icons ui-2_settings-90"></i>
                            Edit
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </CardHeader>
                    <CardBody>
                      <TabContent className="text-center">
                        <div className="hero-images-container">
                          <img alt="..." width="200" src={el.photo}></img>
                        </div>

                        <TabPane>
                          <p>{el.description}</p>
                          <h1>
                            {el.price}
                            <span>DT</span>
                          </h1>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))}
        </Container>
      </div>
    </>
  );
}

export default Productlist;
