import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { logOut } from "components/JS/actions/userActions";

function ExamplesNavbar() {
  const dispatch = useDispatch();
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      {isAuth ? (
        <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
          <Container>
            <UncontrolledDropdown className="button-dropdown">
              <DropdownToggle
                caret
                data-toggle="dropdown"
                id="navbarDropdown"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                <span className="button-bar"></span>
                <span className="button-bar"></span>
                <span className="button-bar"></span>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdown">
                <DropdownItem onClick={(e) => e.preventDefault()}>
                  All Products
                </DropdownItem>
                <DropdownItem to="/profile-page" tag={Link}>
                  Profile
                </DropdownItem>

                <DropdownItem divider></DropdownItem>
                <DropdownItem onClick={(e) => e.preventDefault()}>
                  Contact Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="navbar-translate">
              <NavbarBrand id="navbar-brand">AritZ</NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by SYT. Coded by SYT
              </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>

                <NavItem onClick={() => dispatch(logOut())}>
                  <NavLink>Log Out</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                    Have an issue?
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip"
                  >
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <i className="fab fa-facebook-square"></i>
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                  <UncontrolledTooltip target="#facebook-tooltip">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <i className="fab fa-instagram"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  <UncontrolledTooltip target="#instagram-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand id="navbar-brand">ArtiZ</NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by SYT. Coded by SYT
              </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login-page" tag={Link}>
                    Sign in
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Sign Up
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/creativetimofficial/now-ui-kit-react/issues?ref=creativetim">
                    Have an issue?
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="twitter-tooltip"
                  >
                    <i className="fab fa-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </NavLink>
                  <UncontrolledTooltip target="#twitter-tooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    id="facebook-tooltip"
                  >
                    <i className="fab fa-facebook-square"></i>
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </NavLink>
                  <UncontrolledTooltip target="#facebook-tooltip">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    id="instagram-tooltip"
                  >
                    <i className="fab fa-instagram"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </NavLink>
                  <UncontrolledTooltip target="#instagram-tooltip">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default ExamplesNavbar;
