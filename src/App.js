import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  //setting up user auth with google
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {/*if there is no user logged in show Login screen */}
      {!user ? (
        <Login />
      ) : (
        //if user is logged in show main app body
        <div className="app__body">
          {/*conditionally render if user is logged in*/}

          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )
      }
    </div >
  );
}

export default App;
