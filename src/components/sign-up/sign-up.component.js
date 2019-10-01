import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { createStructuredSelector } from 'reselect';
import { selectUserError } from '../../redux/user/user.selector';

const SignUp = ({ signUpStart, userError }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: ''
  });

  useEffect(() => {
    // const {msg} = userError.message
    if (userError) {
      setUserCredentials(userCredentials => ({
        ...userCredentials,
        error: userError.message
      }));
    }
  }, [userError]);

  const {
    displayName,
    email,
    password,
    confirmPassword,
    error
  } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // alert("Passwords don't match");
      setUserCredentials({
        ...userCredentials,
        error: `Passwords don't match`
      });

      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, error: '', [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        {error ? (
          <p
            style={{
              color: 'red',
              fontSize: '18px',
              marginTop: '-20px'
            }}
          >
            {error}
          </p>
        ) : null}
        {/* {this.state.error ? (
            <p
              style={{
                color: 'red',
                fontSize: '18px',
                marginTop: '-20px'
              }}
            >
              {this.state.error}
            </p>
          ) : null} */}
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userError: selectUserError
});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
