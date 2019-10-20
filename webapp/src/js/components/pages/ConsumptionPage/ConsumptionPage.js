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

const chartData = [
  {
    name: "0h",
    "Electricity consumption": 8,
    "Average Electricity consumption": 0.1
  },
  {
    name: "1h",
    "Electricity consumption": 9,
    "Average Electricity consumption": 0.1
  },
  {
    name: "2h",
    "Electricity consumption": 8.7,
    "Average Electricity consumption": 0.1
  },
  {
    name: "3h",
    "Electricity consumption": 6,
    "Average Electricity consumption": 0.1
  },
  {
    name: "4h",
    "Electricity consumption": 7,
    "Average Electricity consumption": 0.1
  },
  {
    name: "5h",
    "Electricity consumption": 8,
    "Average Electricity consumption": 0.1
  },
  {
    name: "6h",
    "Electricity consumption": 9,
    "Average Electricity consumption": 0.1
  },
  {
    name: "7h",
    "Electricity consumption": 11,
    "Average Electricity consumption": 0.1
  },
  {
    name: "8h",
    "Electricity consumption": 14,
    "Average Electricity consumption": 0.1
  },
  {
    name: "9h",
    "Electricity consumption": 15,
    "Average Electricity consumption": 0.1
  },
  {
    name: "10h",
    "Electricity consumption": 16,
    "Average Electricity consumption": 0.1
  },
  {
    name: "11h",
    "Electricity consumption": 19,
    "Average Electricity consumption": 0.1
  },
  {
    name: "12h",
    "Electricity consumption": 20,
    "Average Electricity consumption": 0.1
  },
  {
    name: "13h",
    "Electricity consumption": 21,
    "Average Electricity consumption": 0.1
  },
  {
    name: "14h",
    "Electricity consumption": 22,
    "Average Electricity consumption": 0.1
  },
  {
    name: "15h",
    "Electricity consumption": 23,
    "Average Electricity consumption": 0.1
  },
  {
    name: "16h",
    "Electricity consumption": 23,
    "Average Electricity consumption": 0.1
  },
  {
    name: "17h",
    "Electricity consumption": 24,
    "Average Electricity consumption": 0.1
  },
  {
    name: "18h",
    "Electricity consumption": 26,
    "Average Electricity consumption": 0.1
  },
  {
    name: "19h",
    "Electricity consumption": 24,
    "Average Electricity consumption": 0.1
  },
  {
    name: "20h",
    "Electricity consumption": 25,
    "Average Electricity consumption": 0.1
  },
  {
    name: "21h",
    "Electricity consumption": 23,
    "Average Electricity consumption": 0.1
  },
  {
    name: "22h",
    "Electricity consumption": 24,
    "Average Electricity consumption": 0.1
  },
  {
    name: "23h",
    "Electricity consumption": 15,
    "Average Electricity consumption": 0.1
  }
];
class ConsumptionPage extends React.Component {
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
              dataKey="Average Electricity consumption"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            /> */}
            <Line
              type="monotone"
              dataKey="Electricity consumption"
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
        <h1 className="mb-4">Community usage</h1>
        <CardComponent
          className="pb-3"
          titleText="Electricity consumption graph"
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
