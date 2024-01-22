import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/ryanharrishtx" target="_blank" rel="noreferrer">
            Ryan Chrisenberry
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/ryanchrisenberry/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.ithnk.org/" target="_blank" rel="noreferrer">
            Technical Writing Professional Site
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;