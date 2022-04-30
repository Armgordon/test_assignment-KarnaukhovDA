import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./actionTypes";

export function showLoader(){
    return{
        type: SHOW_LOADER
    }
}

export function hideLoader(){
    return{
        type: HIDE_LOADER
    }
}

export function showAlert(text){
    return dispatch =>{
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(()=>{
            dispatch(hideAlert())
        },3000)
    }


}

export function hideAlert(){
    return{
        type: HIDE_ALERT
    }
}