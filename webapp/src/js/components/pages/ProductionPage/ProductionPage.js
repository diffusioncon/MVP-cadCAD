import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

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
import { Col, Row, Button } from "react-bootstrap";
import CardComponent from "../../atoms/Card/Card";

const chartData = [
  {
    name: "0h",
    "Production over time": 9,
    "Average electricity production": 0.1
  },
  {
    name: "1h",
    "Production over time": 8.7,
    "Average electricity production": 0.1
  },
  {
    name: "2h",
    "Production over time": 9,
    "Average electricity production": 0.1
  },
  {
    name: "3h",
    "Production over time": 8.6,
    "Average electricity production": 0.1
  },
  {
    name: "4h",
    "Production over time": 8.5,
    "Average electricity production": 0.1
  },
  {
    name: "5h",
    "Production over time": 9.1,
    "Average electricity production": 0.1
  },
  {
    name: "6h",
    "Production over time": 9.8,
    "Average electricity production": 0.1
  },
  {
    name: "7h",
    "Production over time": 10.5,
    "Average electricity production": 0.1
  },
  {
    name: "8h",
    "Production over time": 12.5,
    "Average electricity production": 0.1
  },
  {
    name: "9h",
    "Production over time": 15.5,
    "Average electricity production": 0.1
  },
  {
    name: "10h",
    "Production over time": 16.6,
    "Average electricity production": 0.1
  },
  {
    name: "11h",
    "Production over time": 20.5,
    "Average electricity production": 0.1
  },
  {
    name: "12h",
    "Production over time": 22.5,
    "Average electricity production": 0.1
  },
  {
    name: "13h",
    "Production over time": 24.5,
    "Average electricity production": 0.1
  },
  {
    name: "14h",
    "Production over time": 24.5,
    "Average electricity production": 0.1
  },
  {
    name: "15h",
    "Production over time": 26.5,
    "Average electricity production": 0.1
  },
  {
    name: "16h",
    "Production over time": 26.4,
    "Average electricity production": 0.1
  },
  {
    name: "17h",
    "Production over time": 27,
    "Average electricity production": 0.1
  },
  {
    name: "18h",
    "Production over time": 25,
    "Average electricity production": 0.1
  },
  {
    name: "19h",
    "Production over time": 22,
    "Average electricity production": 0.1
  },
  {
    name: "20h",
    "Production over time": 20,
    "Average electricity production": 0.1
  },
  {
    name: "21h",
    "Production over time": 16,
    "Average electricity production": 0.1
  },
  {
    name: "22h",
    "Production over time": 13,
    "Average electricity production": 0.1
  },
  {
    name: "23h",
    "Production over time": 11,
    "Average electricity production": 0.1
  }
];

class ProductionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      graphType: 1
    };
  }

  componentDidMount() {
    this.getIntegral();
  }

  renderConsumptionChart = () => {
    const { graphType } = this.state;
    const newChart = [...chartData];
    const newChart1 = [...newChart];
    switch (graphType) {
      case 1:
        return (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                data={newChart1}
                margin={{
                  top: 20
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="KW" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Production over time"
                  stroke="#429798"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case 2:
        return (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                data={newChart}
                margin={{
                  top: 20
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="KW" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Total produced"
                  stroke="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      default:
        return null;
    }
  };

  getIntegral = () => {
    chartData[0]["Total produced"] = 0;
    for (let i = 1; i < chartData.length; i++) {
      const element =
        (chartData[i - 1]["Production over time"] +
          chartData[i]["Production over time"]) /
        2;
      chartData[i]["Total produced"] =
        chartData[i - 1]["Total produced"] + element;
    }
  };

  render() {
    const ConsumptionChart = this.renderConsumptionChart;

    return (
      <RegularLayout>
        <h1 className="mb-4">Production over time</h1>
        <CardComponent
          titleText="Electricity produced (last 24 hours)"
          className="pb-3"
          titleRight={
            <div>
              <Button
                onClick={() => {
                  this.setState({ graphType: 1 });
                }}
                className={`mr-2 ${
                  this.state.graphType !== 1 ? " disabled" : ""
                }`}
              >
                Production over time
              </Button>
              <Button
                onClick={() => {
                  this.setState({ graphType: 2 });
                }}
                className={`${this.state.graphType !== 2 ? "disabled" : ""}`}
              >
                Total produced
              </Button>
            </div>
          }
        >
          <ConsumptionChart />
        </CardComponent>
        <Row>
          <Col className="mb-4" sm="12" md="6" lg="4">
            <CardComponent
              titleIcon={require("../../../../assets/icons/adding-solar-inactive.png")}
              titleText="Max daily production"
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
              <p>Lofé, Senegal</p>
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
