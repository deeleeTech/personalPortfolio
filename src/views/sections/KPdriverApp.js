import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button
} from "reactstrap";

class KPdriverApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plainTabs: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          {/* colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" */}
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav data-tabs="tabs" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 1)}
                    href="#"
                  >
                    Summary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 2)}
                    href="#"
                  >
                    FrontEnd
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 3)}
                    href="#"
                  >
                    BackEnd
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 4
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 4)}
                    href="#"
                  >
                    Features
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent className="text-center" activeTab={"plainTabs" + this.state.plainTabs}>
            <TabPane tabId="plainTabs1">
            <h3 style={{ fontSize: '18px', margin: '0px' }}> Key Performance Petroleum </h3>
              <h1 style={{ textAlign: 'left' }}>Driver iOS App</h1>
              <p>
              This project displays dispatched order data from a cloud server to our driver's iPhones. Using the same cloud data as the
              Dispatch Portal, the Driver iOS App lets drivers add GeoLocation, Updated Quantities, and Digital Signatures to all of their
              processed orders. After obtaining signature and order requirements, the drivers can print order receipts to clients in real
              time while they are out in the field. Finally, they are marked as completed for the Dispatch Portal to process orders back into
              our Enterprise Software MsSQL server.
              </p>
              <Button onClick={()=>window.open('https://www.kppetro.com/')}>
                View Company
              </Button>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs2">
              Stack &nbsp;
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>React Native</li>
                <li>React Native Router</li>
                <li>Redux</li>
                <li>Mongo Realm</li>
              </ul>
            </TabPane> 
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs3">
              Stack &nbsp;
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>Node</li>
                <li>Mongo DB</li>
              </ul>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs4">
            Features &nbsp;
            <ul style={{ fontSize: '18px', listStyle: 'square' }}>
                <li>GeoLocation Order Tracking</li>
                <li>Digital Signature Capture</li>
                <li>Real Time Order Assigning</li>
                <li>Bluetooth Ticket Printing</li>
              </ul>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default KPdriverApp;