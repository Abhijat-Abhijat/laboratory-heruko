import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import "../styles/contact.scss";
function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
      <form
        method="POST"
        action="https://docs.google.com/forms/d/e/1FAIpQLScK7EcxPPWZfhMj0hXMGfeQskx_kZPaqZUau6XZ1R_c0mjoeg/formResponse"
      >
        <input
          class="input"
          type="text"
          name="entry.1612716058"
          placeholder="Name"
        />
        <input
          class="input"
          type="email"
          name="entry.1976432682"
          placeholder="Email"
        />
        <input
          class="input"
          type="text"
          name="entry.1647953674"
          placeholder="Subject"
        />
        <textarea
          class="input"
          type="text"
          name="entry.1182581278"
          placeholder="Your Message"
        />
        <button onClick={() => window.location.reload(false)} class="button" type="submit">
          Submit
        </button>
      </form>
      </div>
      <Nav />
    </>
  );
}

export default Contact;
