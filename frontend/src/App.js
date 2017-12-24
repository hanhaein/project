import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './routes/Login';
import Company from './routes/Company';
import Details from './routes/Details';

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <Switch>
                         <Route path="/login" component={Login}></Route>
                         <Route exact path="/company" component={Company}></Route>
                         <Route path="/company/:id" component={Details}></Route>
                      </Switch>
                  </div>
            </Router>
        )
    }
}

export default App;