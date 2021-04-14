//contains component for displaying a list of results queried from nodejs server

import React, {useState,useEffect} from "react";
import axios from "axios";





const MyFirstComponent = (props) => {
    return <>hello, {props.name}</>;
}

const IncidentVideoResult = (props) => {
    const [axiosResult, setAxiosResult] = useState([]);
    
    useEffect( () =>{
        const fetchData = async () => {
            const response = await axios.get("http://127.0.0.1:3001/nas-info?device_id="+props.device_id);
            let fileList = response.data.list;
    
            //process response so that react can render it
            let fileListToRender = fileList.map((item,index) =>{
                return (
                <React.Fragment key={item.file_id}>
                    <li>
                        <span>File ID: {item.file_id} </span>
                        <span>File Name: {item.file_name} </span>
                    </li>
                </React.Fragment>
                )
            })
            console.log(fileListToRender);

            setAxiosResult(fileListToRender); 
        }
        fetchData();        
    },[props.device_id])
    
    return <>{axiosResult}</>
}

export {MyFirstComponent, IncidentVideoResult};