//handles requests and response to the nodejs express server
import axios from "axios";

let requestNASFileList = async (device_id) => {
    let response = await axios.get("http://127.0.0.1:3001/nas-info?device_id=" + device_id);
            //remove results with empty file_id
            let result = (response.data.list).filter(function (el) {
                return el.file_id !== "";
            })
            //add a id key for data table to use
            for (let entries of result) {
                entries.id = entries.file_id;
            }
            return result;
        
}
let requestDeviceIDList = async () =>{
    let response =  await axios.get("http://127.0.0.1:3001/device-list");

    //drop results with duplicated device id
    const seen = new Set();
    const filteredArr = (response.data).filter(el => {
        const duplicate = seen.has(el.device_id);
        seen.add(el.device_id);
        return !duplicate;
    })
    return filteredArr;
}


export {requestNASFileList, requestDeviceIDList} ;

