import React from "react";
import axios from "axios";
import { withCookies } from "react-cookie";
// eslint-disable-next-line
import PropTypes from "prop-types";
// eslint-disable-next-line
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// eslint-disable-next-line
import {
  MDBBtn,
  MDBBtnGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCardTitle,
} from "mdbreact";
// reactstrap components
import { Card, CardBody, Container, Row, Col, Form, FormGroup, Label, Input, ButtonToggle} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faWaveSquare,
  faSignal,
  faLock,
  faTv,
  faLaptop,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./Header.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import SpinnerJs from "./Spinner";
import Alert from "@material-ui/lab/Alert";
import ModalMaps from "./ModalMaps";
// import { CardHeader } from "material-ui";
import CardHeader from "@material-ui/core/CardHeader";
// import { View } from "react-native";
// import Divider from '@material-ui/core/Divider';

const api = {
  // baseUrl: `http://127.0.0.1:8000/api/users/`,
  // grupoUrl: 'http://127.0.0.1:8000/api/group/',
  // urlToken: `http://127.0.0.1:8000/api/auth/`,
  // pegarIdUsuarioLogado: 'http://127.0.0.1:8000/api/usuariologado/',
  // updateUser: 'http://127.0.0.1:8000/api/updateuser/',
  // enviarEmailsUrl: 'http://127.0.0.1:8000/api/enviaremail/',
  baseUrl: `https://backendso2.herokuapp.com/api/users/`,
  grupoUrl: "https://backendso2.herokuapp.com/api/group/",
  urlToken: `https://backendso2.herokuapp.com/auth/`,
  pegarIdUsuarioLogado: "https://backendso2.herokuapp.com/api/usuariologado/",
  updateUser: "https://backendso2.herokuapp.com/api/updateuser/",
  enviarEmailsUrl: "https://backendso2.herokuapp.com/api/enviaremail/",
};

