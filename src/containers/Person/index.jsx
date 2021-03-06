import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'

import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {


    add = ()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const id = nanoid();
        const newPersonObj = {
            id:id,
            name:name,
            age:age
        }
        console.log(newPersonObj);
        this.props.addPerson(newPersonObj);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        return (
            <div>
                <h2>我是Person组件,上方组件求和为：{this.props.sum}</h2>
                <input type="text" ref={c => this.nameNode = c} placeholder="输入姓名"/>
                <input type="text" ref={c => this.ageNode = c} placeholder="输入年龄"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.persons.map((personObj)=>{
                            return <li key={personObj.id}>{personObj.age}----{personObj.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    //state => ({sum:state.sum,persons:state.persons}),
    state => ({...state}),
    {
        addPerson:createAddPersonAction
    }
)(Person)