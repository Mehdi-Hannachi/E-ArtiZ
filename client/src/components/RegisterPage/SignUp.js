import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
import { userRegiter } from "components/JS/actions/userActions";

// core components

const SignUp = () => {
  const history = useHistory();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();

    const newUser = {
      fullName,
      email,
      adress,
      password,
    };

    if (fullName === "" || email === "" || adress === "" || password === "")
      return alert("Missing some inputs");
    dispatch(userRegiter(newUser));

    history.push("/login-page");

    setFullName("");
    setAdress("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" + require("assets/img/bg11.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup className={"no-border"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full name..."
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={"no-border"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email..."
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={"no-border"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Adress ...."
                      type="text"
                      value={adress}
                      onChange={(e) => setAdress(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup className={"no-border"}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password..."
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    size="lg"
                    onClick={(e) => addUser(e)}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
