//handles requests and response to the nodejs express server
import axios from "axios";

let requestNASFileList = (device_id) => {
    //fetch response from nodejs express server
    axios.get("http://127.0.0.1:3001/nas-info?device_id=" + device_id).then((response) => {

        //remove results with empty file_id
        let withID = response.filter(function (el) {
            return el.file_id !== "";
        })

        //add a id key for data table to use
        for (let entries of withID) {
            entries.id = entries.file_id;
        }

        return withID;

    })

}
export { requestNASFileList };