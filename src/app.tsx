import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";
import Earth from './earth';

interface State {
}

class App extends React.PureComponent<{}, State> {
  state = {
  };

  public render() {
    return <Earth />;
  }
}

export default hot(module)(App);
  
  
  
// export default hot(module)(App);