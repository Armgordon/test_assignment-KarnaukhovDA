import {SET_TRIP_POINTS, SET_TRIP} from "./actionTypes";

export function setTripPoints(tripPoints){
    return {
        type:SET_TRIP_POINTS,
        payload:tripPoints
    }
}

export function setTrip(pointsArray){
    return {
        type:SET_TRIP,
        payload:pointsArray
    }
}
