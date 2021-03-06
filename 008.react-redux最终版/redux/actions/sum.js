// 1.用于Sum组件生成action对象
import {INCREASE, DECREASE} from '../constant'
// import store from './store'

// export default function createIncreaseAction(data){
//     return {type:'increase',data}
// }

// arg => ({data:arg}), 匿名函数返回对象, 不能 arg => {data:arg}
export const increase = data => ({type:INCREASE,data})

// export default function createDecreaseAction(data){
//     return {type:'decrease',data}
// }

export const decrease = data => ({type:DECREASE,data})

export const increaseAsync = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increase(data));
        }, time)
    }
}