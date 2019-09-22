import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectUserError } from '../../redux/user/user.selector';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart, userError }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });
  
  // useEffect(() => {
  //   console.log('userError', userError)
  // }, [userError])

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        {userError ? (
            <p
              style={{
                color: 'red',
                fontSize: '18px',
                marginTop: '-20px'
              }}
            >
              {userError.message}
            </p>
          ) : null}
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  userError: selectUserError
})

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
