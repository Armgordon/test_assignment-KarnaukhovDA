import {
    HIDE_LOADER,
    SHOW_LOADER
} from "../actions/actionTypes";

const initialState = {
    loading: false,
    alert: false,
    max_width: 700,
    min_width: 125

}

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case SHOW_LOADER:
            return{...state, loading: true}
        case HIDE_LOADER:
            return{...state, loading: false}
        default: return state
    }
}