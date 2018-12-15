/* eslint-disable jsx-a11y/img-has-alt */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-has-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/img-has-alt */
/* eslint-disable quote-props */
/* eslint-disable jsx-a11y/img-has-alt */
/* eslint-disable no-use-before-define */
/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CheckBox from '../components/userauthentication/CheckBox';
import Input from '../components/userauthentication/Input';
import TextArea from '../components/userauthentication/TextArea';
import Select from '../components/userauthentication/Select';
import Button from '../components/userauthentication/Button';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        email: ''
      }
    };

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmailAddress = this.handleEmailAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    const value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    const value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmailAddress(e) {
    const value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log('Inside handleTextArea');
    const value = e.target.value;
    this.setState(
      (prevState) => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const userData = this.state.newUser;

    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      response.json().then((data) => {
        console.log('Successful' + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: ''
      }
    });
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={'text'}
          title={'Full Name'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Enter your name'}
          handleChange={this.handleInput}
        />{' '}
        {/* Name of the user */}
        <Input
          inputType={'number'}
          name={'age'}
          title={'Age'}
          value={this.state.newUser.age}
          placeholder={'Enter your age'}
          handleChange={this.handleAge}
        />{' '}
        {/* Age */}
        <Input
          inputType={'text'}
          title={'Email Address'}
          name={'email'}
          value={this.state.newUser.email}
          placeholder={'Enter your amail'}
          handleChange={this.handleInput}
        />{' '}
        {/* Email */}
        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Submit'}
          style={buttonStyle}
        />{' '}
        {/* Submit */}
        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
          style={buttonStyle}
        />{' '}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
};

export default FormContainer;
