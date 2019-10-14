import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "../components/layouts/Header/Header";
import { auth, createUserDocument } from "../firebase";
import Auth from "../pages/Auth/Auth";
import Checkout from "../pages/Checkout/Checkout";
import Homepage from "../pages/Homepage/Homepage";
import Shop from "../pages/Shop/Shop";
import { setCurrentUserAction } from "../store/actions/userActions";

const Routes = ({ currentUser, setCurrentUserAction }) => {
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (!user) return setCurrentUserAction(null);
      const userRef = await createUserDocument(user);
      userRef.onSnapshot(snapshot => {
        setCurrentUserAction({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    });
    return () => unSubscribeFromAuth();
  }, [setCurrentUserAction]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Auth />)}
        />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({
  setCurrentUserAction: user => dispatch(setCurrentUserAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
