//contains component for displaying a list of results queried from nodejs server

import React, { useState, useEffect } from "react";
import { DataGrid } from '@material-ui/data-grid';
import requestNASFileList from './routes/ApiCaller';


const IncidentVideoResult = (props) => {
    const [axiosResult, setAxiosResult] = useState([]);
    const [mounted, setMount] = useState(false);

    useEffect(() => {
        //setAxiosResult(requestNASFileList(props.device_id));
        let mockup_result = [{"id" : 34, "file_id": 34, "file_name": "2021212121.mp4"},
        {"id" : 35, "file_id": 35, "file_name": "2021212122.mp4"}
    ];
        setAxiosResult(mockup_result);
        setMount(true);
        


    }, [props.device_id]) //re-render only when device id changes



    console.log(axiosResult, "axiosResult");
    if (!mounted) {
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