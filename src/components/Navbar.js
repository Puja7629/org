import React from "react";
import "./Navbar.css";
class Navbar extends React.Component {
  state = {
    className: "nav"
  };
  render() {
    return (
      <nav className={`nav ${this.state.className}`}>
        <div className="nav-menu flex-row">
          <div className="nav-brand">
            <a classname="text-grey">Orgulous</a>
          </div>

          <div
            className="toggle-collapse"
            onClick={() =>
              this.state.className === "nav"
                ? this.setState({ className: "collapse" })
                : this.setState({ className: "nav" })
            }
          >
            <div className="toggle-icon">
              <i className="fas fa-bars"></i>
            </div>
          </div>

          <div>
            <ul className="nav-items">
              <li className="nav-link">
                <a>Home</a>
              </li>
              <li className="nav-link">
                <a>Services</a>
              </li>
              <li className="nav-link">
                <a>About</a>
              </li>
              <li className="nav-link">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="social text-grey">
            <a>
              {" "}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a>
              {" "}
              <i className="fab fa-instagram"></i>
            </a>
            <a>
              {" "}
              <i className="fab fa-twitter"></i>
            </a>
            <a>
              {" "}
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
