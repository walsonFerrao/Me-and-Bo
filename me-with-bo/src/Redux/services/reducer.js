import {ADDALLSERVICES} from './action';

let initstate={

    services:[]

}


export const reducer=(store=initstate,{type,payload})=>{

switch (type) {
    case ADDALLSERVICES:
        return({...store,services:[...payload]})
        

    default:
        return store
}






}

