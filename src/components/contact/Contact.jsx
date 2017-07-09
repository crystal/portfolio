import classNames from 'classnames';
import firebase from 'firebase';
import React, { Component } from 'react';

import styles from './Contact.sass';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      loading: false,
      success: false
    };
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    firebase.database().ref('messages').push({
      email: this.state.email,
      name: this.state.name,
      message: this.state.message
    })
    .then(() => {
      this.setState({
        email: '',
        name: '',
        message: '',
        loading: false,
        success: true
      });
    });
  }

  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h2>Message Me</h2>
          {!this.state.success && (
            <form onSubmit={e => this.handleSubmit(e)} >
              <label htmlFor="email">Email Address</label>
              <input name="email" value={this.state.email} onChange={e => this.handleInput(e)} />
              <label htmlFor="name">Name</label>
              <input name="name" value={this.state.name} onChange={e => this.handleInput(e)} />
              <label htmlFor="message">Message</label>
              <textarea name="message" value={this.state.message} onChange={e => this.handleInput(e)} />
              <button disabled={this.state.loading}>Send Message</button>
            </form>
          )}
          {this.state.success && (
            <div className={styles.success}>
              <h3>Success!</h3>
              <p>Thank you! I will be in touch.</p>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Contact;