const ModalA = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  // eslint-disable-next-line
  const [title, setTitle] = React.useState("Transitioning...");

  const onClick = (event) => {
    showModal();
  };

  function delay(ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


  const cadastrarGrupo = () =>{
    var desc = document.getElementById('descricao').value;
    var qtd = document.getElementById('quantidade').value;
    var open = document.getElementById('isOpen').value;
    if(open === "Sim"){
        open = 1;
    }else{
      open = 0;
    }
    console.log(desc);
    console.log(qtd);
    console.log(open);

    var token = document.cookie.split('token=')[1];
    console.log(token)
    axios
    .post(
      api.grupoUrl,
      {
        grupo: desc,
        quantidade_usuarios: qtd,
        isGrupoOpen: open
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => {
      toast.success("Grupo Criado com Sucesso");
      this.fetchGrupos();
      });

};


  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    //setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
      <br />
      <MDBBtnGroup >
        {<span type="submit" onClick={onClick}><MDBBtn style={{
                      cursor: "pointer",
                      bottom: "18px",
                      height: "45x",
                      background: 'rgba(140, 20, 252, 1)',
                      color: "white",
                      borderRadius: "10px",
                      borderColor: 'rgba(140, 20, 252, 1)',
                      border: "1px solid #000000",
                      fontWeight: "700",
                      fontSize: ".8em",
                      marginBottom: '-30px'
        }}>
          <strong>Criar novo Grupo</strong></MDBBtn></span> }

      </MDBBtnGroup>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header style={{ background: "#2196f3"}}>
          <Modal.Title
            style={{
              marginTop: 0,
              marginLeft: "18%",
            }}

          >
            Cadastro de Grupo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form role="form" method="POST">
           <FormGroup row>

            <Label sm={2}>Descrição:</Label>
            <Col sm={10}>
              <Input type="text" name="descricao" id="descricao" placeholder="Informe o nome do Grupo"></Input>
            </Col>

           </FormGroup>
           <FormGroup row>
            <Label sm={2.1}>Quantidade:</Label>
              <Col sm={9}>
                <Input type="number" name="quantidade" id="quantidade" placeholder="Informe a quantidade de participantes"></Input>
              </Col>
           </FormGroup>

           <FormGroup row>
            <Label sm={2.1}>Está Aberto:</Label>
            <Col sm={4}>
              <Input type="select" name="isOpen" id="isOpen" syle={{ width:"5px"}}>
                <option>Sim</option>
                <option>Não</option>
              </Input>
            </Col>

           </FormGroup>

           <FormGroup row>
             <Col md={4}>
                <ButtonToggle color="danger" onClick={hideModal}>Cancelar</ButtonToggle>
             </Col>

            <Col md={8}>
              <ButtonToggle color="success" onClick={cadastrarGrupo}>Cadastrar</ButtonToggle>
            </Col>

           </FormGroup>
         </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

class Header extends React.Component {
  /* Primeira letra de uma string maiuscula */
  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      grupos: [],
      usuarios: [],
      isShowing: false,
      password: "",
      type: "password",
      idUsuarioLogado: "",
      teste: [],
      updateUserQuery: [],
      // value: [],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.showHide = this.showHide.bind(this);
    this.fetchGrupos = this.fetchGrupos.bind(this);
    this.fetchGrupos();
    // this.fetchGrupos();
  }

increment = async(qtdMax, idGrupo) => {
    await axios
      .put(
        api.grupoUrl + idGrupo[0] + "/",
        {
            quantidade_usuarios: parseInt(qtdMax) + 1
        },
        {
           headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           Authorization: `Token ${this.props.cookies.get("token")}`,
         },
        }
     );
     this.fetchGrupos();
  }

  decrement = (qtdMax, idGrupo) => {
    // this.setState((prevState) => {
    //   console.log("decrement");
    //   console.log(prevState);
    //   if(prevState.value > 0){
    //     console.log(prevState.value);
    //     console.log(--prevState.value);
    //     value: --prevState.value;
    //   }
    //   else{
    //     console.log(0);
    //     value: 0
    //   }
    // });
    console.log("decrement");
    if(qtdMax > 0){
      // await axios
      //   .put();
      // this.fetchGrupos();
    }
    else{
      console.log("Quantidade será menor que zero");
    }
  }

  handleChange = (event) => {
    let password = event.target.value;
    this.setState({
      password: password,
    });
  };

  chanceValueQuantParMax = (event) => {
    console.log(event);
    console.log(event.target.value);
    // this.setState({ value: event.target.value });
  };

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input",
    });
  }

  fetchGrupos = async () => {
    await axios
      .get(api.baseUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.props.cookies.get("token")}`,
        },
      })
      .then((res) => {
        //this.setState({teste: res.data})
        this.setState({ usuarios: res.data });
      });

    await axios
      .get(api.grupoUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.props.cookies.get("token")}`,
        },
      })
      .then((res) => {
        this.setState({ grupos: res.data });
      });

    var obj = [{}];
    var objGrupos = {};

    obj["usuarios"] = this.state.usuarios;
    obj["grupos"] = this.state.grupos;
    obj = obj["usuarios"].concat(obj["grupos"]);
    console.log(obj)
    var res = obj
      .reduce(function (res, currentValue) {
        if (
          res.indexOf(currentValue.grupo) === -1 &&
          currentValue.grupo !== null
        ) {
          res.push(currentValue.grupo);
        }
        return res;
      }, [])
      .map(function (grupo) {
        return {
          grupo: grupo,
          username: obj
            .filter(function (_el) {
              return _el.grupo === grupo && _el.username !== undefined;
            })
            .map(function (_el) {
              if (_el.username)
                return _el.username + "\n";
            }),
          grupo_id: obj
            .filter(function (_el) {
              return _el.grupo === grupo;
            })
            .map(function (_el) {
              if (_el.grupo_id) return _el.grupo_id;
            }),
            quantidade_usuarios: obj
            .filter(function (_el) {
              return _el.grupo === grupo && _el.quantidade_usuarios !== undefined;
            })
            .map(function (_el) {
              if (_el.quantidade_usuarios) return _el.quantidade_usuarios;
            }),
            isGrupoAberto: obj
            .filter(function (_el) {
              return _el.grupo === grupo && _el.quantidade_usuarios !== undefined;
            })
            .map(function (_el) {
              if (_el.isGrupoOpen === 1){ return 1} else{ return 0};
            }),
        };
      });
    console.log(res)
    this.setState({ teste: res });
  };
