import React from 'react';
import { Route } from 'react-router-dom';

class MyRouter extends React.Component {
    render() {
        const {
            component,
            path,
        } = this.props;
        return (
            <Route
                path={path}
                component={component}
            />
        );
    }
}

export default MyRouter;
