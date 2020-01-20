import React from "react";
import "./Content.css";
import student from "../imgs/student.jpg";
import Sidebar from "./Sidebar";

class Content extends React.Component {
  render() {
    return (
      <section className="container">
        <div className="site-content">
          <div className="posts">
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src={student} className="img" />
                </div>
                <div className="post-info flex-row">
                  <span>
                    <i className="fas fa-user text-grey"></i>
                    &nbsp;&nbsp;Admin
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-grey"></i>
                    &nbsp;&nbsp;January 19, 2020
                  </span>
                  <span>4 Comments</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ?
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ipsum suspendisse ultrices gravida dictum fusce
                  ut. Egestas maecenas pharetra convallis posuere. Neque
                  volutpat ac tincidunt vitae semper quis. Volutpat sed cras
                  ornare arcu. Laoreet suspendisse interdum consectetur libero
                  id faucibus nisl tincidunt eget. Semper feugiat nibh sed
                  pulvinar proin gravida hendrerit lectus a. Sem et tortor
                  consequat id porta nibh venenatis. Nunc mi ipsum faucibus
                  vitae aliquet nec. Molestie at elementum eu facilisis sed
                  odio. Vitae semper quis lectus nulla at volutpat diam ut.
                </p>
                <button className="btn post-btn">
                  read more &nbsp; <i className="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </div>
            </div>
            <hr />
            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src={student} className="img" />
                </div>
                <div className="post-info flex-row">
                  <span>
                    <i className="fas fa-user text-grey"></i>
                    &nbsp;&nbsp;Admin
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-grey"></i>
                    &nbsp;&nbsp;January 19, 2020
                  </span>
                  <span>4 Comments</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ?
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ipsum suspendisse ultrices gravida dictum fusce
                  ut. Egestas maecenas pharetra convallis posuere. Neque
                  volutpat ac tincidunt vitae semper quis. Volutpat sed cras
                  ornare arcu. Laoreet suspendisse interdum consectetur libero
                  id faucibus nisl tincidunt eget. Semper feugiat nibh sed
                  pulvinar proin gravida hendrerit lectus a. Sem et tortor
                  consequat id porta nibh venenatis. Nunc mi ipsum faucibus
                  vitae aliquet nec. Molestie at elementum eu facilisis sed
                  odio. Vitae semper quis lectus nulla at volutpat diam ut.
                </p>
                <button className="btn post-btn">
                  read more &nbsp; <i className="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </div>
            </div>
            <hr />

            <div className="post-content">
              <div className="post-image">
                <div>
                  <img src={student} className="img" />
                </div>
                <div className="post-info flex-row">
                  <span>
                    <i className="fas fa-user text-grey"></i>
                    &nbsp;&nbsp;Admin
                  </span>
                  <span>
                    <i className="fas fa-calendar-alt text-grey"></i>
                    &nbsp;&nbsp;January 19, 2020
                  </span>
                  <span>4 Comments</span>
                </div>
              </div>
              <div className="post-title">
                <a href="#">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ?
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas quis ipsum suspendisse ultrices gravida dictum fusce
                  ut. Egestas maecenas pharetra convallis posuere. Neque
                  volutpat ac tincidunt vitae semper quis. Volutpat sed cras
                  ornare arcu. Laoreet suspendisse interdum consectetur libero
                  id faucibus nisl tincidunt eget. Semper feugiat nibh sed
                  pulvinar proin gravida hendrerit lectus a. Sem et tortor
                  consequat id porta nibh venenatis. Nunc mi ipsum faucibus
                  vitae aliquet nec. Molestie at elementum eu facilisis sed
                  odio. Vitae semper quis lectus nulla at volutpat diam ut.
                </p>
                <button className="btn post-btn">
                  read more &nbsp; <i className="fas fa-arrow-right"></i>{" "}
                </button>{" "}
              </div>
            </div>
            <div className="pagination flex-row">
              <a href="#">
                <i className="fas fa-chevron-left"></i>
                <a className="page">1</a>
                <a className="page">2</a>
                <a className="page">3</a>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>
    );
  }
}
export default Content;
