import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/*sidebar*/}
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </Router>
      </div>
    </div >
  );
}

export default App;
