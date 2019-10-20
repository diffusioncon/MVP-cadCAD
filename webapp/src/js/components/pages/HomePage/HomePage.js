import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CreateReactClass from "create-react-class";

import "./HomePage.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import Gauge from "svg-gauge";
import { Col, Row } from "react-bootstrap";
import CardComponent from "../../atoms/Card/Card";

const chartData = [
  {
    name: "0h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "1h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "2h",
    "Electricity price": 0.08,
    "Average electricity price": 0.1
  },
  {
    name: "3h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "4h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "5h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "6h",
    "Electricity price": 0.09,
    "Average electricity price": 0.1
  },
  {
    name: "7h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "8h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "9h",
    "Electricity price": 0.08,
    "Average electricity price": 0.1
  },
  {
    name: "10h",
    "Electricity price": 0.065,
    "Average electricity price": 0.1
  },
  {
    name: "11h",
    "Electricity price": 0.05,
    "Average electricity price": 0.1
  },
  {
    name: "12h",
    "Electricity price": 0.06,
    "Average electricity price": 0.1
  },
  {
    name: "13h",
    "Electricity price": 0.05,
    "Average electricity price": 0.1
  },
  {
    name: "14h",
    "Electricity price": 0.05,
    "Average electricity price": 0.1
  },
  {
    name: "15h",
    "Electricity price": 0.06,
    "Average electricity price": 0.1
  },
  {
    name: "16h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "17h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "18h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "19h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "20h",
    "Electricity price": 0.11,
    "Average electricity price": 0.1
  },
  {
    name: "21h",
    "Electricity price": 0.13,
    "Average electricity price": 0.1
  },
  {
    name: "22h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "23h",
    "Electricity price": 0.09,
    "Average electricity price": 0.1
  }
];

const defaultOptions = {
  animDuration: 1,
  showValue: true,
  max: 100,
  dialStartAngle: 180,
  dialEndAngle: 0,
  label: val => val + "%",
  color: val => "#F9D477"
};

const BateryDiagram = CreateReactClass({
  displayName: "Gauge",
  componentDidMount() {
    this.renderGauge(this.props);
  },

  shouldComponentUpdate(nextProps, nextState) {
    const { props } = this;
    if (props.value !== nextProps.value) {
      this.renderGauge(nextProps);
    }
    return false;
  },

  render() {
    return <div className="gauge-container" ref={el => (this.gaugeEl = el)} />;
  },

  renderGauge(props) {
    const gaugeOptions = Object.assign({}, defaultOptions, props);
    if (!this.gauge) {
      this.gauge = Gauge(this.gaugeEl, gaugeOptions);
    }
    this.gauge.setValueAnimated(props.value, gaugeOptions.animDuration);
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  renderConsumptionChart = () => {
    return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line
              type="monotone"
              dataKey="Average electricity price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            /> */}
            <Line
              type="monotone"
              dataKey="Electricity price"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  render() {
    const ConsumptionChart = this.renderConsumptionChart;

    return (
      <RegularLayout>
        <h1 className="mb-4">Homepage</h1>
        <CardComponent titleText="Price of the kWh (last 24 hours)" className="pb-3">
          <ConsumptionChart />
        </CardComponent>
        <Row>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              goTo="/battery"
              titleIcon={require("../../../../assets/icons/adding-battery-active.png")}
              titleText="Battery level"
            >
              <BateryDiagram value={86} />
            </CardComponent>
          </Col>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              goTo="/production"
              titleIcon={require("../../../../assets/icons/Icon-production.png")}
              titleText="Electricity produces"
            >
              <br />
              <br />
              <h1>4,090W</h1>
            </CardComponent>
          </Col>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              goTo="/consumption"
              titleIcon={require("../../../../assets/icons/Icon-consumption.png")}
              titleText="Community usage"
            >
              <br />
              <br />
              <h1>3,527W</h1>
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
)(HomePage);
