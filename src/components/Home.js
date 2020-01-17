import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="main">
          <div className="main-background">
            <h3>Orgulous Technologies</h3>
            <h1>We are Orgulous of what we do!</h1>
            <button className="btn">Learn More</button>
          </div>
        </section>
      </main>
    );
  }
}
export default Home;
