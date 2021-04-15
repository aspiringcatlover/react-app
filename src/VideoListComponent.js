//contains component for displaying a list of results queried from nodejs server

import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';
import requestNASFileList from './routes/ApiCaller';



const IncidentVideoResult = (props) => {
    const [axiosResult, setAxiosResult] = useState([]);

    useEffect(() => {
        requestNASFileList(props.device_id).then((result)=>{
            setAxiosResult(result);
        })
    }, [props.device_id]) //re-render only when device id changes

    if (axiosResult === undefined || axiosResult.length <= 0) {
        console.log("still waiting results from axios");
        return <>Still loading...</>
    }
    else {
        console.log("axios result is ready",axiosResult);


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
            <div style={{ height: 350, width: '100%' }}>
         
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



export default IncidentVideoResult;