import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewPost } from "../pages/NewPost";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NewPost} exact path="/newpost" />
      </Switch>
    </BrowserRouter>
  );
};
