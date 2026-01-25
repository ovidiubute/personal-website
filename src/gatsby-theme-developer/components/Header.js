import React, { useState } from "react";
import { Link } from "gatsby";
import useIsCurrentPage from "gatsby-theme-developer/src/hooks/use-is-current-page";

export default ({ title, links, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <Link to={"/"} title={title} className="navbar-brand">
          <h1>{title}</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          {links.length > 0 && (
            <ul className="navbar-nav ml-auto">
              {links.map((link, index) => (
                <li key={index} className="nav-item">
                  <a
                    className={
                      "nav-link " +
                      (useIsCurrentPage(link.href, location) ? "active" : "")
                    }
                    href={link.href}
                    title={link.title}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
