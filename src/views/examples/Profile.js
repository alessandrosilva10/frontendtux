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
import Cookies from 'js-cookie';
import { withCookies } from "react-cookie";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  /* Primeira letra de uma string maiscula */
  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  
  state = {
    user: []
  }

  componentDidMount(){
    //fetch data
    // fetch('http://127.0.0.1:8000/api/user/', {
    console.log(Cookies.get('token'));
    fetch('https://backendso2.herokuapp.com/api/user/', {
      method: 'GET',
        headers: {
          'Authorization': `Token ${Cookies.get('token')}`
        }
    }).then( resp => resp.json()).then( res => this.setState({user: res}, function() {
      console.log(this.state.user);
    }))
    .catch(error => console.log(error))
  }

  render() {
    let token = this.props.cookies.get('token')
    if(token === null || token === undefined){
        return (
            window.location.replace('/auth/login')
        )
    }else{
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          height="150px" weight="50px"
                          // src={require("assets/img/theme/team-4-800x800.jpg")}
                          src="https://i.ibb.co/CVv7n65/download.jpg"
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Mensagem
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Amigos</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Fotos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comentários</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      {this.capitalize(this.state.user.username)}
                      <span className="font-weight-light">,</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Assis, São Paulo
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />

                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />

                    </div>
                    <hr className="my-4" />
                    <p>

                    </p>
                    <a href="/" onClick={e => e.preventDefault()}>
                      Mostrar mais
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Minha conta</h3>
                    </Col>
                    {/* <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Configurações
                      </Button>
                    </Col> */}
                  </Row>
                </CardHeader>
                <CardBody className="bg-white">
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Informação do usuário
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Usuário
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue={this.capitalize(this.state.user.username)}
                              id="input-username"
                              placeholder="Usuário"
                              type="text"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Email"
                              type="email"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Nome
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue="Lucky"
                              id="input-first-name"
                              placeholder="Nome"
                              type="text"
                               disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Sobrenome
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Sobrenome"
                              type="text"
                               disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Informações de contato
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Endereço
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              id="input-address"
                              placeholder="Endereço"
                              type="text"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Cidade
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue="New York"
                              id="input-city"
                              placeholder="Cidade"
                              type="text"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              País
                            </label>
                            <Input
                              className="form-control-alternative"
                              // defaultValue="United States"
                              id="input-country"
                              placeholder="País"
                              type="text"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              CEP
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="CEP"
                              type="number"
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    {/* <hr className="my-4" /> */}
                    {/* Description */}
                    {/* <h6 className="heading-small text-muted mb-4">Sobre mim</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Sobre mim</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue=" "
                          type="textarea"
                          disabled
                        />
                      </FormGroup>
                    </div> */}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
   }
  }
}

export default withCookies(Profile);
