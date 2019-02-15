import * as React from 'react';
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import Pin from "./pin";

export default class Earth extends React.Component<any, any> {
    constructor(props: any){
        super(props);
    }


    public render() {
        return (
            <Viewer full>
      <Pin defaultName='World' />

    
      </Viewer>
        );
    }
}
