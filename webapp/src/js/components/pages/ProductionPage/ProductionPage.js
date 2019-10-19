import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CreateReactClass from "create-react-class";

import "./ProductionPage.css";
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
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "1h",
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "2h",
    "Energy price": 0.08,
    "Average energy price": 0.1
  },
  {
    name: "3h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "4h",
    "Energy price": 0.13,
    "Average energy price": 0.1
  },
  {
    name: "5h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "6h",
    "Energy price": 0.09,
    "Average energy price": 0.1
  },
  {
    name: "7h",
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "8h",
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "9h",
    "Energy price": 0.08,
    "Average energy price": 0.1
  },
  {
    name: "10h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "11h",
    "Energy price": 0.13,
    "Average energy price": 0.1
  },
  {
    name: "12h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "13h",
    "Energy price": 0.09,
    "Average energy price": 0.1
  },
  {
    name: "14h",
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "15h",
    "Energy price": 0.07,
    "Average energy price": 0.1
  },
  {
    name: "16h",
    "Energy price": 0.08,
    "Average energy price": 0.1
  },
  {
    name: "17h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "18h",
    "Energy price": 0.13,
    "Average energy price": 0.1
  },
  {
    name: "19h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "20h",
    "Energy price": 0.09,
    "Average energy price": 0.1
  },
  {
    name: "21h",
    "Energy price": 0.13,
    "Average energy price": 0.1
  },
  {
    name: "22h",
    "Energy price": 0.1,
    "Average energy price": 0.1
  },
  {
    name: "23h",
    "Energy price": 0.09,
    "Average energy price": 0.1
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

class ProductionPage extends React.Component {
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
              dataKey="Average energy price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            /> */}
            <Line type="monotone" dataKey="Energy price" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  render() {
    const ConsumptionChart = this.renderConsumptionChart;

    return (
      <RegularLayout>
        <h1 className="mb-4">Energy production</h1>
        <CardComponent>
          <ConsumptionChart />
        </CardComponent>
        <Row>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              titleIcon={require("../../../../assets/icons/adding-solar-inactive.png")}
              titleText="Max potential production"
            >
              <br />
              <br />
              <h1>4,500W</h1>
            </CardComponent>
          </Col>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              titleIcon={require("../../../../assets/icons/weather-sunny.png")}
              titleText="Wheater"
            >
              <br />
              <br />
              <h1>12°C</h1>
              <p>Berlin, Germany</p>
            </CardComponent>
          </Col>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              titleIcon={require("../../../../assets/icons/icon-irradiance.png")}
              titleText="Irradiance"
            >
              <br />
              <br />
              <h1>667.0W/m²</h1>
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
)(ProductionPage);
