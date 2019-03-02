import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

interface Props {
    name: string;
    show: boolean;
    id: string;
    lon: number;
    lat: number;
  }

export default class Pin extends React.Component<Props, any> {
    constructor(props: any){
        super(props);
    }

    componentDidMount() {
//        alert(this.props.show);
      }


    public render() {
       

        console.log(this.props.show);
        return (
            <Entity
            name= { this.props.name }
            position={Cartesian3.fromDegrees(this.props.lon, 30, 100)}
            point={{ pixelSize: 10 }}
            description="hoge"
            show={this.props.show}

          />
        );
    }
}
