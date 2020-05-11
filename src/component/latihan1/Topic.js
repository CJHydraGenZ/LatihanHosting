import React from "react";
import { useParams } from "react-router-dom";

export function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  //   let { topicId } = useParams();

  return (
    <div>
      <h1>topic 1</h1>
    </div>
  );
}
