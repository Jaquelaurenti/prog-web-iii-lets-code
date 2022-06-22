import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewRunning from './pages/NewRunning'
import RequestRace from './pages/RequestRace'
import FinishRace from './pages/FinishRace'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/running/new" component={NewRunning} />
        <Route path="/race/new" component={RequestRace} />
        <Route path="/race/finish" component={FinishRace} />

      </Switch>
    </BrowserRouter>
  )
}

// utilizamos o exact para indicar qual será o caminho exato
// da página inicial se não o react interpreta sempre  começo que seria as barras
