import React from 'react';
import IncidentVideoTable from './VideoListComponent';
import DeviceDropdown from './DeviceDropdownComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'



function App() {
  return (
    <Container maxWidth = "lg" >
      <Grid item md={6} alignContent="center">
        <h1>NAS</h1>
      </Grid>
      <Grid item xs={12}>
        <DeviceDropdown></DeviceDropdown>
      </Grid>

      {/** 
      <Grid item xs={12}>
        <Paper elevation={3}>
          <IncidentVideoTable device_id="CctvCam1"></IncidentVideoTable>
        </Paper>


      </Grid>
      */}
    </Container>
  );
}

export default App;
