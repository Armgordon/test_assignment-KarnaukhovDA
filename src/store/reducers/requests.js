import {SET_GL_POINT, SET_LL_POINT} from "../actions/actionTypes";
import {POINT1_NAME, POINT2_NAME, POINT3_NAME, POINT4_NAME} from "../pointNames";

const initialState = {
    requests:[
        {
            id: 1,
            name:'Утренняя заявка',
            pointGetLoad: POINT1_NAME,
            pointLeaveLoad: POINT2_NAME
        },
        {
            id: 2,
            name:'Дневная заявка',
            pointGetLoad: POINT4_NAME,
            pointLeaveLoad: POINT1_NAME
        },
        {
            id: 3,
            name:'Вечерняя заявка',
            pointGetLoad: POINT3_NAME,
            pointLeaveLoad: POINT4_NAME
        }
    ]
}

function getChangedRequestArray(type, requests, fields){
    return requests.map((request)=>{
        if (request.id === fields.id) {
            return type === 'GL'
                ? {...request, pointGetLoad: fields.pointName}
                : {...request, pointLeaveLoad: fields.pointName}
        }
        return request
    })
}


export default function requestReducer(state = initialState, action) {
    switch (action.type) {

        case SET_GL_POINT:
            return {
                ...state,
                requests: [...getChangedRequestArray('GL', state.requests, action.payload)]
            }

        case SET_LL_POINT:
            return {
                ...state,
                requests: [...getChangedRequestArray('LL', state.requests, action.payload)]
            }



        default:
            return state
    }
}