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

class OSRSplayerSearch extends React.Component {
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
                    For Users
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
                    Stack
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.plainTabs === 4
                    })}
                    onClick={e => this.toggleTabs(e, "plainTabs", 3)}
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
              <h1 style={{ textAlign: 'left' }}>OSRS Player Search</h1>
              <p>
                This web application is used to search old school runescape player stats. Users can create an account to save names that will autosearch playernames, so you don't have to
                always remember the odd marks and symbols of your friend's usernames. The data is pulled from a third party api, and currently displays all levels. The repo to this project
                can be found on github, and any runescape players are incourage to submit ideas or edits :)
              </p>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs2">
              Stack &nbsp;
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>React Javascript</li>
                <li>Node</li>
                <li>Material UI</li>
                <li>OSRS API</li>
              </ul>
              <Button onClick={()=>window.open('https://github.com/deeleeTech/osrs-client')}>
                View Client
              </Button>
              <Button onClick={()=>window.open('https://github.com/deeleeTech/osrs-server')}>
                View Server
              </Button>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs3">
            Features &nbsp;
            <ul style={{ fontSize: '18px', listStyle: 'square' }}>
                <li>Seach Field For Usernames</li>
                <li>API Call to Node Server</li>
                <li>Returns Player Level Data</li>
              </ul>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default OSRSplayerSearch;