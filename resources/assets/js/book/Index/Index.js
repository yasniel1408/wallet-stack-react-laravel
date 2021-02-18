import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Index.scss";
import LoginForm from "../../components/LoginRorm";
import RegisterForm from "../../components/RegisterForm";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      repeatPassword: "",
      email: ""
    };
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async handleSubmitLogin(e) {
    e.preventDefault();
    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      let res = await axios.post(
        "api/login",
        JSON.stringify(this.state),
        { headers }
      );
      let data = res.data;
      console.log(data)
      if(data.res == true){
        window.location = "/wallet"
      }else{
        alert(data.message)
      }
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }

  async handleSubmitRegister(e) {
    e.preventDefault();
    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      let res = await axios.post(
        "api/users",
        JSON.stringify(this.state),
        { headers }
      );
      let data = res.data;
      console.log(data)
      if(data.res == true){
        window.location = "/"
      }else{
        alert(data.message)
      }
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }

  onChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={()=>
                  <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    handleSubmit={this.handleSubmitLogin}
                    onChange={this.onChange}
                  />
                }
              />
               <Route
                path="/register"
                render={()=>
                  <RegisterForm
                    name={this.state.name}
                    email={this.state.email}
                    password={this.state.password}
                    repeatPassword={this.state.repeatPassword}
                    handleSubmit={this.handleSubmitRegister}
                    onChange={this.onChange}
                  />
                }
              />
            </Switch>
        </Router>
      </div>
    );
  }
}

if (document.getElementById("index")) {
  ReactDOM.render(<Index />, document.getElementById("index"));
}
