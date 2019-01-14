import React, { Component } from 'react';
import './Signup.css';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import YodlrApi from './YodlrApi';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    try {
      evt.preventDefault();
      //TODO: API call to post new user
      let newUserObj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      };
      YodlrApi.registerUser(newUserObj);
      this.setState({
        error: false
      });
      // TODO: push to a "thank-you for registering page"
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
      this.setState({
        error: err
      });
    }
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render() {
    return (
      <div id="signUpForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="firstName">
              First Name
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="lastName">
              Last Name
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup className="formGroup" row>
            <Label className="label" htmlFor="email">
              Email
            </Label>
            <Col sm={6}>
              <Input
                className="input"
                type="text"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <div id="submitRow">
            <Button className="submitButton" color="primary">
              Submit
            </Button>
          </div>
        </Form>
        <div>{this.state.error ? `${this.state.error}` : null}</div>
      </div>
    );
  }
}

export default SignUp;
