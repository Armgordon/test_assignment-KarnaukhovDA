import {takeEvery, put, call, select} from 'redux-saga/effects'
import {SET_GL_POINT, SET_LL_POINT, SET_TRIP_POINTS} from "../actions/actionTypes";
import {setTrip, setTripPoints} from "../actions/points";

export function* sagaWatcher(){
    yield takeEvery(SET_TRIP_POINTS, tripPointsWorker)
    yield takeEvery(SET_GL_POINT, changePointWorker.bind(this, 'GL'))
    yield takeEvery(SET_LL_POINT, changePointWorker.bind(this, 'LL'))

}


function* tripPointsWorker(){
    // yield put(showLoader())
    const trip = yield select((state) => state.pointsReducer.trip)
    const payload = yield call(fetchTripPoints.bind(this, trip.startPoint, trip.endPoint))
    const polyline = payload.routes[0].geometry.coordinates.map((coordinate)=>{
        let temp = coordinate[0]
        coordinate[0] = coordinate[1]
        coordinate[1] = temp
        return coordinate
    })
    yield put(setTrip(polyline))
    // yield put(hideLoader())
}

function* changePointWorker(pointType){
    const payload = {}
    const currentTrip = yield select(state => state.pointsReducer.trip)
    const allRequests = yield select(state => state.requestReducer.requests)
    const foundedRequest = allRequests.find((request)=>{
        return request.name === currentTrip.currentRequest
    })

    const allPoints = yield select(state => state.pointsReducer.points)
    if (pointType === 'GL') {
        const foundedPoint = allPoints.find((point)=>{
            return point.name === foundedRequest.pointGetLoad
        })

        payload.startPoint = {lat:foundedPoint.lat, long:foundedPoint.long}
        payload.endPoint = currentTrip.endPoint
    } else {
        const foundedPoint = allPoints.find((point)=>{
            return point.name === foundedRequest.pointLeaveLoad
        })
        payload.startPoint =currentTrip.startPoint
        payload.endPoint = {lat:foundedPoint.lat, long:foundedPoint.long}
    }

    yield put(setTripPoints(payload))

}

async function fetchTripPoints(startPoint, endPoint){
    const response = await fetch('http://router.project-osrm.org' +
                                        '/route/v1/car/' +
                                        `${startPoint.long},${startPoint.lat};` +
                                        `${endPoint.long},${endPoint.lat}` +
                                        '?overview=full' +
                                        '&geometries=geojson'
    )
    return await response.json()
}