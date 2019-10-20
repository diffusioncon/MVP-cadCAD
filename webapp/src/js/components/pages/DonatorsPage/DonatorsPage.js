import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";

import "./DonatorsPage.css";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import CardComponent from "../../atoms/Card/Card";
import { Row, Col } from "react-bootstrap";

const allHouseholders = [
  {
    name: "Petar Atanasovski",
    voted: "2",
    create_at: "OCT 18, 2019",
    tokens: 1098
  },
  {
    name: "Milica Spasojević",
    voted: "8",
    create_at: "OCT 13, 2019",
    tokens: 200
  },
  {
    name: "Antun Debak",
    voted: "1",
    create_at: "OCT 14, 2019",
    tokens: 13670
  }
];

const allDonators = [
  {
    name: "Stefan Bürscher",
    company: "MVP Workshop",
    create_at: "OCT 15, 2019",
    invested: 150000
  },
  {
    name: "Filip Petrović",
    company: "MVP Workshop",
    create_at: "OCT 18, 2019",
    invested: 100000
  },
  {
    name: "Milan Pajović",
    company: "MVP Workshop",
    create_at: "OCT 19, 2019",
    invested: 125000
  },
  {
    name: "Miloš Novitović",
    company: "MVP Workshop",
    create_at: "OCT 19, 2019",
    invested: 125000
  }
];

const COLORS = ["#0088FE", "#429798", "#FFBB28", "#FF8042"];

class DonatorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  renderDonators = () =>
    allDonators.map(({ name, company, create_at, invested }) => (
      <CardComponent noPadding noMargin className="mb-2 shadow-none">
        <Row className="mx-3 my-4">
          <Col>
            <strong>{name}</strong>
          </Col>
          <Col>{company}</Col>
          <Col>{create_at}</Col>
          <Col style={{ color: "#429798" }}>
            <strong>${invested}</strong>
          </Col>
        </Row>
      </CardComponent>
    ));

  renderHouseHolders = () =>
    allHouseholders.map(({ name, voted, create_at, tokens }) => (
      <CardComponent noPadding noMargin className="mb-2 shadow-none">
        <Row className="mx-3 my-4">
          <Col>
            <strong>{name}</strong>
          </Col>
          <Col>{voted} requests</Col>
          <Col>{create_at}</Col>
          <Col style={{ color: "#429798" }}>
            <strong>{tokens} IT</strong>
          </Col>
        </Row>
      </CardComponent>
    ));
  render() {
    const DonatorsList = this.renderDonators;
    const HouseholdersList = this.renderHouseHolders;

    let calculation = JSON.stringify(allDonators);
    calculation = JSON.parse(calculation).map(donator => {
      donator.invested = donator.invested / 5000 / 2;
      return donator;
    });
    calculation.push({
      name: "Householders",
      invested: 50
    });
    return (
      <RegularLayout>
        <h1 className="mb-4">Donators</h1>
        <CardComponent>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  dataKey="invested"
                  isAnimationActive={false}
                  data={calculation}
                  fill="#429798"
                  label
                >
                  {calculation.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardComponent>
        <br />
        <br />
        <h1 className="mb-4">Donators ({allDonators.length})</h1>
        <Row
          className="mx-3 mb-2"
          style={{ color: "rgb(151, 154, 160)", fontWeight: "bold" }}
        >
          <Col>Name</Col>
          <Col>Company</Col>
          <Col>Donator since</Col>
          <Col>Donate amount</Col>
        </Row>
        <DonatorsList />
        <br />
        <br />
        <h1 className="mb-4">Householders ({allHouseholders.length})</h1>
        <Row
          className="mx-3 mb-2"
          style={{ color: "rgb(151, 154, 160)", fontWeight: "bold" }}
        >
          <Col>Name</Col>
          <Col>Voted on</Col>
          <Col>Householder since</Col>
          <Col>Number of tokens</Col>
        </Row>
        <HouseholdersList />
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
)(DonatorsPage);
