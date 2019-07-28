import React from 'react';
import {withRouter} from  'react-router-dom';
// let mySound = new Audio('click.mp3');
class Element extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            hovered: false,
        }
    }
    openElement = (el) =>{
        // console.log(props.el);
        if(el != undefined){
            this.props.history.push(`/main/${this.props.el}`);
        }   
    }
    onmouseover(e){
        this.setState({hovered:true});
        this.props.hoveredElement(e);
        
    }
    onmouseleave(){
        this.setState({hovered:false});
        
    }
    // playSound = () =>{
    //     console.log(mySound);
    //     mySound.play();
    // }
    render(){
        return( 
        <div  onClick={() => this.openElement(this.props.el)} onMouseOver={(e) => this.onmouseover(e)}  onMouseLeave={() => this.onmouseleave()} onMouseEnter={this.props.play} className={`Element element-${this.props.number} element-${this.props.class}-${this.props.hoveredNumber} hov`}>
        <div className="d-flex justify-content-between">
             <div className={"number " + (this.state.hovered ? 'hidden': '')}>
                 {this.props.number}
             </div>
             <div className={"shells " + (this.state.hovered ? 'hidden': '')}>{this.props.shells}</div>
         </div>
         <div className="text-center">
             <div className="symbol">{this.props.symbol}</div>
             <div className="name">{this.props.name}</div>
         </div>
            <div className={"mass " + (this.state.hovered ? 'hidden': '')}>{this.props.atomic_mass}
            </div>
        </div>
        )
    }
}
export default withRouter(Element);