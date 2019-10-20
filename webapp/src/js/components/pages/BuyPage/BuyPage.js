import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

import "./BuyPage.css";
import CardComponent from "../../atoms/Card/Card";
import { Form, Col, Row, InputGroup } from "react-bootstrap";

import { QRCode } from "react-qr-svg";

const allCoins = [
  {
    name: "Ethereum",
    value: "ETH",
    price: 0.00045,
    address: "0x620BDBa6bC45C0B84E3F37447bFFb146B530efb2"
  },
  {
    name: "Bitcoin",
    value: "BTC",
    price: 0.0000098,
    address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
  }
];

class BuyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      amount: 0,
      coin: "",
      selectedCoin: { price: 0, address: "" }
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onCoinPick(event) {
    const selectedCoin = allCoins.find(
      coin => coin.value === event.target.value
    );
    this.setState({ selectedCoin, coin: event.target.value });
  }

  generateQRCode = () => {
    // this.setState({selectedCoin})
  };

  render() {
    const { amount, selectedCoin } = this.state;

    return (
      <RegularLayout>
        <h1 className="mb-4">Buy electricity</h1>
        <Row>
          <Col>
            <CardComponent
              className="d-flex"
              style={{ justifyContent: "space-evenly" }}
            >
              <Form.Group controlId="coin">
                <Form.Label>Coin</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={this.state.coin}
                  placeholder="Type"
                  onChange={this.onCoinPick.bind(this)}
                >
                  <option value="" disabled>
                    Please select a coin
                  </option>
                  {Object.keys(allCoins).map(key => {
                    const coin = allCoins[key];
                    return (
                      <option key={coin.value} value={coin.value}>
                        {`${coin.name} - ${coin.value}`}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="amount">
                <Form.Label>Electricity amount</Form.Label>
                <InputGroup>
                  <Form.Control
                    autoComplete="off"
                    type="number"
                    onChange={this.handleChange}
                    placeholder={`Please enter the electricity amount ${
                      selectedCoin.value ? ` in ${selectedCoin.value}` : ""
                    }`}
                  />
                  {!!selectedCoin.value && (
                    <InputGroup.Append
                      style={{
                        borderRadius: "0 .25rem .25rem 0",
                        border: "1px solid #ced4da"
                      }}
                    >
                      <InputGroup.Text>{selectedCoin.value}</InputGroup.Text>
                    </InputGroup.Append>
                  )}
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>You will get estimate:</Form.Label>
                <InputGroup>
                  <Form.Control
                    disabled
                    value={amount / selectedCoin.price || 0}
                  />
                  {!!this.state.coin ? (
                    <InputGroup.Append
                      style={{
                        borderRadius: "0 .25rem .25rem 0",
                        border: "1px solid #ced4da"
                      }}
                    >
                      <InputGroup.Text>KW</InputGroup.Text>
                    </InputGroup.Append>
                  ) : null}
                </InputGroup>
              </Form.Group>
            </CardComponent>
          </Col>

          <Col>
            <CardComponent>
              {!!selectedCoin.value ? (
                <>
                  <div style={{ width: 200 }} className="m-auto">
                    <QRCode
                      bgColor="#FFFFFF"
                      fgColor="#000000"
                      level="Q"
                      value={selectedCoin.address}
                    />
                  </div>
                  <p className="m-0 text-center">{selectedCoin.address}</p>
                </>
              ) : (
                <>
                  <div style={{ width: 200 }} className="m-auto">
                    <img
                      style={{ width: "100%" }}
                      src={require("../../../../assets/images/qr-code-placeholder.png")}
                      alt="qr code placeholder"
                    />
                  </div>
                  <p className="m-0 text-center">
                    Please select a coin to generate the QR code
                  </p>
                </>
              )}
            </CardComponent>
          </Col>
        </Row>
      </RegularLayout>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyPage);
