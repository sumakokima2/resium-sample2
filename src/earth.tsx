import * as React from 'react';
import { Viewer, Entity } from "resium";
import Pin from "./pin";
import Image from "./image";

interface Data {
    id: string;
    name: string;
    show: boolean;
  }

interface Props {
    pins: Data[];
  }
  interface State {
    pinsshow: boolean[];
    pinsboolean:boolean;
  }

  
export default class Earth extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            pinsshow: [true,true],
            pinsboolean:true
          };
          
          // this.setTest = this.setTest.bind(this);
    }

    render() {
        return (
            
            <Viewer full>
                {this.props.pins.map((d, i) => {
                 return (
                    <Pin name={d.name} id={d.id} show={this.state.pinsshow[i]}/>
                 );
                })}
                <Image />
                <form id="makiko">
          <ul>
          {this.props.pins.map((d, i) => {
                 return (
                    <li>
                    <label>{d.name}</label>
                        <input type="checkbox" 
                        id={d.id} 
                        key={d.id} 
                        
                        checked={this.state.pinsshow[i]}
                        onClick={this.clickAction} 
                         />
                {d.name}
              </li>
            );
            })}
          </ul>

        </form>
            </Viewer>
        );
    }
    private clickAction = (e: any) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(this.state.pinsshow[target.id]+"a"+target.checked);
        const copy = this.state.pinsshow.slice();
        copy[Number(target.id)] = target.checked;
        this.setState({pinsshow : copy});
        console.log(copy[target.id]+"aa"+this.state.pinsshow[target.id]);
    };

    }
