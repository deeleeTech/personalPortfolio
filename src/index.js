import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";

import Index from "./views/Index.js";
import ContactPage from "./views/pages/ContactPage.js";
import CareerPage from "./views/pages/CareerPage";
import PartnerPage from "./views/pages/PartnerPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/partnership"
        render={(props) => <PartnerPage {...props} />}
      />
      <Route
        path="/career"
        render={(props) => <CareerPage {...props} />}
      />
      <Route
        path="/contact"
        render={(props) => <ContactPage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
