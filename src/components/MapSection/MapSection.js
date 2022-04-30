import React from 'react';
import classes from './MapSection.module.scss'
import Map1 from "../Map1/Map1";

const MapSection = () => {
    return (
        <>
            <Map1 className={classes.MapSection}/>
        </>
    );
};

export default MapSection;