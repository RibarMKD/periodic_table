import React from 'react';
import Elements from './Elements.js'
import Numbers from './Numbers'
import {arr} from './Id.js'
import MySearch from './MySearch.js';
import FooterLeft from './FooterLeft.js';
import FooterRight from './FooterRight.js';
import { throwStatement } from '@babel/types';


let mySound = new Audio('click.mp3');
class System extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr : arr,
            id: 1,
            hoveredNumber: '',
            soundOff: false,
        }
        this.check = this.check.bind(this);
        this.uncheck = this.uncheck.bind(this);
    }
    componentDidMount(){
            this.setState({
                arr: this.state.arr,
                id: this.state.arr.id,
            })       
    }
    check(event){
       this.setState({
           hoveredNumber: event.target.id,
       })
    }
    uncheck(event){
        this.setState({
            hoveredNumber: '',
        })
    }
    playSound = () =>{
        if(this.state.soundOff == false){
            mySound.play();
        }
        
    }
    muted = () => {
        this.setState({
            soundOff: !this.state.soundOff
        })
    }
    language = () => {
        this.props.language();
    }
    render(){ 
        return(
            <div id='System'>
                 <MySearch />
                <div className="text-center AC">
                    <h2>{this.props.title}</h2>
                </div>
                <div className='numbers'>
                {this.state.arr.map((e) =>{
                return(
                    <div key={e.id} className="">
                        <Numbers id={e.id} playSound={()=>this.playSound()} check={this.check} uncheck={this.uncheck} lang={this.props.lang}/>
                        {/* <button className={`btn btnData btn-${e}`} id={e}>{e}</button> */}
                    </div>
                   )
                })
                }  
                </div>
                <Elements playSound={()=>this.playSound()} class={this.state.class} hoveredNumber={this.state.hoveredNumber} lang={this.props.lang} legend={this.props.legend} legendOne={this.props.legendOne} legendTwo={this.props.legendTwo} legendThree={this.props.legendThree} legendFour={this.props.legendFour} legendFive={this.props.legendFour} legendSix={this.props.legendSix} legendSeven={this.props.legendSeven} legendEight={this.props.legendEight} legendNine={this.props.legendNine} legendTen={this.props.legendTen}/>
                {/* <div className='lan'>Lanthanides</div> */}
                <FooterLeft mute={()=>this.muted()} soundOff={this.state.soundOff} button={this.props.button} lang={this.props.lang} language={()=>this.language()}/>
                <FooterRight/>
            </div>
        )
    }
  
}
export default System;