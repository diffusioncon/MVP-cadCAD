import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

import "./BatteryPage.css";
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

const chartData = [
  {
    name: "0h",
    "Battery level": 25,
    "Max battery capacity": 100
  },
  {
    name: "1h",
    "Battery level": 27,
    "Max battery capacity": 100
  },
  {
    name: "2h",
    "Battery level": 29,
    "Max battery capacity": 100
  },
  {
    name: "3h",
    "Battery level": 30,
    "Max battery capacity": 100
  },
  {
    name: "4h",
    "Battery level": 33,
    "Max battery capacity": 100
  },
  {
    name: "5h",
    "Battery level": 37,
    "Max battery capacity": 100
  },
  {
    name: "6h",
    "Battery level": 39,
    "Max battery capacity": 100
  },
  {
    name: "7h",
    "Battery level": 40,
    "Max battery capacity": 100
  },
  {
    name: "8h",
    "Battery level": 45,
    "Max battery capacity": 100
  },
  {
    name: "9h",
    "Battery level": 50,
    "Max battery capacity": 100
  },
  {
    name: "10h",
    "Battery level": 65,
    "Max battery capacity": 100
  },
  {
    name: "11h",
    "Battery level": 78,
    "Max battery capacity": 100
  },
  {
    name: "12h",
    "Battery level": 87,
    "Max battery capacity": 100
  },
  {
    name: "13h",
    "Battery level": 100,
    "Max battery capacity": 100
  },
  {
    name: "14h",
    "Battery level": 100,
    "Max battery capacity": 100
  },
  {
    name: "15h",
    "Battery level": 100,
    "Max battery capacity": 100
  },
  {
    name: "16h",
    "Battery level": 95,
    "Max battery capacity": 100
  },
  {
    name: "17h",
    "Battery level": 80,
    "Max battery capacity": 100
  },
  {
    name: "18h",
    "Battery level": 75,
    "Max battery capacity": 100
  },
  {
    name: "19h",
    "Battery level": 60,
    "Max battery capacity": 100
  },
  {
    name: "20h",
    "Battery level": 60,
    "Max battery capacity": 100
  },
  {
    name: "21h",
    "Battery level": 55,
    "Max battery capacity": 100
  },
  {
    name: "22h",
    "Battery level": 50,
    "Max battery capacity": 100
  },
  {
    name: "23h",
    "Battery level": 30,
    "Max battery capacity": 100
  }
];

class BatteryPage extends React.Component {
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
            <Line
              type="monotone"
              dataKey="Max battery capacity"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Battery level" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  render() {
    const ConsumptionChart = this.renderConsumptionChart;

    return (
      <RegularLayout>
        <h1 className="mb-4">Battery level</h1>
        <CardComponent titleText="Battery level percentage" className="pb-3">
          <ConsumptionChart />
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
)(BatteryPage);
