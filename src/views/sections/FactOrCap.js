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

class FactOrCap extends React.Component {
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
              <h1 style={{ textAlign: 'left' }}>FACT-OR-CAP.COM</h1>
              <p>
                Prove your <b>NOT</b> a bandwagon fan by tracking the data of which NBA teams you believe in. FactOrCap lets you place claims 
                on NBA games as they unfold on a nightly basis. Add salt to wounds by 'Cap' calling against your friends claims.
                View games as a guest, or quickly make an account to begin placing your Facts today!
              </p>
              <Button onClick={()=>window.open('https://fact-or-cap.com/')}>
                Live Demo
              </Button>
            </TabPane>
            <TabPane style={{ textAlign: 'left', fontSize: '32px' }} tabId="plainTabs2">
              Stack &nbsp;
              <Button outline color="success" onClick={()=>window.open("https://github.com/deeleeTech/fact-or-cap-web-client")}>
                <i className="fab fa-github" />&nbsp;View Code
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
              <Button outline color="success" onClick={()=>window.open("https://github.com/deeleeTech/fact-or-cap-SERVER")}>
                <i className="fab fa-github" />&nbsp;View Code
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
                <li>iOS Friendly Design</li>
                <li>Authentication Component Wrapper</li>
                <li>Account Encrypted Password Storing</li>
                <li>Automated Live Game Updates</li>
                <li>Posting Game Bets</li>
              </ul>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default FactOrCap;