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
// javascipt plugin for creating charts
import Chart from "chart.js";
import { withCookies } from "react-cookie";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Index extends React.Component {

    state = {
      wireless: [],
    }
    sucess = () => toast.success("Usuário logado com sucesso!");
    warning = () => toast.warning("Usuário não autenticado!");

  componentDidMount(){
     /*  this.sucess()
        fetch('http://127.0.0.1:8000/api/wifi/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${this.props.cookies.get('token')}`
        }
      }).then( resp => resp.json()).then( res => this.setState({wireless: res}, function() {
            //alert(this.state.wireless)
      }))
      .catch(error => console.log(error))*/
    }

  constructor(props){
    super(props);

    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };

    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

    render() {
        let token = this.props.cookies.get('token')
        if(token === null || token === undefined){
            return (
                window.location.replace('/auth/login')
            )
        }else{
          return (
          <>
            <Header />
            <Container className="mt--7" fluid>
              <Row className="mt-5">
                <Col className="mb-5 mb-xl-0" xl="8">
                  <ToastContainer />
                </Col>
              </Row>
            </Container>
          </>
        );
        }
    }
  }

export default withCookies(Index);
