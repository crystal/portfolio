import classNames from 'classnames';
import React, { Component } from 'react';

import styles from './Contact.sass';

class Contact extends Component {
  render() {
    return (
      <div className={styles.contact}>
        <section>
          <h2>Message Me</h2>
          <form>
            <label htmlFor="email">Email Address</label>
            <input name="email" />
            <label htmlFor="name">Name</label>
            <input name="name" />
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
            <button>Send Message</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
