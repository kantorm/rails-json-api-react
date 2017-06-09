import React, { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { SubmissionError } from 'redux-form';

import { CardSingle } from '../UI';
import LoginForm from './LoginForm';
import { login } from '../../store/auth';

export class Login extends Component {
  componentWillMount() {
    localStorage.clear();
  }

  onSubmit = values => this.props.login(values)
    .then(this.props.redirect)
    .catch(({ message }) => {
      throw new SubmissionError({ _error: message });
    });

  render() {
    return (
      <CardSingle>
        <h1>Login</h1>
        <LoginForm onSubmit={this.onSubmit}/>
      </CardSingle>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = (dispatch, props) => ({
  login: payload => dispatch(login('auth', payload)),
  redirect: () => dispatch(replace(props.location.query.redirect || '/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
