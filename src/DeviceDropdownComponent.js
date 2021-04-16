//contains component for creating a dropdown box for CCTV devices
import React, { useState, useEffect } from "react";
import { requestDeviceIDList } from './routes/ApiCaller';
import IncidentVideoTable from './VideoListComponent';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    InputLabel: {
    }
  }));

const DeviceDropdown = () => {
    const [deviceIDList, setDeviceIDList] = useState([]);
    const [deviceIDSelected, setDeviceIDSelected] = useState('');

    useEffect(() => {
        requestDeviceIDList().then((result) => {
            setDeviceIDList(result);
        })
    }, []) //get device id from nodejs server only once after render

    const handleChange = (event) => {
        setDeviceIDSelected(event.target.value);

    };
    const classes = useStyles();


    if (deviceIDList === undefined || deviceIDList.length <= 0) {
        console.log("still waiting results from axios");
        return <>Loading...</>
    }
    else {
        console.log("DeviceDropdownComponent result ready to be rendered:", deviceIDList);
        return (
            <Container>
            
                <Grid item xs={6}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label" >CCTV ID</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={deviceIDSelected}
                        onChange={handleChange}
                        defaultValue = ""
                    >
                        {deviceIDList.map((device)=>{
                            return <MenuItem key = {device.device_id} value={device.device_id}>{device.device_id}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                </Grid>
                <Grid item md={10}>
                    <Paper elevation = {3}>
                    <IncidentVideoTable device_id = {deviceIDSelected}>
                    </IncidentVideoTable>
                    </Paper>

        
                </Grid>
                </Container>
             
        
        )
    }
}

export default DeviceDropdown
