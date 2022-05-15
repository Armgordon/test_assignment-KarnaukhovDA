import React from 'react';
import Requests from "./containers/Requests/Requests";
import AssignmentList from "./components/AssignmentList/AssignmentList";

const App = () => {
    return (
        <>
            <AssignmentList/>
            <Requests/>
        </>
    );
};

export default App;