/*
componentDidUpdate(prevProps) {
    console.log("teste")
  // Typical usage (don't forget to compare props):
  if (prevProps !== this.state)  {
    this.fetchGrupos();
  }
}*/

 componentDidMount() {
 toast.success("Usuário logado com sucesso!");
    axios
      .get(api.pegarIdUsuarioLogado, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.props.cookies.get("token")}`,
        },
      })
      .then((res) => {
        this.setState({ idUsuarioLogado: res.data.id });
      });
  }

  sairGrupo = (forcedReload) => {
    axios
      .put(
        api.updateUser + this.state.idUsuarioLogado + "/",
        {
          id: this.state.idUsuarioLogado,
          grupo: '',
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.props.cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        toast.warning("Usuário saiu no grupo com sucesso!");
        this.fetchGrupos();
        //window.location.reload(forcedReload);
      });
  }

  entrarGrupo = (grupo_id, forcedReload) => () => {
    let ids = [];
    console.log(grupo_id)
    ids.push(grupo_id[0]);
    ids.push(this.state.idUsuarioLogado);
    axios
      .put(
        api.updateUser + ids[1] + "/",
        {
          id: ids[1],
          grupo: ids[0],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${this.props.cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        toast.warning("Usuário entrou no grupo com sucesso!");
        this.fetchGrupos();
        //window.location.reload(forcedReload);
      });
  };


  enviarEmails = () => {
    axios
      .get(api.enviarEmailsUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${this.props.cookies.get("token")}`,
        },
      })
      .then((res) => {
        //alert(this.props.cookies.get('token'))
        alert("Lista de emails enviado com sucesso!!!");
      });
  };

  render() {
    // eslint-disable-next-line
    const { loading } = this.state;
    if (
      this.props.cookies.get("token") === null ||
      this.props.cookies.get("token") === "undefined"
    ) {
      window.location.replace("/auth/login");
      this.warning();
    } else {
      return (
        <React.Fragment>
          <>
            <div className="header bg-gradient-purple pb-8 pt-5 pt-md-8">
              <Container fluid>
                <div className="header-body">
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: "60px",
                      padding: "50px",
                    }}
                  >
                    <strong>Área de Grupos</strong>
                  </div>
                  {/* Card stats */}
                  {/* <button onClick={this.enviarEmails}>Enviar Lista de Emails</button><br/><br/> */}
                  <MDBBtn
                    style={{
                      cursor: "pointer",
                      bottom: "18px",
                      height: "45x",
                      background: 'rgba(140, 20, 252, 1)',
                      color: "white",
                      borderRadius: "10px",
                      borderColor: 'rgba(140, 20, 252, 1)',
                      border: "1px solid #000000",
                      fontWeight: "700",
                      fontSize: ".8em",
                      display: 'inline',
                      marginLeft: '150px',
                      marginBottom: '-80px'
                    }}
                    onClick={this.enviarEmails}
                  >
                    Enviar Lista de Emails
                  </MDBBtn>

                  <ModalA

                  />
                           {/*
                  <MDBBtn
                  onClick={this.onClick}
                    style={{
                      cursor: "pointer",
                      bottom: "18px",
                      height: "45x",
                      background: 'rgba(140, 20, 252, 1)',
                      color: "white",
                      borderRadius: "10px",
                      borderColor: 'rgba(140, 20, 252, 1)',
                      border: "1px solid #000000",
                      fontWeight: "700",
                      fontSize: ".8em",
                    }}
                  >
                    Criar Novo Grupo
                  </MDBBtn>*/}

                  <br />
                  <hr
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#ffffff",
                      height: 0.1,
                      borderColor: "#ffffff",
                    }}
                  />
                  {/* <Divider></Divider> */}
                  <br />
                  {/* <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}}/> */}
                  <Row>
                    {" "}
                    {this.state.teste.map((w, index) => (
                      <Col lg="6" xl="6" key={index}>
                        <MDBBtn
                          style={{
                            cursor: "pointer",
                            bottom: "18px",
                            height: "45x",
                            background: "#2dce89",
                            color: "white",
                            borderRadius: "10px",
                            borderColor: "#2dce89",
                            border: "1px solid #2dce89",
                            fontWeight: "700",
                            fontSize: ".8em",
                          }}
                          onClick={this.entrarGrupo(w.grupo_id, w.grupo)}
                        >
                          Entrar no grupo
                        </MDBBtn>

                        <MDBBtn
                          style={{
                            cursor: "pointer",
                            bottom: "18px",
                            height: "45x",
                            background: "#f5365c",
                            color: "white",
                            borderRadius: "10px",
                            borderColor: "#f5365c",
                            border: "1px solid #f5365c",
                            fontWeight: "700",
                            fontSize: ".8em",
                          }}
                          onClick={this.sairGrupo}
                        >
                          Sair do grupo
                        </MDBBtn>

                        <MDBBtn
                          style={{
                            cursor: "pointer",
                            bottom: "18px",
                            height: "45x",
                            background: "#11cdef",
                            color: "white",
                            borderRadius: "10px",
                            borderColor: "#11cdef",
                            border: "1px solid #11cdef",
                            fontWeight: "700",
                            fontSize: ".8em",
                          }}
                          onClick={this.entrarGrupo(w.grupo_id, w.grupo)}
                        >
                          Editar grupo
                        </MDBBtn>
                        {/* <Alert variant="filled" severity="info">
                          <strong>{w.grupo}</strong>
                        </Alert> */}
                        <Card
                          className="card-stats mb-xl-5"
                          style={{
                            border: "1px solid #000000",
                            boxShadow: "16px 12px 22px 1px rgba(0,0,0,0.34)",
                          }}
                        >
                          <CardHeader
                            // classes={{
                            //   subheader:
                            // }}
                            title={w.grupo}
                            // subheader=""
                            style={{
                              backgroundColor: 'rgba(140, 20, 252, 1)',
                              color: "white",
                              textAlign: "center",
                            }}
                          />
                          {/* <hr  style={{color: '#000000', backgroundColor: '#000000', height: .1, borderColor : '#000000'}}/> */}
                          <CardBody
                            style={{
                              color: "black",
                              marginTop: "-25px",
                              whiteSpace: "pre-line",
                            }}
                          >
                            <p>
                              {" "}
                              <br />
                              <span> Quantidade de Participantes Atuais: {w.username.length}</span>
                              <br />
                              <FontAwesomeIcon icon={faUserFriends} />
                              <span style={{ marginLeft: 15 }}>
                                Usuários do grupo:
                                <br />
                                {w.username}
                              </span>
                            </p>
                            <label>
                              Grupo Aberto?&nbsp;
                              <input
                                name="isOpenGroup"
                                type="checkbox"
                                // checked={this.state.isOpenGroup}
                                checked={w.isGrupoAberto}
                                // onChange={this.handleInputChange}
                                // disabled
                                readOnly
                              />
                            </label>
                            <span>{w.isGrupoAberto}</span>
                            <ToastContainer />
                          </CardBody>
                          <div className="quantity-input">
                            <button
                              className="quantity-input__modifier quantity-input__modifier--left"
                              onClick={this.decrement(w.quantidade_usuarios, w.grupo_id)}
                            >
                              &mdash;
                            </button>
                            <input
                              className="quantity-input__screen"
                              type="text"
                              name="qtdPartMax"
                              value={w.quantidade_usuarios}
                              onChange={this.chanceValueQuantParMax}
                              // readOnly
                            />
                            <button
                              className="quantity-input__modifier quantity-input__modifier--right"
                              onClick={() => { this.increment(w.quantidade_usuarios, w.grupo_id) }}
                            >
                              &#xff0b;
                            </button>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </div>
          </>
        </React.Fragment>
      );
    }
  }
}

export default withCookies(Header);