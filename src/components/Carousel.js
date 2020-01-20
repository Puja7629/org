import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import mobile from "../imgs/mobile.jpg";

class Carousel extends React.Component {
  state = {
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      560: {
        items: 2
      },
      960: {
        items: 3
      }
    }
  };
  render() {
    return (
      <section>
        <div className="blog">
          <div className="container">
            <OwlCarousel
              className="owl-theme owl-carousel blog-post"
              loop={true}
              autoplay={true}
              margin={10}
              autoplayTimeout={3000}
              nav={true}
              dots={false}
              items={3}
              navText={[
                `<span class= 'owl-nav-prev' > <i class='fas fa-long-arrow-alt-left'></i></span>`,
                `<span class='owl-nav-next'><i class='fas fa-long-arrow-alt-right'></i></span>`
              ]}
              responsive={this.state.responsive}
            >
              <div class="blog-content">
                <img src={mobile} />
                <div className="blog-title">
                  <h3>Lorem ipsum dolor </h3>
                  <button className="btn btn-blog">Web Development</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div class="blog-content">
                <img src={mobile} />
                <div className="blog-title">
                  <h3>Lorem ipsum dolor </h3>
                  <button className="btn btn-blog">Web Development</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div class="blog-content">
                <img src={mobile} />
                <div className="blog-title">
                  <h3>Lorem ipsum dolor </h3>
                  <button className="btn btn-blog">Web Development</button>
                  <span>2 minutes</span>
                </div>
              </div>
              <div class="blog-content">
                <img src={mobile} />
                <div className="blog-title">
                  <h3>Lorem ipsum dolor </h3>
                  <button className="btn btn-blog">Web Development</button>
                  <span>2 minutes</span>
                </div>
              </div>
            </OwlCarousel>
            {/* <div className="owl-navigation">
              <span className="owl-nav-prev">
                <i className="fas fa-long-arrow-alt-left"></i>
              </span>
              <span className="owl-nav-next">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
export default Carousel;
