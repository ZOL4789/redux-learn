// 引入创建Store的方法createStore,中间件支持applyMiddleware
import {createStore, applyMiddleware} from 'redux'
// 引入Sum组件服务的Reducer
import sumReducer from './sum_reducer'
// 引入redux-thunk，支持异步action
import thunk from 'redux-thunk'

// 暴露store
export default createStore(sumReducer,applyMiddleware(thunk))