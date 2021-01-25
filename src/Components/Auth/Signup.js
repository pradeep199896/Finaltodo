import React from "react";
import ls from "local-storage";
import { Redirect } from "react-router-dom";
class SignUp extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
    repassword: "",
    move: false
  };
  UNSAFE_componentWillMount() {
    const fakeData = [];
    if (!ls.get("userData")) {
      ls.set("userData", JSON.stringify(fakeData));
    }
  }
  signup = (e, name) => {
    let stateCopy = {};
    stateCopy[name] = e.target.value;
    this.setState(stateCopy);
  };
  handleop = () => {
    if (this.state.email && this.state.password) {
      const info = { email: this.state.email, password: this.state.password };
      let someData = JSON.parse(ls.get("userData"));
      someData.push(info);
      ls.set("userData", JSON.stringify(someData));
      // ls.set("userData",JSON.stringify(info))
      if (ls.set("userData", JSON.stringify(someData))) {
        alert("SignUp sucess");
        this.setState({
          email: "",
          password: "",
          userName: "",
          repassword: "",
          move: true
        });
      }
    }
    if (!(this.state.email && this.state.password)) {
      alert("Enter details");
    }
  };
  render() {
    if (this.state.move) {
      return <Redirect to="/signin" />;
    }
    console.log(this.state);

    return (
      <div>
        <h2 style={{ textDecoration: "underline" }}>Sign up </h2>
        <div className="form1">
          <input
            type="text"
            value={this.state.userName}
            onChange={(e) => this.signup(e, "userName")}
            placeholder="UserName"
          />
          <input
            type="text"
            value={this.state.email}
            onChange={(e) => this.signup(e, "email")}
            placeholder="Email"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.signup(e, "password")}
            placeholder="password"
          />
          <input
            type="password"
            value={this.state.repassword}
            onChange={(e) => this.signup(e, "repassword")}
            placeholder="Re-password"
          />
          <button onClick={this.handleop}>Signup </button>
        </div>
      </div>
    );
  }
}
export default SignUp;
