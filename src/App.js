import React from 'react';
import IncidentVideoResult from './VideoListComponent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



function App() {
  return (
    <Grid Container maxWidth="md"  spacing={300} alignContent="center">
      <Grid item xs={6}>
        <h1>NAS</h1>
      </Grid>
      <grid item xs={6} maxWidth = {10}>
        <Paper elevation={3}>
          <IncidentVideoResult device_id="CctvCam1"></IncidentVideoResult>
        </Paper>


      </grid>
    </Grid>
  );
}

export default App;
