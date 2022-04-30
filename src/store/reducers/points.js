import {
    SET_TRIP_POINTS, SET_TRIP
} from "../actions/actionTypes";

import {POINT1_NAME, POINT2_NAME, POINT3_NAME, POINT4_NAME} from "../pointNames";

const initialState = {
    map:{
        center: [55.762956, 37.781818],
        zoom:16,
        isScrollWheelZoom:true,
        polylineColor: { color: 'blue' }
    },
    points:[
        {
            name: POINT1_NAME,
            lat:55.762956, long: 37.781818
        },
        {
            name: POINT2_NAME,
            lat:55.712288, long: 37.845548
        },
        {
            name: POINT3_NAME,
            lat:55.760039, long: 37.619203
        },
        {
            name: POINT4_NAME,
            lat:55.878916, long: 37.529071
        },
    ],
    trip: {
        currentRequest:'',
        startPoint: {
            lat:'',
            long:''
        },
        endPoint: {
            lat:'',
            long:''
        },
        waypoint: []
    },
}

export default function pointsReducer(state = initialState, action) {
    switch (action.type) {

        //Set startpoint and endpoint
        case SET_TRIP_POINTS:
            return {
                ...state,
                trip:
                    {
                        ...state.trip,
                        ...action.payload
                    }
            }

        //Set all waypoint
        case SET_TRIP:
            return {
                ...state,
                trip:
                    {
                        ...state.trip,
                        waypoint: action.payload
                    }
            }

        default:
            return state
    }
}
