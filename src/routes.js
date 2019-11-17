import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './components/Form';
import List from './components/List';
import NotFound from './components/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/tracking/:id" component={List} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}