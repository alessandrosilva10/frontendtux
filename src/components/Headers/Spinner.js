import React, { Component } from "react";
import { withCookies } from "react-cookie";
// import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import Spinner from 'react-bootstrap/Spinner'

class SpinnerJs extends Component {
      state = {loading: false,
                sucesso: true,
                isClose: true,
                message: ''
              };

    onConfirm = () => {
       setTimeout(
            1000
        )
        this.setState({
            isClose: true,
        })
    }

      fetchData = async () => {
      this.setState({ loading: true });
      let dados_rede = {"mac": this.props.mac, "ssid": this.props.ssid, "channel": this.props.channel, "password": this.props.password};
      //let success = () => toast.success("Operação realizada com sucesso");
      //let warning = () => toast.warning("Houve um problema com a API. Tente novamente");
      console.log(dados_rede)
      // eslint-disable-next-line
      const apiResponse = await fetch(this.props.api, {
      method: "post",
      body: JSON.stringify(dados_rede),
      headers : {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json',
          'Authorization': `Token ${this.props.cookies.get('token')}`
        }
      })
      .then(response => response.json())
      .then((response) => {
            this.setState({
                sucesso: true,
                isClose: false,
                message: response,
                loading: false
            });
      });
     }

  render() {
    const { loading } = this.state;
    return (
        <button style={this.props.style} onClick={this.fetchData} disabled={loading}>
            {
            (this.state.sucesso === true && this.state.isClose === false)
              ?
              <SweetAlert
                  success
                  title=''
                  onConfirm={this.onConfirm}
                  timeout={4000}
                   style={{color:'#2196f3'}}
                >
                  {this.state.message}
                </SweetAlert>
              :
                <div> </div>
          }
           {loading && (
             <Spinner style={{ marginRight: "5px" }}
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
          )}
          {loading &&  'Aguarde...'}
          {!loading && this.props.title}
        </button>
    );
  }
}

export default withCookies(SpinnerJs);