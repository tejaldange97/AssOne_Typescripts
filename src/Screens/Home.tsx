import * as React from "react";

import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Details from "./Details";
interface Props {}
interface State {
  dataSource: any;
  showId: boolean;
  asteroId: any;
  data: boolean;
  details: boolean;
  name: any;
  url: any;
  is_potentially_hazardous_asteroid: any;
  ouputData: any;
}

export default class Home extends React.Component<Props, State> {
  state: State = {
    //count: 0,
    dataSource: [],
    ouputData: [],
    showId: true,
    asteroId: "",
    data: false,
    details: true,
    name: "",
    url: "",
    is_potentially_hazardous_asteroid: "",
  };

  componentDidMount() {
    let url =
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=fI2eNwr318OqhcJm0Avfn5TszH8zjRFkxvB2kgih";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          //loading: false,
          dataSource: responseJson.near_earth_objects,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  submit(id: any) {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=qzR9oSCAAaQsXUcAXMQzZZORQ5KCK7hI2k6Tj5HK`
    )
      .then((response) => response.json())
      .then((Json) => {
        this.setState({
          details: false,
          name: Json.name,
          url: Json.nasa_jpl_url,
          is_potentially_hazardous_asteroid: Json.is_potentially_hazardous_asteroid.toString(),
        });
      })
      .catch((error) => {
        //alert('Data not Found');
        console.log(error);
        this.setState({ details: true, showId: true, data: true });
      });
  }

  render() {
    return this.state.details ? (
      <div style={{ textAlign: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Assignment one</Typography>
          </Toolbar>
        </AppBar>

        <div style={style.div}>
          <TextField
            onChange={(event) =>
              this.setState({ asteroId: event.target.value })
            }
            value={this.state.asteroId}
            label="Enter Asteroid"
            // type="number"
            style={{ width: "80%", alignSelf: "center" }}
            inputProps={{ style: { fontSize: 25 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 25 } }} // font size of input label
          />

          <div style={{ marginTop: 50 }}>
            <Button
              variant="contained"
              color="primary"
              style={style.button}
              disabled={this.state.asteroId.length < 1 ? true : false}
              onClick={() => this.submit(this.state.asteroId)}
            >
              Submit
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.setState({ showId: false, data: false })}
              style={style.button}
            >
              Random Asteroid
            </Button>
          </div>

          {this.state.showId ? null : (
            <div>
              {this.state.dataSource.map((item: any, index: any) => (
                <div
                  onClick={() =>
                    this.setState({
                      details: false,
                      ouputData: item,
                      name: item.name,
                      url: item.nasa_jpl_url,
                      is_potentially_hazardous_asteroid: item.is_potentially_hazardous_asteroid.toString(),
                    })
                  }
                  style={style.container}
                >
                  <text style={style.id}>{item.id}</text>
                </div>
              ))}
            </div>
          )}

          {this.state.data ? (
            <div>
              <text style={style.text}>No Data Found</text>
            </div>
          ) : null}
        </div>
      </div>
    ) : (
      <Details ouputData={this.state.ouputData} />
    );
  }
}

const style = {
  button: {
    margin: 20,
    marginTop: 25,
    width: "25%",
    height: "25%",
  },
  id: {
    padding: 10,
    fontSize: 20,
  },
  text: {
    color: "#f0f",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#f0f0f0",

    marginTop: 20,
    height: "50%",
    margin: 30,
  },
  div: {
    marginTop: 50,
    alignItems: "center",
  },
};
