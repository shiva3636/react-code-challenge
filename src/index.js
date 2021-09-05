import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import RouteWrapper from './Layoutwrapper';
import Login from './Login';
import Register from './Register';
import List from './List';

ReactDOM.render(
  
    <BrowserRouter>
   
    <Switch>
        <RouteWrapper path="/" component={Login} layout={App} exact />
        <RouteWrapper path="/register" component={Register} layout={App} />
        <RouteWrapper path="/userlist" component={List} layout={App} />
       
      </Switch>
        
     
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
