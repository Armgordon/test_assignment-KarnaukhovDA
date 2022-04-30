import React from 'react';
import classes from './Map1.module.scss'
import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import {useSelector} from "react-redux";

const Map1 = () => {
    const mapState = useSelector(state => state.pointsReducer.map)
    const trip = useSelector(state => state.pointsReducer.trip)


    return (
        <MapContainer center={mapState.center} zoom={mapState.zoom} scrollWheelZoom={mapState.isScrollWheelZoom} className={classes.Map1}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={mapState.polylineColor} positions={trip.waypoint} />,
            {trip.currentRequest
                ? (<>
                    <Marker position={[trip.startPoint.lat, trip.startPoint.long]}>
                        <Popup> Start point </Popup>
                    </Marker>,
                    <Marker position={[trip.endPoint.lat, trip.endPoint.long]}>
                    <Popup> End Point </Popup>
                    </Marker>
                </>)
                : <Marker position={[55.762956, 37.781818]}>
                    <Popup> INTELOGIS </Popup>
                </Marker>
            }
        </MapContainer>
    );
};

export default Map1;