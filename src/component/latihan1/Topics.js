import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { Topic } from "./Topic";
import { Topic2 } from "./Topic2";
import { Topic3 } from "./Topic3";
export function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/topic`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/topic2`}>sdadadComponents</Link>
        </li>
        <li>
          <Link to={`${url}/topic3`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        {/* <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route> */}
        <Route exact path={`${path}/topic`}>
          <Topic />
        </Route>
        <Route path={`${path}/topic2`}>
          <Topic2 />
        </Route>
        <Route path={`${path}/topic3`}>
          <Topic3 />
        </Route>
      </Switch>
    </div>
  );
}
