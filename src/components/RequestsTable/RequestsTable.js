import React, { useRef } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Table } from 'antd';
import PointSelect from "./PointSelect/PointSelect";
import {setGLPoint, setLLPoint} from "../../store/actions/request";
import {setTripPoints} from "../../store/actions/points";


const RequestsTable = () => {
    const requests = useSelector(state => state.requestReducer.requests)
    const allPoints = useSelector(state => state.pointsReducer.points)
    const currentRequest = useSelector(state => state.pointsReducer.trip.currentRequest)
    const dispatch = useDispatch()

    let selectedRowKeysArray = useRef([])

    function setGLPointHandler(id, pointName){
        dispatch(setGLPoint(id, pointName))
    }

    function setLLPointHandler(id, pointName){
        dispatch(setLLPoint(id,pointName))
    }

    function requestClickHandler(rowData){
        const payload = { currentRequest: rowData.name}

        allPoints.filter((point)=>{
            if (point.name === rowData.getLoadPoint.pointName) return point
            if (point.name === rowData.leaveLoadPoint.pointName) return point
        }).forEach((foundedPoint) => {
            if (foundedPoint.name === rowData.getLoadPoint.pointName){
                payload.startPoint = {lat:foundedPoint.lat,long:foundedPoint.long}
            } else {
                payload.endPoint= {lat:foundedPoint.lat, long:foundedPoint.long}
            }
        })
        dispatch(setTripPoints(payload))
    }

    function isCurrentRowSelected(record){
        // prevent repeated click
        if (currentRequest !== record.name) {
            requestClickHandler(record)
        }
    }

    //form data source for table
    const dataSource = requests.map((request)=>{
        return(
            {
                key:request.id+request.name,
                id:request.id,
                name:request.name,
                getLoadPoint:{pointName:request.pointGetLoad, onChangePointHandler: setGLPointHandler.bind(this, request.id)},
                leaveLoadPoint:{pointName:request.pointLeaveLoad, onChangePointHandler: setLLPointHandler.bind(this, request.id)},
            }
        )
    })
    //form columns for table
    const columns = [
        {
            title: 'Название заявки',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Начальный пункт',
            dataIndex: 'getLoadPoint',
            key: 'getLoadPoint',
            render: ({pointName, onChangePointHandler})=> <PointSelect
                currentValue={pointName}
                onSetPointHandler={onChangePointHandler}
            />
        },
        {
            title: 'Конечный пункт',
            dataIndex: 'leaveLoadPoint',
            key: 'leaveLoadPoint',
            render: ({pointName, onChangePointHandler})=> <PointSelect
                currentValue={pointName}
                onSetPointHandler={onChangePointHandler}
            />
        },
    ];

    return (
        <>
            <Table
                dataSource={dataSource}
                rowSelection={{type:'radio', selectedRowKeys:selectedRowKeysArray.current, onSelect:(record) => isCurrentRowSelected(record)}}

                columns={columns}
                onRow={(record)=> {
                     return {
                        onClick: () => {
                            selectedRowKeysArray.current = [record.key]
                            isCurrentRowSelected(record)
                        }
                    }
                }}

            />
        </>
    );
};

export default RequestsTable;