import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({isloggedin, component : Component, ...rest}) => {
    return <Route 
        {...rest}
        component = {
            (props) => (
                isloggedin ? 
                <Component 
                {...props}
                isloggedin={isloggedin}
                /> : 
                <Redirect 
                to="/unauthenticated"
                />
            )
        }
    />
}

export default PrivateRoute