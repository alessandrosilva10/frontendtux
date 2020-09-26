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
import { withCookies } from "react-cookie";
// import Cookies from 'universal-cookie';
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

class Login extends React.Component {

  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  success = () => toast.success("Usuário logado com sucesso!");
  warning = () => toast.warning("Usuário não autenticado!");

  inputChange = event => {

    let credentials = this.state.credentials;
    credentials[event.target.name] = event.target.value;
    this.setState({credentials: credentials});
    console.log(this.state.credentials)
  }

  login = event => {
    fetch('https://backendso2.herokuapp.com/auth/', {
    // fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.credentials.email,
        password: this.state.credentials.password,
      })
    })
    .then(res => res.json()).then(res => {
    let token = res.token;
    console.log(token);
    this.props.cookies.set('token', token, { path: '/' });
    token = this.props.cookies.get('token');
      if(token === null || token === 'undefined'){
        this.warning()
      }else{
        window.location.replace("/admin/index");
      }
    })/*.catch(error => {
        console.log(error)
        this.warning();
         setTimeout(() => 22210000);
    })*/
  }

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-card shadow border-0">
            {/* <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Faça o login com</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
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
                <small>Faça o login com o seu usuário/senha</small>
              </div>
              <Form role="form" method="POST">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" name="email" onChange={this.inputChange} type="text"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Senha" name="password" onChange={this.inputChange}  type="password"/>
                  </InputGroup>
                </FormGroup>
                {/* <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Lembrar</span>
                  </label>
                </div> */}

              </Form>
               <div className="text-center">
                  <Button className="" color="primary" onClick={this.login} type="button" >
                    Logar
                  </Button>
                  {/*<ToastContainer />*/}
               </div>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Esqueceu a senha?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/auth/register"
                onClick="window.open(url, '_blank')"
              >
                <small>Criar uma nova conta</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default withCookies(Login);