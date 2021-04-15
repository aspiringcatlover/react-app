//contains component for a datatable showing list of videos for a cctv
import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {requestNASFileList}from './routes/ApiCaller';



const IncidentVideoTable = (props) => {
    const [axiosResult, setAxiosResult] = useState([]);

    useEffect(() => {
        requestNASFileList(props.device_id).then((result)=>{
            setAxiosResult(result);
        })
    }, [props.device_id]) //re-render only when device id changes

    if (axiosResult === undefined || axiosResult.length <= 0) {
        console.log("still waiting results from axios");
        return null
    }
    else {
        console.log("axios result is ready",axiosResult);
        //return a data table to be rendered

        //columns for data table
        const columns = [
            {
                headerName: 'File ID',
                field: 'file_id',
                width: 100
            },
            {
                headerName: 'File Name',
                field: 'file_name',
                width: 300
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



export default IncidentVideoTable;