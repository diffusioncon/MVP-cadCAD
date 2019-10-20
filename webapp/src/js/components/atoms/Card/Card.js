import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./Card.css";

export default class CardComponent extends Component {
  renderCard = () => {
    const {
      titleIcon,
      titleText,
      titleRight,
      children,
      noPadding,
      noMargin,
      className,
      style = {}
    } = this.props;
    return (
      <Card
        className={`${noPadding ? "p-0" : ""} ${
          noMargin ? "m-0" : ""
        } ${className}`}
        style={style}
      >
        {!!titleIcon || !!titleText ? (
          <div className="card-title">
            <span>
              {!!titleIcon && (
                <img src={titleIcon} height="50" alt="placeholder" />
              )}
              {!!titleText && <span className="card-title-text">{titleText}</span>}
            </span>
            {!!titleRight && (
              <span style={{ float: "right" }}>{titleRight}</span>
            )}
          </div>
        ) : null}
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
