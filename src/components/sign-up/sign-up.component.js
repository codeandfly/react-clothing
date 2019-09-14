import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      // alert("Passwords don't match");
      this.setState({
        ...this.state,
        error: `Passwords don't match`
      });
      return;
    }

    signUpStart({ displayName, email, password });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ error: ''});
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          {this.state.error ? (
            <p
              style={{
                color: 'red',
                fontSize: '18px',
                marginTop: '-20px'
              }}
            >
              {this.state.error}
            </p>
          ) : null}
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
