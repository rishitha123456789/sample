import React,{Component}from "react";

class CounterApp extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                
                <button  onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <button className="reset" onClick={this.handleReset.bind(this)}>reset</button>
                
            </div>
        )
    }
}
export default CounterApp