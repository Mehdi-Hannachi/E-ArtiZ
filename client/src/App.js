import LandingPage from "components/LandingPage/LandingPage";

import LoginPage from "components/LoginPage/LoginPage";
import ProfilePage from "components/ProfilePage/ProfilePage";
import SignUp from "components/RegisterPage/SignUp";
import { useDispatch, useSelector } from "react-redux";
import Index from "comps/Index";
import React, { useEffect,useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getProfile } from "components/JS/actions/userActions";
import AddProduct from "components/Products/AddProduct";
import Productlist from "components/Products/Productlist";

const App = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();

 

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route exact path="/add" render={(props) => <AddProduct {...props} />} />

        <Route
          exact
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          exact
          path="/register-page"
          render={(props) => <SignUp {...props} />}
        />
        <Route
          exact
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          exact
          path="/other-components"
          render={(props) => <Index {...props} />}
        />



      <Route
        exact
        path="/product-list"
        render={() => (
          <Productlist />
        )}
      />

      
      </Switch>
    </div>
  );
};

export default App;
