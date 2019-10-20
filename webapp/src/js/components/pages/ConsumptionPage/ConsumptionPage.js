import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

import "./ConsumptionPage.css";
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
import CardComponent from "../../atoms/Card/Card";
import HeatMap from "../../organisms/HeatMap/HeatMap";
import { Button } from "react-bootstrap";

const chartData = [
  {
    name: "0h",
    "Consumption over time": 8
  },
  {
    name: "1h",
    "Consumption over time": 9
  },
  {
    name: "2h",
    "Consumption over time": 8.7
  },
  {
    name: "3h",
    "Consumption over time": 6
  },
  {
    name: "4h",
    "Consumption over time": 7
  },
  {
    name: "5h",
    "Consumption over time": 8
  },
  {
    name: "6h",
    "Consumption over time": 9
  },
  {
    name: "7h",
    "Consumption over time": 11
  },
  {
    name: "8h",
    "Consumption over time": 14
  },
  {
    name: "9h",
    "Consumption over time": 15
  },
  {
    name: "10h",
    "Consumption over time": 16
  },
  {
    name: "11h",
    "Consumption over time": 19
  },
  {
    name: "12h",
    "Consumption over time": 20
  },
  {
    name: "13h",
    "Consumption over time": 21
  },
  {
    name: "14h",
    "Consumption over time": 22
  },
  {
    name: "15h",
    "Consumption over time": 23
  },
  {
    name: "16h",
    "Consumption over time": 23
  },
  {
    name: "17h",
    "Consumption over time": 24
  },
  {
    name: "18h",
    "Consumption over time": 26
  },
  {
    name: "19h",
    "Consumption over time": 24
  },
  {
    name: "20h",
    "Consumption over time": 25
  },
  {
    name: "21h",
    "Consumption over time": 23
  },
  {
    name: "22h",
    "Consumption over time": 24
  },
  {
    name: "23h",
    "Consumption over time": 15
  }
];
class ConsumptionPage extends React.Component {
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
                  dataKey="Consumption over time"
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
              <LineChart data={newChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="KW" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Total consumed"
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
    chartData[0]["Total consumed"] = 0;
    for (let i = 1; i < chartData.length; i++) {
      const element =
        (chartData[i - 1]["Consumption over time"] +
          chartData[i]["Consumption over time"]) /
        2;
      chartData[i]["Total consumed"] =
        chartData[i - 1]["Total consumed"] + element;
    }
  };

  render() {
    const ConsumptionChart = this.renderConsumptionChart;

    return (
      <RegularLayout>
        <h1 className="mb-4">Community usage</h1>
        <CardComponent
          className="pb-3"
          titleText="Consumption over time graph"
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
                Consumption over time
              </Button>
              <Button
                onClick={() => {
                  this.setState({ graphType: 2 });
                }}
                className={`${this.state.graphType !== 2 ? "disabled" : ""}`}
              >
                Total consumed
              </Button>
            </div>
          }
        >
          <ConsumptionChart />
        </CardComponent>
        <br />
        <br />
        <h1 className="mb-4">Consumption heatmap</h1>
        <CardComponent noPadding>
          <div className="m-2">
            <HeatMap />
          </div>
        </CardComponent>
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
)(ConsumptionPage);
