import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import classNames from "classnames";

import * as appActions from "../../../redux/actions";
import "./TopMenu.css";

class TopMenu extends Component {
  getClassNames = currentPath => {
    const { pathname } = this.props.location;
    const className = classNames("nav-link", {
      "active-nav-link": pathname === currentPath
    });
    return className;
  };
  render() {
    return (
      <>
        <Navbar className="topMenu" expand="lg" variant="light" sticky="top">
          <Container>
            <Link to="/">
              <img
                src={require("../../../../assets/images/logo.png")}
                alt="mvp workshop logo"
                height="50"
              />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Link className={this.getClassNames("/")} to="/">
                  Home
                </Link>
                <Link className={this.getClassNames("/battery")} to="/battery">
                  Battery level
                </Link>
                <Link
                  className={this.getClassNames("/production")}
                  to="/production"
                >
                  Electricity produces
                </Link>
                <Link
                  className={this.getClassNames("/consumption")}
                  to="/consumption"
                >
                  Consumption
                </Link>
                <Link className={this.getClassNames("/buy")} to="/buy">
                  Buy
                </Link>
                <Link
                  className={this.getClassNames("/token")}
                  to="/token"
                >
                  Impact token
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopMenu));
