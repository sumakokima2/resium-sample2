import React from "react";
import { hot } from "react-hot-loader";

import Earth from './earth';
import loadData from "./data_app";

interface Data {
  id: string;
  name: string;
}

interface State {
  data:Data[];
}

class App extends React.PureComponent<{}, State> {
  state = {
    data: []
  };
  componentDidMount() {
    this.loadData();
    
  }

  async loadData() {
    const result = await loadData();
    this.setState({
      data: result.data,
    });
  }


  render() {
    return <Earth pins={this.state.data}/>;
  }
}

export default hot(module)(App);
  
  
  
// export default hot(module)(App);