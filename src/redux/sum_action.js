// 1.用于Sum组件生成action对象
import {INCREASE, DECREASE} from './constant'
import store from './store'

// export default function createIncreaseAction(data){
//     return {type:'increase',data}
// }

// arg => ({data:arg}), 匿名函数返回对象, 不能 arg => {data:arg}
export const createIncreaseAction = data => ({type:INCREASE,data})

// export default function createDecreaseAction(data){
//     return {type:'decrease',data}
// }

export const createDecreaseAction = data => ({type:DECREASE,data})

export const createIncreaseAsyncAction = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncreaseAction(data));
        }, time)
    }
}