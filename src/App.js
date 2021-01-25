import "./styles.css";
import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import TodoList from "./Components/TodoList";
import Auth from "./Components/Auth";
function PrivateRoute(props) {
  const { exact, path, Component, isLogin } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        if (!isLogin) {
          return <Redirect to="/signin" />;
        } else {
          return <Component />;
        }
      }}
    />
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          {/* <Home /> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path='/todolist' component={TodoList}/> */}
          <PrivateRoute
            exact={true}
            path="/todolist"
            isLogin={this.props.isLogin}
            Component={TodoList}
          />
          <Auth />
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  };
};
export default connect(mapStateToProps)(App);
