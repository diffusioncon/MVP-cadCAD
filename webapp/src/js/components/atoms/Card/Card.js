import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./Card.css";

export default class CardComponent extends Component {
  renderCard = () => {
    const { titleIcon, titleText, children } = this.props;
    return (
      <Card>
        <div className="card-title">
          {!!titleIcon && <img src={titleIcon} height="50" alt="placeholder" />}
          {!!titleText && <span>{titleText}</span>}
        </div>
        {children}
      </Card>
    );
  };

  render() {
    const { goTo } = this.props;
    const CardRender = this.renderCard;

    return !!goTo ? (
      <Link to={goTo}>
        <CardRender />
      </Link>
    ) : (
      <CardRender />
    );
  }
}
