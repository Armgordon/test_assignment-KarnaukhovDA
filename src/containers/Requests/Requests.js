import React from 'react';
import classes from './Bids.module.scss'
import BidList from "../../components/RequestList/BidList";
import MapSection from "../../components/MapSection/MapSection";
import {Row, Col} from "antd";

const Requests = () => {

    return (
        <Row className={classes.Bids}>
            <Col flex={1}>
                <BidList/>
            </Col>
            <Col flex={7}>
                <MapSection/>
            </Col>
        </Row>
    );
};

export default Requests;