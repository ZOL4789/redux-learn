import React, { Component } from 'react'

import store from '../../redux/store'

export default class Sum extends Component {

    // componentDidMount(){
    //     // 检测redux中状态的变化，只要变化，就更新状态
    //     store.subscribe(()=>{
    //         this.setState({});
    //     })
    // }

    increase = ()=>{
        const {value} = this.selectNumber;
        store.dispatch({type:'increase', data:value*1});
    }

    decrease = ()=>{
        const {value} = this.selectNumber;
        store.dispatch({type:'decrease', data:value*1});
    }

    increaseIfOdd = ()=>{
        const {value} = this.selectNumber;
        const sum = store.getState();
        if(sum % 2 === 1){
            store.dispatch({type:'increase', data:value*1});
        }
    }

    increaseAsync = ()=>{
        const {value} = this.selectNumber;
        // 定时器
        setTimeout(()=>{
            store.dispatch({type:'increase', data:value*1});
        }, 500)
        
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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
