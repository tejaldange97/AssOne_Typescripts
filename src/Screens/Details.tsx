import * as React from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Home from "./Home";
import { Card } from "./Card";
interface Props {
  ouputData: any;
}
interface State {
  flag: boolean;
}

export default class Count extends React.Component<Props, State> {
  state: State = {
    flag: true,
  };

  render() {
    console.log(JSON.stringify(this.props.ouputData));
    return this.state.flag ? (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Assignment one</Typography>
          </Toolbar>
        </AppBar>
        <div
          style={{
            width: "100rem",
            margin: "0 auto",
            marginTop: 20,
            float: "none",
            marginBottom: "10px",
            border: "inset",
            padding: 10,
          }}
        >
          <Card name={"Name:-"} value={this.props.ouputData.name} />
          <Card
            name={"nasa_jpl_url:-"}
            value={this.props.ouputData.nasa_jpl_url}
          />

          <Card
            name={"is_potentially_hazardous_asteroid:-"}
            value={this.props.ouputData.is_potentially_hazardous_asteroid.toString()}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              margin: 20,
              width: "15%",
              height: "25%",
              fontWeight: "bold",
              fontSize: "unset",
              marginTop: 30,
            }}
            onClick={() => this.setState({ flag: false })}
          >
            Back
          </Button>
        </div>
      </div>
    ) : (
      <Home />
    );
  }
}
const style = {
  button: {
    margin: 20,
    width: "15%",
    height: "25%",
    fontWeight: "bold",
    fontSize: "unset",
    marginTop: 30,
  },
  container: {
    width: "100rem",
    margin: "0 auto",
    marginTop: 20,
    float: "none",
    marginBottom: "10px",
    border: "inset",
    padding: 10,
  },
};
