import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {initialize} from 'redux-form';
import {ContactForm} from 'components';

@connect(
  () => ({}),
  {initialize})
export default class Contact extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit = (data) => {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('contact', {});
  }

  handleInitialize = () => {
    this.props.initialize('contact', {
      name: 'Little Bobby Tables',
      email: 'bobby@gmail.com',
      occupation: 'Redux Wizard',
      currentlyEmployed: true,
      sex: 'male'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Contato</h1>
        <Helmet title="Contato"/>

        <p>
          Lorem ipsum
        </p>

        <ContactForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
