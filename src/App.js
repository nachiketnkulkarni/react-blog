import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpSignIn from "./Login&RegisterPages/SignUpSignIn";
import Blog from "./Pages/Blog";
import SinglePost from "./Pages/Blog/SinglePost";
import Home from "./Pages/Home";
// import LoginPage from "./Pages/LoginPage";
import AddNewPost from "./Pages/SigninPages/AddNewPost";
import SigninDashboard from "./Pages/SigninPages/SigninDashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={SignUpSignIn} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/home' exact component={SigninDashboard} />
          <Route path='/add' exact component={AddNewPost} />
          <Route path='/post/:id' exact component={SinglePost} />
          {/* <Route path='/register' exact component={SignUpSignIn} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
