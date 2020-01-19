import React from "react";
import "./Sidebar.css";
import student from "../imgs/student.jpg";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="category">
          <h2>Category</h2>
          <ul className="category-list">
            <li className="list-items">
              Software <span>(05)</span>
            </li>
            <li className="list-items">
              Techology <span>(05)</span>
            </li>
            <li className="list-items">
              Work <span>(05)</span>
            </li>
            <li className="list-items">
              Recent Trends <span>(05)</span>
            </li>
          </ul>
        </div>
        <div className="popular-post">
          <h2>Popular Posts</h2>
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
                How we cope up with modern technoloy advancement? ?
              </a>
            </div>
          </div>
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
                How we cope up with modern technoloy advancement? ?
              </a>
            </div>
          </div>
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
                How we cope up with modern technoloy advancement? ?
              </a>
            </div>
          </div>
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
                How we cope up with modern technoloy advancement? ?
              </a>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <h2>Newsletter</h2>
          <div className="form-element">
            <input type="email" className="input-element" placeholder="Email" />
            <button className="btn form-btn"> Subscribe</button>
          </div>
        </div>
        <div className="popular-tags">
          <h2> Popular Tags</h2>
          <div className="tags flex-row">
            <span className="tag">Software</span>
            <span className="tag">Technology</span>
            <span className="tag">Design</span>
            <span className="tag">Development</span>
            <span className="tag">Finance</span>
            <span className="tag">Projects</span>
          </div>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
