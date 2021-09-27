import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";
import { Post } from "../pages/Post";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NewPost} exact path="/newpost" />
        <Route component={Post} exact path="/post/:id" />
      </Switch>
    </BrowserRouter>
  );
};
