// 引入redux
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入Sum UI组件
import SumUI from '../../components/Sum'

import {createIncreaseAction,createDecreaseAction,createIncreaseAsyncAction} from '../../redux/sum_action'

function mapStateToProps(state){
    return {sum:state};
}

function mapDispatchToProps(dispatch){
    return {
        increase:number=>dispatch(createIncreaseAction(number)),
        decrease:number=>dispatch(createDecreaseAction(number)),
        increaseAsync:(number,time)=>{dispatch(createIncreaseAsyncAction(number, time))}
    }
}


// 创建并暴露SumUI组件的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(SumUI);

