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

class KPdispatchPortal extends React.Component {
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
              <h1 style={{ textAlign: 'left' }}>Dispatch Portal</h1>
              <p>
              Communication was breaking between Salesmen, Accounting, and Dispatch Teams... Primarily, this application
              was used to clone 'dispatch ready' order data from our Enterprise Software MsSQL server into a cloud database
              for an offsite driver iOS app, thus eliminating salesmen providing improper paperwork. Secondarily, the Dispatch Portal
              provided a way to process driver-truck assignments. Accounting was no longer challenged with hunting down busy managers
              to assign the correct drivers in our enterprise software. Lastly, orders were processed from the Driver iOS App back into
              the Dispatch Portal for analytical assesment. This also staged the automation of orders to update back into our enterprise
              software MsSQL server.
              </p>
              <Button onClick={()=>window.open('https://www.kppetro.com/')}>
                View Company
              </Button>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs2">
              Stack &nbsp;
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>React Javascript</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>Material UI</li>
              </ul>
            </TabPane> 
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs3">
              Stack &nbsp;
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>Node</li>
                <li>MsSQL</li>
                <li>Mongo DB</li>
                <li>Express</li>
              </ul>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs4">
            Features &nbsp;
            <ul style={{ fontSize: '18px', listStyle: 'square' }}>
                <li>Live Driver Tracking via Samsara API</li>
                <li>Dynamic Order Assignment to Drivers</li>
                <li>Driver Analytics</li>
                <li>Remote Order Ticket Printing</li>
              </ul>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default KPdispatchPortal;