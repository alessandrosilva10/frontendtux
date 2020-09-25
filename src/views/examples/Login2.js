import React from "react";
import { withCookies } from "react-cookie";
// import Cookies from 'universal-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './Login2.css';

class Login2 extends React.Component {
  constructor() {
    super();

    this.state = {form: 'login'};

    // I like using objects to toggle values. We could just use true/false and just set to !self value as well.
    this.toggle = {
      login: 'registrar',
      registrar: 'login'
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
  console.log(this.state.form)
    return (
      <div className="container">
        <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
          <form onSubmit={this.onSubmit.bind(this)}>
            {this.state.form === 'login' ? '': <input placeholder="Nome" type="text" />}
            {this.state.form === 'login' ? '': <input placeholder="Email" type="text" />}
            {this.state.form === 'registrar' ? '': <input placeholder="Email" type="text" />}
            {this.state.form === 'registrar' ? '': <input placeholder="Password" type="password" />}
            <button className="button-primary">Enviar</button>
          </form>
        </div>
        <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -250}px, 0px)`}} className="button-div">
          <p>{this.state.form === 'login' ? 'Possui uma conta?' : 'Já é um membro?'}</p>
          <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
        </div>
      </div>
    );
  }
}

export default Login2;