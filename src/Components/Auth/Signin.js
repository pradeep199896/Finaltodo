import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ls from "local-storage";

class Signin extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handle = (e, name) => {
    let stateCopy = {};
    stateCopy[name] = e.target.value;
    this.setState(stateCopy);
  };
  check = () => {
    // if(this.state.email && this.state.password){
    //   this.props.dispatch({type:"LOGIN",payload:true})
    // }
    let userData = JSON.parse(ls.get("userData"));
    console.log(this.state);
    console.log(userData);
    let emailFound;
    for (let i = 0; i < userData.length; ++i) {
      if (userData[i].email === this.state.email) {
        emailFound = userData[i].email;
        if (userData[i].password === this.state.password) {
          this.props.dispatch({ type: "LOGIN", payload: true });
          this.setState({
            email: "",
            password: ""
          });
          alert("Login sucessfull");
        } else {
          alert("Please Check PASSWORD");
        }
      }
      if (!emailFound) {
        alert("Email not found");
      }
    }
  };
  render() {
    if (this.props.present) {
      return <Redirect to="/todolist" />;
    }
    return (
      <div>
        <div className="form">
          <input
            type="text"
            onChange={(e) => this.handle(e, "email")}
            value={this.state.email}
            placeholder="Email or Phonenumber"
          />
          <input
            type="password"
            onChange={(e) => this.handle(e, "password")}
            value={this.state.password}
            placeholder="password"
          />
          <button onClick={() => this.check()}>Signin </button>
          <div>
            <p style={{ marginBottom: "1px" }}>New User?</p>
            <Link to="/signup">
              <button
                style={{ marginTop: "3px", width: "150px" }}
                className="newUser"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    present: state.isLogin
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    dispatch: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
