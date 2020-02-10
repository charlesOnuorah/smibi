import { STOP_LOADING, START_LOADING } from "../actions/type"

const INITIAL_STATE = {
    loading: true
}

export default (state=INITIAL_STATE, actions) => {
    switch(actions.type){
        case START_LOADING:
            return {...state, loading: true}
        case STOP_LOADING:
            return {...state, loading:false}
        default:
            return {...state}
    }
}