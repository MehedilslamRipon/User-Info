// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import UserDetails from './components/UserDetails/UserDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/">
                  <Home></Home>
               </Route>

               <Route path="/user-details/:userId">
                  <UserDetails></UserDetails>
               </Route>

               <Route path="*">
                  <NoMatch></NoMatch>
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
