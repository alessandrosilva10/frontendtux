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
import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { withCookies } from "react-cookie";

class Register extends React.Component {

<<<<<<< HEAD
  state = {
    credentials: {
      name: '',
      email: ''
    }
  }

inputChange = event => {
    let credentials = this.state.credentials;
    credentials[event.target.name] = event.target.value;
    this.setState({credentials: credentials});
}

  login = event => {
    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'Authorization': `Token ${this.props.cookies.get('token')}`

      },
      body: JSON.stringify({
        username: this.state.credentials.name,
        password: this.state.credentials.email,
      })
    })
    .then(res => res.json()).then(res => {
    let token = res.token;
    this.props.cookies.set('token', token, { path: '/' });
    token = this.props.cookies.get('token');
      if(token === null || token === 'undefined'){
        this.warning()
      }else{
        window.location.replace("/auth/login");
      }
    }).catch(error => {


    })
  }

=======

  sucess = () => toast.success("Usuário logado com sucesso!");
  warning = () => toast.warning("Usuário não autenticado!");

  register = event => {
    
  }


>>>>>>> 99b796873f2257e67fecbdf5035348d1f619aa50
  render() {
    return (
      <>
        <Col lg="6" md="8">
<<<<<<< HEAD
          <Card className="bg-white shadow border-1 card">
            <CardHeader className="bg-transparent pb-5">
=======
          <Card className="bg-secondary shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
>>>>>>> 99b796873f2257e67fecbdf5035348d1f619aa50
              <div className="text-muted text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div className="text-center">
                <Button
                  className="btn-neutral btn-icon mr-4"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/github.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Github</span>
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
              </div>
            </CardHeader> */}
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Digite as informações da conta</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
<<<<<<< HEAD
                    <Input placeholder="Nome" name="name" type="text" onChange={this.inputChange} />
=======
                    <Input placeholder="Nome" type="text" />
>>>>>>> 99b796873f2257e67fecbdf5035348d1f619aa50
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" name="email" type="email" onChange={this.inputChange} autoComplete="new-email"/>
                  </InputGroup>
                </FormGroup>
<<<<<<< HEAD
=======
                {/* <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password"/>
                  </InputGroup>
                </FormGroup> */}
                {/* <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div> */}
>>>>>>> 99b796873f2257e67fecbdf5035348d1f619aa50
                <Row className="my-4">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          Eu aceito os termos{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            de Politica de Privacidade
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
<<<<<<< HEAD
                  <Button className="mt-4" onClick={this.login} color="primary" type="button">
                    Create account
=======
                  <Button className="mt-4" color="primary"  onClick={this.register} type="button">
                    Criar Conta
>>>>>>> 99b796873f2257e67fecbdf5035348d1f619aa50
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default withCookies(Register);
