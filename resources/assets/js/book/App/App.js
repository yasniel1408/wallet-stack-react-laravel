import React, { Component } from "react";
import ReactDOM from "react-dom";
import TransferForm from "../../components/TransferForm.js";
import TransferList from "../../components/TransferList.js";
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 0.0,
      transfers: [],
      error: null,
      form: {
        description: "",
        amount: "",
        wallet_id: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      let res = await axios("api/wallet");
      let data = res.data;
      this.setState({
        money: data.money,
        transfers: data.transfers,
        form: {
          ...this.state.form,
          wallet_id: data.id
        }
      });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };

      let res = await axios.post(
        "api/transfer",
        JSON.stringify(this.state.form),
        { headers }
      );
      let data = res.data;
      this.setState({
        transfers: this.state.transfers.concat(data),
        money: this.state.money + parseInt(data.amount)
      });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  }

  handleChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    return (
      <div className="micontenedor">
        <div className="title">${this.state.money}</div>
        <TransferForm
          form={this.state.form}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <TransferList transfers={this.state.transfers} />
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<App />, document.getElementById("example"));
}
