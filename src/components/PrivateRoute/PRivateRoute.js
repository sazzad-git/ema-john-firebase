import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PRivateRoute = ({children}) => {
    const {user} = useAuth();
    let location = useLocation();


  if (user?.email) {
      return children;
  }

  return <Navigate to="/login" state={{ from: location }
  } replace />;
};

export default PRivateRoute;