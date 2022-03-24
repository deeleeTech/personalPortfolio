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

class StudentsApp extends React.Component {
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
              <h1 style={{ textAlign: 'left' }}>STUDENTS_DEMO.COM</h1>
              <p>
                This is a small React application with styling to display a roster of students and their grades. This project is clean and offers me a starting point for several key features
              </p>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs2">
              Stack &nbsp;
              <Button outline color="success">
                <i className="fab fa-github" />&nbsp;Github
              </Button>
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>React Javascript</li>
                <li>Router</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>Material UI</li>
              </ul>
            </TabPane> 
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs3">
              Stack &nbsp;
              <Button outline color="success">
                <i className="fab fa-github" />&nbsp;Github
              </Button>
              <ul style={{ fontSize: '18px', listStyle: 'inside' }}>
                <li>Node</li>
                <li>Python</li>
                <li>Express</li>
                <li>Mongo DB</li>
                <li>Bcrypt</li>
              </ul>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs4">
            Features &nbsp;
            <ul style={{ fontSize: '18px', listStyle: 'square' }}>
                <li>Authentication Component Wrapper</li>
                <li>Account Encrypted Password Storing</li>
                <li>Redux State Managment</li>
                <li>Automated Live Game Updates</li>
                <li>Database Architecture</li>
              </ul>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default StudentsApp;