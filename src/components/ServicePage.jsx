import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ServiceTab from './ServiceTab';

const ServicePage = () => {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = ( string) => {
    if (string === fillActive) {
      return;
    }

    setFillActive(string);
  };
  return (
    // <div className='container mb-3'>
    //   <MDBTabs fill className='mb-3'>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
    //       Launder
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
    //       Revive
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
    //       Repair
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab3'}>
    //       Restore
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab5')} active={fillActive === 'tab3'}>
    //       Customise
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleFillClick('tab6')} active={fillActive === 'tab3'}>
    //       Other Services
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //   </MDBTabs>

    //   <MDBTabsContent>
    //     <MDBTabsPane show={fillActive === 'tab1'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //     <MDBTabsPane show={fillActive === 'tab2'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //     <MDBTabsPane show={fillActive === 'tab3'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //     <MDBTabsPane show={fillActive === 'tab4'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //     <MDBTabsPane show={fillActive === 'tab5'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //     <MDBTabsPane show={fillActive === 'tab6'}><ServiceTab tab={fillActive}/></MDBTabsPane>
    //   </MDBTabsContent>
    // </div>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="image1.jpg" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                This is a sample description for card 1.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="image2.jpg" alt="Card image" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                This is a sample description for card 2.
              </Card.Text>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more cards here */}
      </Row>
    </Container>
  )
}

export default ServicePage

