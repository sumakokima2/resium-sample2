import * as React from 'react';
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import Pin from "./pin";

interface Data {
    id: string;
    name: string;
    show: boolean;
  }

interface Props {
    pins: Data[];
  }
  interface State {
    listItems:string;
  }

export default class Earth extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
    }
    

    render() {
        console.log(this.listItems);
        return (
            <Viewer full>
                {this.props.pins.map((d, i) => {
                 return (
                    <Pin defaultName={d.name} />
                 );
                })}
                <form>
          <ul>
              
          </ul>
        </form>
            </Viewer>
        );
    }
}
