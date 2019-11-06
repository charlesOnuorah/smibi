import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import FormField from "../utils/FormField";
import AuthService from "../../services/api-services";
import { GOOGLE_AUTH } from "../../services/api";

class Signin extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    const { username, password } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="row justify-content-center mt-5">
                <form className="col-md-4 mt-5">
                  <div class="text-start mt-4">
                    <h2 className="text-light">Welcome to</h2>
                    <h2 className="text-light ">SIMBIHealth</h2>
                    <h6 className="text-light font-weight-lighter">
                      An educative, informative and entertaining platform for
                      Teens, Youths and young africans. An exciting way of
                      expressing yourself amd leraning new things medically
                    </h6>
                  </div>
                  <FormField
                    value={username}
                    id="username"
                    onChange={this.onChange}
                    placeholder="Username"
                    type="text"
                  />
                  <FormField
                    id="password"
                    value={password}
                    onChange={this.onChange}
                    placeholder="Password"
                    type="password"
                  />
                  <input
                    className="btn btn-success my-2"
                    type="button"
                    value="Sign In"
                    disabled={!password || !username}
                    onClick={e => this.handleLogin(e, this.state)}
                  />
                  <div>
                    <i className="fab fa-facebook-square fa-2x text-light mr-5"></i>
                    <a href={GOOGLE_AUTH}>
                      <i className="fas fa-envelope fa-2x text-danger"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }

  onChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    });
  };

  handleLogin(e, data) {
    e.preventDefault();

    AuthService.login(data)
      .then(result => {
        //Do something with data
        console.log(result.data.data);
      })
      .catch(err => {
        //Do something with the error
        alert(err.response.data);
      });
  }
}

export default Signin;
