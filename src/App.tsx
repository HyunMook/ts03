import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Board from './components/Board';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/post/read/:seq" component={() => <Post pType="read" />} />
        <Route path="/post/edit/:seq" component={() => <Post pType="edit" />} />
        <Route path="/post/write" component={() => <Post pType="write" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
