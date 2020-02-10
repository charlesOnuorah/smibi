import { STOP_LOADING, START_LOADING } from "./type"

export const stopLoading = () => {
    return {type: STOP_LOADING, payload: ''}
}

export const startLoading = () => {
    return {type: START_LOADING, payload: ''}
}