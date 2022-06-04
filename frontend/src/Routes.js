import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ForgotPasswordForm from "./Components/ForgotPasswordForm";
// import ResetPasswordForm from "./Components/ResetPasswordForm";
import Account from "./Components/Account";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import OrderNow from "./Components/OrderNow";
import PreviewOrder from "./Components/PreviewOrder";
import Signup from "./Components/Signup";
import UnpaidOrders from "./Components/UnpaidOrders";
import RevisionOrders from "./Components/RevisionOrders";
import InProgress from "./Components/InProgress";
import CancelledOrders from "./Components/CancelledOrders";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account/:id" component={Account} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/ordernow" component={OrderNow} />
        <Route path="/previeworder/:orderId" component={PreviewOrder} />
        <Route path="/signup" component={Signup} />
        <Route path="/unpaidorders" component={UnpaidOrders} />
        <Route path="/revisionorders" component={RevisionOrders} />
        <Route path="/cancelledorders" component={CancelledOrders} />
        <Route path="/inprogress" component={InProgress} />
        {/* <Route path="/forgot-password" component={ForgotPasswordForm} />
        <Route
          path="/reset-password/:resetToken"
          component={ResetPasswordForm}
        /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
