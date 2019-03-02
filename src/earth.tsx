import * as React from 'react';
import { Viewer, Entity } from "resium";
import Pin from "./pin";
import Image from "./image";
import styled from 'styled-components';


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
    image:string;
  }

interface Props {
    pins: Data[];
    images:ImageData[];
  }

interface State {
    pinsshow: boolean[];
    imagesshow: boolean[];
    pinsboolean:boolean;
  }

  const LISTMENU = styled.div`
  font-size: 1.0em;
  text-align: left;
  color: #ffffff;
  display: block;
  width:200px;
  background: #666666;
  position: absolute;
  top: 0px;
`;

  const Package = styled.div`
  display: block;
`;

const Package1 = styled.div`
display: block;
`;

export default class Earth extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            pinsshow: [true,true],
            imagesshow: [true,true],
            pinsboolean:true
          };
        this.clickAction = this.clickAction.bind(this); 
          // this.setTest = this.setTest.bind(this);
    }

    render() {
        console.log(this.state.pinsshow);
        return (
            <Viewer full>
                {this.props.pins.map((d, i) => {
                 return (
                    <Pin name={d.name} id={d.id} lon={d.lon} lon={d.lat} show={this.state.pinsshow[i]} />
                 );
                })}
                {this.props.images.map((d, i) => {
                 return (
                    <Image name={d.name} id={d.id} show={this.state.imagesshow[i]} image={d.image}/>
                    );
                })}
                <LISTMENU>
               <Package>
               <form id="imagelist1">
                    <ul>
                        {this.props.pins.map((d, i) => {
                        return (
                            <li>
                                <label>{d.name}</label>
                                <input type='checkbox' defaultChecked
                                    id={d.id} 
                                    key={d.id} 
                                    onClick={this.clickAction.bind(this)} 
                                />
                                {d.name}
                            </li>
                        );
                        })}
                    </ul>
                    </form>
                </Package>
                <Package1>
                <form id="imagelist">
                    <ul>
                        {this.props.images.map((d, i) => {
                        return (
                            <li>
                                <label>{d.name}</label>
                                <input type='checkbox' defaultChecked
                                    id={d.id} 
                                    key={d.id} 
                                    onClick={this.clickAction1} 
                                />
                                {d.name}
                            </li>
                        );
                        })}
                    </ul>
                </form>
                </Package1>
                </LISTMENU>
            </Viewer>
        );
    }
    clickAction = (e: any) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const copy = this.state.pinsshow.slice();
        copy[Number(target.id)] = target.checked;
        this.setState({pinsshow : copy});
    };
    private clickAction1 = (e: any) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log(this.state.imagesshow[target.id]+"a"+target.checked);
        const copy = this.state.imagesshow.slice();
        copy[Number(target.id)] = target.checked;
        this.setState({imagesshow : copy});
        console.log(copy[target.id]+"aa"+this.state.imagesshow[target.id]);
    };

    }
