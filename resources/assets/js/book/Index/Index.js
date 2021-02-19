import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
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
      email: "",
      loading: false
    };
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async handleSubmitLogin(e) {
    e.preventDefault();
    this.setState({loading: true})
    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      let res = await axios.post("api/login", JSON.stringify(this.state), {
        headers
      });
      let data = res.data;
      console.log(data);
      if (data.res == true) {
        localStorage.setItem("token", data.token)
        window.location = "/wallet";
      } else {
        alert(data.message);
      }
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
    this.setState({loading: false})
  }

  async handleSubmitRegister(e) {
    e.preventDefault();
    this.setState({loading: true})
    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      let res = await axios.post("api/users", JSON.stringify(this.state), {
        headers
      });
      let data = res.data;
      console.log(data);
      if (data.res == true) {
        window.location = "/";
      } else {
        alert(data.message);
      }
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
    this.setState({loading: false})
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
            <Redirect exact to="/login" from="/" />
            <Route
              path="/login"
              render={() => (
                <LoginForm
                  email={this.state.email}
                  password={this.state.password}
                  handleSubmit={this.handleSubmitLogin}
                  onChange={this.onChange}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              path="/register"
              render={() => (
                <RegisterForm
                  name={this.state.name}
                  email={this.state.email}
                  password={this.state.password}
                  repeatPassword={this.state.repeatPassword}
                  handleSubmit={this.handleSubmitRegister}
                  onChange={this.onChange}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

if (document.getElementById("login")) {
  ReactDOM.render(<Index />, document.getElementById("login"));
}
