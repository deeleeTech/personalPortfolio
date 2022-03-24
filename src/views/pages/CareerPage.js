import React from "react";
import emailjs from 'emailjs-com';
import FactOrCap from "../sections/FactOrCap.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import Footer from "../../components/Footer/Footer.js";
import ReturnNavbar from "../../components/Navbars/ReturnNavbar";
import StudentsApp from "../sections/StudentsApp.js";
import KPdispatchPortal from "../sections/KPdispatchPortal.js";
import KPdriverApp from "../sections/KPdriverApp.js";
import ProfilePic from "../../assets/img/profilePicture.jpg"
import OSRSplayerSearch from "../sections/OSRSplayerSearch.js";

const carouselFactOrCap = [
  {
    src: require("../../assets/img/factorcap01.png").default,
    altText: "Slide 1",
    caption: "Fact Or Cap Web Clients",
  },
  {
    src: require("../../assets/img/factorcap02.png").default,
    altText: "Slide 2",
    caption: "Runescape Player Search",
    style: {
      height: '200px'
    }
  },
  {
    src: require("../../assets/img/factorcap03.png").default,
    altText: "Slide 3",
    caption: "Python Website",
    height: '200px'
  },
];

let ps = null;

export default function CareerPage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    console.log('sending attempt.....')
    emailjs.sendForm('deeleetechWebsite', 'template_qisgifd', e.target, 'Oq6072DlU_WW1PmsB')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <ReturnNavbar />
      <div className="wrapper">
        <div style={{ height: '50px' }}>
         
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <img src={ProfilePic} />
                  {/* <UncontrolledCarousel items={carouselItems} /> */}
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">About</h1>
                <h5 className="text-on-back">Me</h5>
                <p className="profile-description text-left">
                    &nbsp;&nbsp;&nbsp;I am a 25 year old full stack developer open to a full time  position with a well-established corporation or start up where I can further build
                    my career and become a valuable member of a development team. I have spent the last two years as the entire tech department for an international oil distribution
                    company where I wore many hats that have helped me gain the skills needed for full stack developement. <br/> &nbsp;&nbsp;&nbsp;I understand code on a high level
                    and am able to pick up new languages and SDKs quickly. My stack includes extensive understanding of
                    modern tools and practices such as: React, Node, Express, Object-Oriented-Programing, Redux, Mongo DB, and exposure to many more. 
                    I am looking to add communication and technical support to any development team. 
                </p>
                <Button
                        className="btn-simple"
                        style={{ width: '100%' }}
                        color="primary"
                        href="/"
                        onClick={(e) => window.open('https://github.com/deeleeTech')}
                    >
                        <i className="tim-icons icon-laptop" /> Github
                    </Button>
                    <Button
                        className="btn-simple"
                        style={{ width: '100%' }}
                        color="info"
                        href="#pablo"
                        onClick={(e) => window.open("https://www.linkedin.com/in/dillon-l-24ba3b1a9/")}
                    >
                        <i className="tim-icons icon-bulb-63" /> LinkedIn
                    </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <FactOrCap />  
              </Col>
              <Col md="7">
                <Row className="justify-content-between align-items-center" style={{ paddingTop: '10px' }}>
                  <img src={require("../../assets/img/factorcap01.png").default} height={400} style={{ borderRadius: '15px' }}/>
                  <img src={require("../../assets/img/factorcap02.png").default} height={400} style={{ borderRadius: '15px' }}/>
                  <img src={require("../../assets/img/factorcap03.png").default} height={400} style={{ borderRadius: '15px' }}/>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <KPdispatchPortal />  
              </Col>
              <Col md="7">
                <Row className="justify-content-center align-items-center" style={{ paddingTop: '50px' }}>
                  <img src={require("../../assets/img/kpLogo.png").default} height={250} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <KPdriverApp />  
              </Col>
              <Col md="7">
              <Row className="justify-content-center align-items-center" style={{ paddingTop: '50px' }}>
                  <img src={require("../../assets/img/kpLogo.png").default} height={250} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="5">
                <OSRSplayerSearch />  
              </Col>
              <Col md="7">
                <img src={require("../../assets/img/runescapePic.png").default} height={400} />
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">Me</h5>
                  </CardHeader>
                  <CardBody>
                    <Form id="contact-form" className="form" onSubmit={sendEmail}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input name="from_name" defaultValue="Mike" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input name="from_email" placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input name="phone_number" defaultValue="" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input name="company" defaultValue="company name" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input name="message" placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="info"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give me a ring</h4>
                    <p>
                      Dillon Lee<br />
                      +1 830 837 6140 <br />
                      Mon - Sun, 8:00-8:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}