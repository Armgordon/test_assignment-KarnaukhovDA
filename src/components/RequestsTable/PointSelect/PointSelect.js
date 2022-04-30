import React from 'react';
import { Select } from 'antd';
import {useSelector} from "react-redux";

const { Option } = Select;

const PointSelect = (props) => {
    const allPoints = useSelector(state => state.pointsReducer.points)

    function handleChange(value) {
        props.onSetPointHandler(value)
    }

    return(
        <Select defaultValue={props.currentValue} style={{ width: 140 }} onChange={handleChange}>
            {allPoints.map((point, index)=>{
                return(
                    <Option key={index} value={point.name}>{point.name}</Option>
                )
            })}
        </Select>
    );
};

export default PointSelect;