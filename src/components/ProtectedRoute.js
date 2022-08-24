import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
<<<<<<< HEAD
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
=======
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
>>>>>>> feat/authorization
      }
    </Route>
  );
};

export default ProtectedRoute;
