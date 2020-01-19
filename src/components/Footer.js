import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="about-us">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
            </p>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <p>get the latest updates</p>
            <div className="form-element">
              <input type="text" placeholder="Email" />
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
          <div className="address">
            <h2>Address</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="follow">
            <h2>Follow Us</h2>
            <p>Connect with us</p>
            <div>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="rights flex-row">
          <h4>Copyright @ Orgulous Technologies, {new Date().getFullYear()}</h4>
        </div>
        <div
          className="move-up"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <span>
            <i className="fas fa-arrow-circle-up fa-2x"></i>
          </span>
        </div>
      </footer>
    );
  }
}
export default Footer;
