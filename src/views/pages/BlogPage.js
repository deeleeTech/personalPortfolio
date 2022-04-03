import React from "react";
import emailjs from 'emailjs-com';
import FactOrCap from "../sections/FactOrCap.js";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Badge,
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

const blogPosts = [
  {
    src: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6915061537866981376',
    title: 'WebDev',
    color: 'blue'
  },
];

let ps = null;

export default function BlogPage() {
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
                {blogPosts && blogPosts.map((each, index)=>{
                    return(
                        <Col md="4">
                            <h1 className="profile-title text-left">
                                Article  <Badge color="light" pill style={{ background: each.color }}>{each.title}</Badge>
                            </h1>
                            <h5 className="text-on-back">{`0${index+1}`}</h5>  
                            <iframe src={each.src} height="474" width="375" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                        </Col>
                    )
                })}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}