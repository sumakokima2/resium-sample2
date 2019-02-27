import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { SingleTileImageryProvider } from "cesium";
import { Entity, ImageryLayer } from "resium";

const imageryProvider = new SingleTileImageryProvider({
    url: "./map01.png",
    rectangle: Cesium.Rectangle.fromDegrees(31.416667,34.333333, 34.416667,35.333333)
  });

  export default class Image extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <Entity
          name="RectangleGraphics"
          description="RectangleGraphics!!"
          position={Cartesian3.fromDegrees(31.416667,34.333333, 0)}>
          <ImageryLayer
            // rectangle={Cesium.Rectangle.fromDegrees(-97.5, 25.0, -88.0, 35.0)}
            alpha={0.5}
            imageryProvider={imageryProvider}
          />
        </Entity>
        );
    }
}
