import React, {useEffect, useRef} from 'react';
import classes from './Requests.module.scss'
import MapSection from "../../components/MapSection/MapSection";
import {Row, Col} from "antd";
import {useSelector} from "react-redux";
import RequestsTable from "../../components/RequestsTable/RequestsTable";


const Requests = () => {

    const appState = useSelector(state => state.appReducer)
    const ref = useRef(null)
    const refRight = useRef(null)

    useEffect(()=>{
        const resizeableEle = ref.current
        const styles = window.getComputedStyle(resizeableEle)
        let width = parseInt(styles.width, 10)
        let x = 0

        // Resize on right side
        const onMouseDownRightResize = (event) => {
            x = event.clientX
            resizeableEle.style.left = styles.left
            resizeableEle.style.right = null
            document.addEventListener("mousemove", onMouseMoveRightResize)
            document.addEventListener("mouseup", onMouseUpRightResize)
        }

        const onMouseMoveRightResize = (event) => {
            const dx = event.clientX - x
            x = event.clientX
            width = width + dx
            if (width > appState.max_width) {
                width = appState.max_width
                onMouseUpRightResize()
            } else  if ( width < appState.min_width){
                width = appState.min_width
                onMouseUpRightResize()
            }
            resizeableEle.style.width = `${width}px`
        }

        const onMouseUpRightResize = () => {
            document.removeEventListener("mousemove", onMouseMoveRightResize)
        }

        // Add mousedown event listener
        const resizeRight = refRight.current;
        resizeRight.addEventListener("mousedown", onMouseDownRightResize)

        return ()=> {
            resizeRight.removeListener("mousedown", onMouseDownRightResize)
        }
    },[])

    return (
        <Row className={classes.Requests}>
            <Col ref={ref} className={classes.resizeable}>
                <div className={classes.resizeable__inner}>
                    <RequestsTable/>
                </div>
            </Col>
            <Col flex={1} className={classes.noResizeable}>
                <div
                    ref={refRight}
                    className={classes.resizer}
                ></div>
                <MapSection/>
            </Col>
        </Row>
    );
};

export default Requests;




