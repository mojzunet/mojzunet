import * as React from "react";

export default class NotFoundPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    );
  }
}