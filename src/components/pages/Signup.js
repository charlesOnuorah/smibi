import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import FormField from "../utils/FormField";
import { AUTH_URL, JOIN } from "../../services/api";
import Axios from "axios";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    male: false,
    female: "",
    username: "",
    password: ""
  };
  render() {
    const { name, email, password, male, female, username, phone } = this.state;
    return (
            <div className="container">
              <div className="row justify-content-center mt-5">
                <form
                  className="col-md-4 mt-5"
                  style={{ background: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div class="text-center mt-4">
                    <img src="../favicon.ico" alt="logo" />
                    <h6 className="text-light font-weight-bold mb-4">
                      SIMBIHealth
                    </h6>
                  </div>
                  <FormField
                    id="name"
                    placeholder="Full Name"
                    type="text"
                    value={name}
                    onChange={this.onChange}
                  />
                  <FormField
                    id="email"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={this.onChange}
                  />
                  <FormField
                    id="phone"
                    placeholder="Phone Number"
                    type="text"
                    value={phone}
                    onChange={this.onChange}
                  />
                  <div className="row mt-2 ml-1">
                    <h6 className="text-light mr-2">Gender</h6>
                    <div className="col-md-4">
                      <input
                        className="mr-2"
                        type="checkbox"
                        checked={male}
                        id="male"
                        value={male}
                        onClick={() => this.setState({ male: true })}
                      />
                      <label className="text-light" for="male">
                        Male
                      </label>
                    </div>
                    <div className="col-md-5">
                      <input
                        className="mr-2"
                        type="checkbox"
                        checked={!male}
                        id="female"
                        value={female}
                        onClick={() => this.setState({ male: false })}
                      />
                      <label className="text-light" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                  <FormField
                    id="username"
                    placeholder="Choose a Username"
                    type="text"
                    value={username}
                    onChange={this.onChange}
                  />
                  <FormField
                    id="password"
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={this.onChange}
                  />
                  <input
                    className="btn btn-danger mt-2"
                    disabled={!password || !email || !username}
                    type="button"
                    value="Sign Up"
                    onClick={e => this.handleSignup(e, this.state)}
                  />
                  <div className="my-2">
                    <Link>Back</Link>
                  </div>
                </form>
              </div>
            </div>
    );
  }

  onChange = ({ target: { id, value } }) => {
    this.setState({
      [id]: value
    });
  };

  handleSignup(e, data) {
    e.preventDefault();

    Axios.post(JOIN, data)
      .then(result => {
        //Do something with response
        alert("Registered");
      })
      .catch(err => {
        // Do something with reponse
        alert(err.response.data.message);
      });
    // AuthController.signup(data)
  }
}

export default Signup;
