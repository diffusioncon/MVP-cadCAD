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
    "Electricity price": 0.13,
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
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "11h",
    "Electricity price": 0.13,
    "Average electricity price": 0.1
  },
  {
    name: "12h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "13h",
    "Electricity price": 0.09,
    "Average electricity price": 0.1
  },
  {
    name: "14h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "15h",
    "Electricity price": 0.07,
    "Average electricity price": 0.1
  },
  {
    name: "16h",
    "Electricity price": 0.08,
    "Average electricity price": 0.1
  },
  {
    name: "17h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "18h",
    "Electricity price": 0.13,
    "Average electricity price": 0.1
  },
  {
    name: "19h",
    "Electricity price": 0.1,
    "Average electricity price": 0.1
  },
  {
    name: "20h",
    "Electricity price": 0.09,
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
