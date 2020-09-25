import React from "react";
import axios from "axios";
import { withCookies } from "react-cookie";
 // eslint-disable-next-line
import PropTypes from 'prop-types';
 // eslint-disable-next-line
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
 // eslint-disable-next-line
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faWaveSquare, faSignal, faLock, faTv, faLaptop, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import SpinnerJs from './Spinner';
import Alert from '@material-ui/lab/Alert';
import ModalMaps from './ModalMaps';

const api = {
    baseUrl: `https://backendso2.herokuapp.com/api/users/`,
    grupoUrl: 'https://backendso2.herokuapp.com/api/group/',
    urlToken: `https://backendso2.herokuapp.com/api/auth/`,
    pegarIdUsuarioLogado: 'https://backendso2.herokuapp.com/api/usuariologado/',
    updateUser: 'https://backendso2.herokuapp.com/api/updateuser/',
    enviarEmailsUrl: 'https://backendso2.herokuapp.com/api/enviaremail/',
};

const ModalA = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
   // eslint-disable-next-line
  const [title, setTitle] = React.useState("Transitioning...");

   const onClick = (event) => {
      showModal();
   }

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
      <MDBBtnGroup style={{'justifyContent': 'center', 'padding': '5px'}}>
         <Alert variant="filled" severity="info">
        <strong><span type="submit" onClick={onClick}>Teste do modal</span></strong>
        </Alert>
      </MDBBtnGroup>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header style={{background: '#2196f3'}} >
          <Modal.Title style={{
                marginTop: 0,
                marginLeft: '18%',
        }}>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
      </Modal>
    </>
  );
};

class Header extends React.Component {
      /* Primeira letra de uma string maiuscula */
      capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

      constructor(props) {
        super(props);
        this.state = {
            grupos: [],
            usuarios: [],
            isShowing: false,
            password: '',
            type: 'password',
            idUsuarioLogado: '',
            teste: [],
            updateUserQuery: []
        };
      this.showHide = this.showHide.bind(this);
      this.fetchGrupos = this.fetchGrupos.bind(this);


    }

    handleChange = (event) => {
        let password = event.target.value;
        this.setState({
            password: password
        })
    }

componentDidUpdate(){
    this.fetchGrupos();
}
 showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })
  }
 fetchGrupos = async () => {
        await axios.get(
        api.baseUrl, { headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization" : `Token ${this.props.cookies.get('token')}`}
        }
      ).then((res) => {
        console.log(res.data)
        //this.setState({teste: res.data})
        this.setState({usuarios: res.data})
      });

     await axios.get(
        api.grupoUrl, { headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization" : `Token ${this.props.cookies.get('token')}`}
        }
      ).then((res) => {
         this.setState({grupos: res.data})
      });


    var obj = [{}]
    var objGrupos = {}

    obj["usuarios"] = this.state.usuarios
    obj["grupos"]  = this.state.grupos
    obj = obj["usuarios"].concat(obj["grupos"])


    var res = obj.reduce(function(res, currentValue) {
            if (res.indexOf(currentValue.grupo) === -1 && currentValue.grupo !== null) {
                res.push(currentValue.grupo);
            }
            return res;
        }, []).map(function(grupo) {
            return {
                grupo: grupo,
                username: obj.filter(function(_el) {
                  return _el.grupo === grupo;
               }).map(function(_el) { if (_el.username != undefined && _el.grupo != undefined) return _el.username + "\n"; }),
               grupo_id: obj.filter(function(_el) {
                  return _el.grupo === grupo;
               }).map(function(_el) { if (_el.grupo_id) return _el.grupo_id; }),
            }
        });

    this.setState({teste: res})
 }

componentDidMount(){
        axios.get(
        api.pegarIdUsuarioLogado, { headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization" : `Token ${this.props.cookies.get('token')}`}
        }
      ).then((res) => {
        this.setState({idUsuarioLogado: res.data.id})
      });

}


entrarGrupo = (grupo_id) => () => {
    let ids = []
    ids.push(grupo_id[0])
    ids.push(this.state.idUsuarioLogado)
    axios.put(
        api.updateUser+ids[1]+'/',
        {
            "id": ids[1],
            "grupo": ids[0],
        }
        , { headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization" : `Token ${this.props.cookies.get('token')}`}
        }
      ).then((res) => {
        this.forceUpdate();
        alert("Usuário entrou no grupo com sucesso!")
      });
    this.forceUpdate();
}


