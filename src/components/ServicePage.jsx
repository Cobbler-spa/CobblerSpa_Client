import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
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
    <div className='container mb-3'>
      <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
          Launder
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
          Revive
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
          Repair
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab3'}>
          Restore
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab5')} active={fillActive === 'tab3'}>
          Customise
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab6')} active={fillActive === 'tab3'}>
          Other Services
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}><ServiceTab tab={fillActive}/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}><ServiceTab tab={fillActive}/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}><ServiceTab tab={fillActive}/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab4'}><ServiceTab tab={fillActive}/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab5'}><ServiceTab tab={fillActive}/></MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab6'}><ServiceTab tab={fillActive}/></MDBTabsPane>
      </MDBTabsContent>
    </div>
  )
}

export default ServicePage

