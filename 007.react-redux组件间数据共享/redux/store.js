// 引入创建Store的方法createStore,中间件支持applyMiddleware
import {createStore, applyMiddleware,combineReducers} from 'redux'
// 引入Sum组件服务的Reducer
import sumReducer from './reducers/sum'
// 引入Person组件服务的Reducer
import personReducer from './reducers/person'
// 引入redux-thunk，支持异步action
import thunk from 'redux-thunk'

// 整合reducers
const allReducers = combineReducers({
    persons:personReducer,
    sum:sumReducer
})

// 暴露store
export default createStore(allReducers,applyMiddleware(thunk))