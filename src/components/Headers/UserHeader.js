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
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { withCookies } from "react-cookie";
import Cookies from 'js-cookie';

class UserHeader extends React.Component {
    /* Primeira letra de uma string maiscula */
    capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
    
    state = {
      user: []
    }
  
    componentDidMount(){
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
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          /*style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}*/
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">{this.capitalize(this.state.user.username)}</h1>
                <p className="text-white mt-10 mb-15">
                  Essa é a sua página de perfil
                </p>
                <Button
                  color="info"
                  href={this.state.user.username}
                  onClick={e => e.preventDefault()}
                >
                  Editar perfil
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default withCookies(UserHeader);
