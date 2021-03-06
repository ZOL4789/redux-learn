// 引入创建Store的方法
import {createStore} from 'redux'
// 引入Sum组件服务的Reducer
import sumReducer from './sum_reducer'

// 暴露store
export default createStore(sumReducer)