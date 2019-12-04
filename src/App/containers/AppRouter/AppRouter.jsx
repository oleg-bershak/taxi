import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map } from '../Map';
import { Login } from '../Login';
import { Signup } from '../Signup';
import { Profile } from '../Profile';
import { getIsLoggedIn } from '../../store/auth';

const currentPage = props => {
  const { isLoggedIn } = props;
  const loginPath = '/login';

  const PrivateRoute = ({ component: RouteComponent }) => (
    <Route
      render={routeProps =>
        isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to={loginPath} />
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
      <Redirect to="login" />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(currentPage);
