// 1.用于创建一个为Sum组件服务的Reducer
// 2.reducer会接收两个参数，一个是之前的状态（prestate），一个是动作对象（action）
import {INCREASE, DECREASE} from '../constant'

// 设置初始值
const initState = 0;

export default function sumReducer(preState = initState, action){
    const {type, data} = action;
    switch (type) {
        case INCREASE:
            return preState + data;
        case DECREASE:
            return preState - data;
        default:
            return preState;
    }
}