enviarEmails = () => {
    axios.get(
        api.enviarEmailsUrl
        , { headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization" : `Token ${this.props.cookies.get('token')}`}
        }
      ).then((res) => {
        //alert(this.props.cookies.get('token'))
        alert("Lista de emails enviado com sucesso!!!")
      });
}

  render() {
   // eslint-disable-next-line
   const { loading } = this.state;
    console.log(this.props.cookies.get('token'))
   if(this.props.cookies.get('token') === null || this.props.cookies.get('token') === 'undefined'){
        window.location.replace("/auth/login");
        this.warning()
      }else{
        return (
    <React.Fragment>
      <>
        <div className="header bg-gradient-purple pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <div style={{color: 'white',textAlign: 'center', fontSize: '60px', padding: '50px'}}><strong>Área de Grupos</strong></div>
              {/* Card stats */}
              <button onClick={this.enviarEmails}>Enviar Lista de Emails</button><br/><br/>
              <Row> {this.state.teste.map((w, index)=>
                    <Col lg="6" xl="3">
                    <MDBBtn style={{
                        'cursor': 'pointer',
                        'bottom': '18px',
                        'height': '45x',
                        'background': '#44325d',
                        'color': 'white',
                        'borderRadius': '10px',
                        'borderColor': '#44325d',
                        'border': '1px solid #44325d',
                        'fontWeight': '700',
                        'fontSize': '.8em',
                  }} onClick={this.entrarGrupo(w.grupo_id, w.grupo)}>Entrar no grupo</MDBBtn>
                     <Alert variant="filled" severity="info">
                    <strong>{w.grupo}</strong>
                    </Alert>
                   <Card className="card-stats mb-xl-5">
                    <CardBody style={{color: 'black',marginTop: '-25px', whiteSpace: 'pre-line'}}>
                            <p>  < br />
                                <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: 15}}>Usuários do grupo:
                                <br/>
                                {w.username}
                                </span>
                            </p>
                            <ModalA title={
                                <Alert variant="filled" severity="info">
                                <strong><span>Modal Teste</span></strong>
                                </Alert>
                            }
                            body={
                                <> <Card className="card-stats mb-xl-5">
                                    <p style={{color: 'black', marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '20px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                    <FontAwesomeIcon icon={faUserFriends} /><span style={{marginLeft: '15px'}}>Nome: </span> < br/>
                                        <hr />
                                        <label htmlFor='body'>Teste</label><br />
                                          <input type={this.state.type} id="password__input" name="password__input" className="password__input" onChange={this.handleChange} />
                                          <span style={{
                                                'cursor': 'pointer',
                                                'position': 'absolute',
                                                'bottom': '18px',
                                                'height': '28px',
                                                'background': '#2196f3',
                                                'color': 'white',
                                                'marginLeft': '10px',
                                                'padding': '4px 8px',
                                                'borderRadius': '4px',
                                                'fontWeight': '700',
                                                'fontSize': '.8em',
                                          }} className="password__show" onClick={this.showHide}>{this.state.type === 'input' ? 'Esconder' : 'Mostrar'}</span>
                                    </p>
                                    </Card>
                                    <div style={{
                                            marginTop: '-20px',
                                        }}>

                                    <SpinnerJs title="Botão 1" password={this.state.password} api="http://localhost:8000/api/senhawpa2/" style={
                                        {
                                                'cursor': 'pointer',
                                                'background': '#2196f3',
                                                'color': 'white',
                                                'borderRadius': '5px',
                                                'fontWeight': '700',
                                                'fontSize': '.8em',
                                                'borderColor': '#2196f3',
                                                'border': '5px solid #2196f3',
                                                'marginLeft': '10px',
                                        }
                                    }/>
                                    <SpinnerJs title="Botão 2" api="http://localhost:8000/api/wifiphishing/" style={
                                        {
                                                'cursor': 'pointer',
                                                'background': '#2196f3',
                                                'color': 'white',
                                                'borderRadius': '5px',
                                                'fontWeight': '700',
                                                'fontSize': '.8em',
                                                'borderColor': '#2196f3',
                                                'border': '5px solid #2196f3',
                                                'marginTop': '10px',
                                                'marginLeft': '10px'
                                        }
                                    }/>
                                    <ModalMaps style={{
                                        'cursor': 'pointer',
                                        'background': '#2196f3',
                                        'color': 'white',
                                        'borderRadius': '5px',
                                        'fontWeight': '700',
                                        'fontSize': '.8em',
                                        'borderColor': '#2196f3',
                                        'border': '5px solid #2196f3',
                                        'marginTop': '5px',
                                        'marginLeft': '10px'}}
                                        title="Localização do alvo pelo Google Maps"
                                        />
                                    </div>
                                </>
                            }/>
                         <ToastContainer />
                     </CardBody>
                   </Card>
                </Col>
                )}
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