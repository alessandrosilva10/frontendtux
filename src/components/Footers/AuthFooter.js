/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

class Login extends React.Component {
  render() {
    return (
      <>
        <footer className="py-5 footer">
          <Container>
            <h3 className="h3" style={{fontSize: '20px'}}>FrontEnd Deselvolvido Por: </h3>
            <br/>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="2">
                <div className="text-center text-xl-left">
                  {" "}
                  <h4 className="h4" style={{fontSize: '17px'}}>Alessandro Silva</h4>
                  <a
                    className="font-weight-bold ml-1"
                    href="https://github.com/alessandrosilva10"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                      GITHUB
                    </span>
                  </a>
                </div>
              </Col>
              <Col xl="2">
                <div className="text-center text-xl-left">
                  {" "}
                  <h4 className="h4" style={{fontSize: '17px'}}>Danilo Colavite </h4>
                  <a
                    className="font-weight-bold ml-1"
                    href="https://github.com/dcolavite"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                      GITHUB
                    </span>
                  </a>
                </div>
              </Col>
              <Col xl="2">
                <div className="text-center text-xl-left">
                  {" "}
                  <h4 className="h4" style={{fontSize: '17px'}}>João Guilherme </h4>
                  <a
                    className="font-weight-bold ml-1"
                    href="https://github.com/joao-fernandes-99"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                      GITHUB
                    </span>
                  </a>
                </div>
              </Col>
              <Col xl="2">
                <div className="text-center text-xl-left">
                  {" "}
                  <h4 className="h4" style={{fontSize: '17px'}}>Rafael Perbeline </h4>
                  <a
                    className="font-weight-bold ml-1"
                    href="https://github.com/RafaelPerbelineSupreme"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src={require("assets/img/icons/common/github.svg")}
                      />
                      GITHUB
                    </span>
                  </a>
                </div>
              </Col>
            </Row>
              {/* <h3 className="h3" style={{fontSize: '20px'}}>Layout Usado: </h3>
              <Col xl="6">
                <div className="copyright text-center text-xl-left text-muted">
                  {" "}
                  <a
                    className="font-weight-bold ml-1"
                    href="https://www.creative-tim.com?ref=adr-auth-footer"
                    target="_blank"
                  >
                    
                  </a>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com?ref=adr-auth-footer"
                      target="_blank"
                    >
                     
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com/presentation?ref=adr-auth-footer"
                      target="_blank"
                    >
                      
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href=""
                      target="_blank"
                    >
                      
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                      target="_blank"
                    >
                    
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col> */}
          </Container>
        </footer>
      </>
    );
  }
}

export default Login;
