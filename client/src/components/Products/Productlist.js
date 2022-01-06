/* import React from "react";
import Productcard from "./Productcard";

const Productlist = ({ products, textFilter }) => {
  return (
    <div className="products">
      {products
        .filter((product) =>
          product.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((product) => (
          <Productcard product={product} key={product.id} />
        ))}
    </div>
  );
};

export default Productlist; */

import ExamplesNavbar from "components/NavBar/ExamplesNavbar";
import React from "react";

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

import {data} from "./data"
// core components

function Productlist() {
  return (
    <>
    <ExamplesNavbar/>
      <div className="section section-tabs">
        <Container>


          {data.map(el=> <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
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
                      <img
                        alt="..."
                        width="200"
                        src={el.photo}
                      ></img>
                    </div>

                    <TabPane>
                      <p>
                      {el.description}
                      </p>
                      <h1></h1>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row> )}
          
         
        </Container>
      </div>
    </>
  );
}

export default Productlist;
