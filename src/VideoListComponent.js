//contains component for displaying a list of results queried from nodejs server

import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';
import requestNASFileList from './routes/ApiCaller';


const IncidentVideoResult = (props) => {
    const [axiosResult, setAxiosResult] = useState([]);

    useEffect(() => {
        setAxiosResult(requestNASFileList(props.device_id));

    }, [props.device_id]) //re-render only when device id changes



    console.log(axiosResult, "axiosResult");
    if (axiosResult === undefined ) {
        console.log("still waiting results from axios");
        return <>Still loading...</>
    }
    else {
        console.log("axios results ready");

        //return a data table to be rendered

        //columns for data table
        const columns = [
            {
                headerName: 'File ID',
                field: 'file_id',
                width: 70
            },
            {
                headerName: 'File Name',
                field: 'file_name',
                width: 130
            },
        ];
        return (

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={axiosResult}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                />

            </div>

        )
    }
}

const MyFirstComponent = (props) => {
    return <>hello, {props.name}</>;
}


export { MyFirstComponent, IncidentVideoResult, };