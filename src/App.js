import React from 'react';
import DeviceDropdown from './DeviceDropdownComponent';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import SideMenu from './SideMenuComponent';


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


function App() {
  return (
    <Container maxWidth = "lg" >
      <SideMenu></SideMenu>
      <Grid item lg={12} align="center">
        <h1>NAS</h1>
      </Grid>
      <Grid item xs={12} align="center">
        <DeviceDropdown></DeviceDropdown>
      </Grid>

    </Container>
  );
}

export default App;
