import React, { Component } from "react";
import FormField from "../utils/FormField";
import { Consumer } from "../../context";

class Profile extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="row justify-content-center mt-5">
                <div
                  className="col-sm-1"
                  style={{ fontSize: "4rem", color: "#00b0f3" }}
                >
                  <i className="fas fa-plus-circle"></i>
                  <p
                    className="font-weight-light"
                    style={{
                      fontSize: "1rem",
                      marginTop: "-1rem",
                      color: "#000"
                    }}
                  >
                    Ask a question
                  </p>
                </div>
                <div className="col-sm-5">
                  <div className="circle-parent mx-auto">
                    <div className="circle p-0">
                      <img src="../abuse.jpg" alt="domestic" />
                    </div>
                  </div>
                  <h6 className="text-light font-weight-bold text-center">
                    Adeosun Adeoye
                  </h6>
                  <form className="col-md-11 mx-auto mt-5">
                    <FormField
                      id="status"
                      placeholder="Type a status"
                      type="text"
                    />
                    <label className="text-warning" htmlFor="username">
                      Username
                    </label>
                    <FormField
                      id="username"
                      placeholder="Adekinging"
                      type="text"
                    />
                    <label className="text-warning" htmlFor="quote">
                      Favourite Quote
                    </label>
                    <div className="group">
                      <textarea
                        id="quote"
                        placeholder="In the new world of fame and glory, would love to imagine the"
                      />
                      <span class="bar"></span>
                    </div>
                    <label className="text-warning col-md-11 p-0">
                      Latest Activities
                    </label>
                    <input
                      className="btn btn-danger mt-2"
                      type="button"
                      value="Logout"
                    />
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Profile;
