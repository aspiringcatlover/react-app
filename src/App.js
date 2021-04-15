import React from 'react';
import IncidentVideoResult from './VideoListComponent';
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    <Container>
      <Row>
        <Col  xs="auto">
          <IncidentVideoResult device_id="CctvCam1"></IncidentVideoResult>
        </Col>

      </Row>

    </Container>
  );
}

export default App;
