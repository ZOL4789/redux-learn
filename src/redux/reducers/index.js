// 汇总Reducers

// 引入combineReducers汇总reducers
import {combineReducers} from 'redux'


// 引入Sum组件服务的Reducer
import sum from './sum'
// 引入Person组件服务的Reducer
import persons from './person'



// 整合reducers
export default combineReducers({
    persons,
    sum
})