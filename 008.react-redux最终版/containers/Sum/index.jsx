import React, { Component } from 'react'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
 
import {increase,decrease,increaseAsync} from '../../redux/actions/sum'

class Sum extends Component {

    increase = ()=>{
        const {value} = this.selectNumber;
        console.log(this.props);
        this.props.increase(value*1);
    }

    decrease = ()=>{
        const {value} = this.selectNumber;
        this.props.decrease(value*1);
    }

    increaseIfOdd = ()=>{
        const {value} = this.selectNumber;
        if(this.props.sum % 2 === 1){
            this.props.increase(value*1);
        }
    }

    increaseAsync = ()=>{
        const {value} = this.selectNumber;
        this.props.increaseAsync(value*1, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.props.sum}，下方人数总和为：{this.props.persons.length}</h1>
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

// 创建并暴露SumUI组件的容器组件
export default connect(
    state=>({sum:state.sum,persons:state.persons}),
    {
        increase,
        decrease,
        increaseAsync
    }
)(Sum);

