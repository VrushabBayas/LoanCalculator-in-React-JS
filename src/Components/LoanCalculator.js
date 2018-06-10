import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const host = 'http://localhost:3001/loan';

export default class LoanCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: '',
      loanAmount: '',
      rate_of_intrest: '',
      paymentAmount: null
    };
  }

  hanndleClick = () => {
    axios
      .get(
        host +
          '/' +
          this.state.loanAmount +
          '/' +
          this.state.years +
          '/' +
          this.state.rate_of_intrest
      )
      .then(response => {
        console.log('response.data.payments: ', response.data.payments);
        this.setState({
          paymentAmount: response.data.payments
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLoanAmount = event => {
    this.setState({
      loanAmount: event.target.value
    });
  };
  handleLoanPercent = event => {
    this.setState({
      rate_of_intrest: event.target.value
    });
  };
  handleLoanNoOfYears = event => {
    this.setState({
      years: event.target.value
    });
  };
  render() {
    return (
      <div className="LoanCalculator card">
        <div className="card-header">
          {this.state.paymentAmount != null
            ? this.state.paymentAmount
            : 'Loan Calculator'}
        </div>
        <div className="card-body">
          <label>Loan Amout</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleLoanAmount}
          />
          <label>Percent</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleLoanPercent}
          />
          <label>No of Years</label>
          <input
            type="text"
            className="form-control"
            onChange={this.handleLoanNoOfYears}
          />
          <hr />
          <button
            type="button"
            className="btn  btn-block btn-primary"
            onClick={this.hanndleClick}
          >
            Submit
          </button>
        </div>
        <div className="card-footer text-muted">HaveFun</div>
      </div>
    );
  }
}
