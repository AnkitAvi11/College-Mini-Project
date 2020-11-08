import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../components/Home/Main';
import NotFound from "../components/Notfound";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <Switch>
                <Route path={`${this.props.match.path}`} 
                    component={MainPage}
                    loggedin={this.props.loggedin}
                />
                <Route
                component={ NotFound }
                />
            </Switch>
        )
    }

}

export default Home;