import React, { Component } from 'react'

export default class Sum extends Component {

    state = {
        sum:0
    }

    increase = ()=>{
        const {value} = this.selectNumber;
        const {sum} = this.state;
        this.setState({sum:sum+value*1});
    }

    decrease = ()=>{
        const {value} = this.selectNumber;
        const {sum} = this.state;
        this.setState({sum:sum-value*1});
    }

    increaseIfOdd = ()=>{
        const {value} = this.selectNumber;
        const {sum} = this.state;
        if(sum % 2 === 1){
         this.setState({sum:sum+value*1});
        }
    }

    increaseAsync = ()=>{
        const {value} = this.selectNumber;
        const {sum} = this.state;
        // 定时器
        setTimeout(()=>{
            this.setState({sum:sum+value*1});
        }, 500)
        
    }
    render() {
        const {sum} = this.state;
        return (
            <div>
                <h1>当前求和为：{sum}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
                <button onClick={this.increaseIfOdd}>当前求和为奇数再+</button>
                <button onClick={this.increaseAsync}>异步+</button>
            </div>
        )
    }
}
