import {ADD_PERSON} from '../constant'


const initState = [{id:-1,name:'unknown',age:-1}]
export default function persons(preState=initState,action){
    const {type, data} = action;
    switch(type){
        case ADD_PERSON:
            return [data,...preState];
        default:
            return preState;
    }
}