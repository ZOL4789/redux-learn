// 引入创建Store的方法createStore,中间件支持applyMiddleware
import {createStore, applyMiddleware} from 'redux'
// 引入redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入redux-thunk，支持异步action
import thunk from 'redux-thunk'

// 引入reducers
import reducers from './reducers'

// 暴露store
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))