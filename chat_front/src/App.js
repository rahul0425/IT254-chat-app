import React from "react"
import { BrowserRouter } from "react-router-dom";
import {Route} from "react-router-dom"
import {Switch} from "react-router-dom"

import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import DashboardPage from "./Pages/DashboardPage"

function App() {
  return (<BrowserRouter>
  <Switch>
    <Route path='/login' component = {LoginPage}/>
    <Route path='/register' component = {RegisterPage}/>
    <Route path='/dashboard' component = {DashboardPage}/>
  </Switch>
</BrowserRouter>)
}

export default App;
