import React from "react";
import { hot } from "react-hot-loader";

import Earth from './earth';
import loadData from "./data_app";
import loadImage from "./loadimage";

interface Data {
  id: string;
  name: string;
  show: boolean;
  lon: number;
  lat: number;
}

interface ImageData {
  id: string;
  name: string;
  show: boolean;
  image: string;
}


interface State {
  data:Data[];
  imagedata:ImageData[];
}

class App extends React.PureComponent<{}, State> {
  state = {
    data: [],
    imagedata: []
  };
  componentDidMount() {
    this.loadData();
    this.loadImage();
    
  }

  async loadData() {
    const result = await loadData();
    this.setState({ 
      data: result.data,
    });
  }
  async loadImage() {
    const result = await loadImage();
    this.setState({
      imagedata: result.data,
    });
  }

  render() {
    return <Earth pins={this.state.data} images={this.state.imagedata}/>;
  }
}

export default hot(module)(App);
  
  
  
// export default hot(module)(App);