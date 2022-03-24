import React, {useState, useEffect} from "react";
import emailjs from 'emailjs-com';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ReturnNavbar from "../../components/Navbars/ReturnNavbar.js";
import Footer from "../../components/Footer/Footer.js";


export default function PartnerPage() {

  const [ formName, setFormName ] = useState('')
  const [ formEmail, setFormEmail ] = useState('')
  const [ formPhone, setFormPhone ] = useState('')
  const [ formCompany, setFormCompany ] = useState('')
  const [ formMessage, setFormMessage ] = useState('')

  const handleNewMessage = () => {
    console.log(formName);
    console.log(formEmail);
    console.log(formPhone);
    console.log(formCompany);
    console.log(formMessage);
    alert('Message was sent!');
  }

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
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
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../../assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../../assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../../assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../../assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Tech can touch<br />
                  <span className="text-white">anything</span>
                </h1>
                <p className="text-white mb-3">
                &nbsp;&nbsp;&nbsp;I dive deep into your business and work closely with you or your tech to make sure my developement results in something meaningful, impactful, and timely. Even after a project is completed, communication remains continuously collaborative — in order to guarantee the best results for your business, now and going forward.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Free Consulting
                  </p>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://twitter.com/deeleetech"
                      onClick={(e) => {e.preventDefault();window.open("https://twitter.com/deeleetech")}}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://github.com/deeleeTech"
                      onClick={(e) => {e.preventDefault();window.open("https://github.com/deeleeTech")}}
                    >
                      <i className="fab fa-github" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.linkedin.com/in/dillon-l-24ba3b1a9/"
                      onClick={(e) => {e.preventDefault();window.open("https://www.linkedin.com/in/dillon-l-24ba3b1a9/")}}
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("../../assets/img/telescope.png").default}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          {/* <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
           
          </section> */}
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("../../assets/img/path5.png").default}
          />
          <img
            alt="..."
            className="path3"
            src={require("../../assets/img/path2.png").default}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">an actual coder who understands your goals</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-danger">
                        <i className="tim-icons icon-key-25" />
                      </div>
                      <h4 className="info-title">Automation is KEY</h4>
                      <hr className="line-danger" />
                      <p>
                        Grow your business without having to add hours or employees to the schedule. <b style={{ fontWeight: '800' }}>Marketing machines</b> and <b style={{ fontWeight: '800' }}>Order Fulfillment Automation</b> are just the start. If you are doing the same task for a third time, it's time to consider automating that task.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Data Insight</h4>
                      <hr className="line-warning" />
                      <p>
                        Learn whats going right and wrong by tracking the data you are interested in. New tools can be created to test theories, while existing processes often involve technology that are capible of integrations by other coders.(known as SKDs) 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Super Assistant</h4>
                      <hr className="line-info" />
                      <p>
                        Think HR and Managment... we can make tools to contact employees, share files, analize performances, automate scheduling, minimize human error in repetitive processes and more!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-components" />
                      </div>
                      <h4 className="info-title">Build Further</h4>
                      <hr className="line-success" />
                      <p>
                        Already have tech infastructure? We specialize in system integration and can cut out the bad and keep the good of almost any existing tech. Building new tech doesn't mean you have to abandon the things you like about your current tech. 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-info">
                        <i className="tim-icons icon-notes" />
                      </div>
                      <h4 className="info-title">Organize & Optimize</h4>
                      <hr className="line-info" />
                      <p>
                        Expanding can put strain on outdated orginzation methods. Optimize security and accesablity while organizing every aspect of your bussiness with custom software solutions that tailor to your user experience.  
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-heart-2" />
                      </div>
                      <h4 className="info-title">Satisfaction Promised</h4>
                      <hr className="line-primary" />
                      <p>
                         We aim to create 'Win-Win's. We won't expect anything except a piece of what we can save for you. Strong professional relationships are most important and we want to be your bridge into technology!
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Questions?</h1>
                    <h5 className="text-on-back" style={{ fontSize: '60px' }}>Contact</h5>
                  </CardHeader>
                  <CardBody>
                    <Form id="contact-form" onSubmit={sendEmail}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input name="from_name" defaultValue="Jim" type="text" onChange={(e)=>setFormName(e.target.value)}/>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input name="from_email" placeholder="example@email.com" type="email" onChange={(e)=>setFormEmail(e.target.value)}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input name="phone_number" defaultValue="979-123-4567" type="text" onChange={(e)=>setFormPhone(e.target.value)}/>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input name="company" defaultValue="Local Jim's Store" type="text" onChange={(e)=>setFormCompany(e.target.value)}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input name="message" placeholder="Hello there!" type="textarea" onChange={(e)=>setFormMessage(e.target.value)}/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="info"
                        data-placement="right"
                        id="tooltip341148792"
                        type="submit"
                        form="contact-form" 
                        onClick={()=>handleNewMessage()}
                      >
                        Send Message
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
                      Dillon M Lee<br />
                      +1 830 837 6140 <br />
                      Mon - Sat, 8:00-8:00
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    </>
  );
}
