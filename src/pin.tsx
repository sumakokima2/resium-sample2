import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

export default class Pin extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { name: this.props.name };
    }

    public handleChange(event: any) : void {
        this.setState({ name: "Charles" });
    }

    public render() {
        return (
            <Entity
            name= { this.state.name }
            position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
            point={{ pixelSize: 10 }}
            description="hoge"
          />
        );
    }
}
