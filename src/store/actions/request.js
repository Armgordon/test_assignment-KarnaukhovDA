import {
    SET_GL_POINT, SET_LL_POINT
} from "./actionTypes";

export function setGLPoint(id, pointName){
    return{
        type: SET_GL_POINT,
        payload: {
            id,
            pointName
        }
    }
}

export function setLLPoint(id, pointName){
    return{
        type: SET_LL_POINT,
        payload: {
            id,
            pointName
        }
    }
}

