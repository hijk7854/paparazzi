import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EditorPage, NotFoundPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={EditorPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default App;