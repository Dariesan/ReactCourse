import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  state = { lat: null, long: null, error: "" };
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ error: err.message })
    );
  }

  //Helper method
  renderContent() {
    if (this.state.lat && !this.state.error)
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );

    if (!this.state.lat && this.state.error)
      return <div className="eroare">Error: {this.state.error}</div>;

    return <Spinner message="Please accept the location request" />;
  }
  //React says we have to define render!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//     );

//     return(
//         <div>Latitue: </div>
//     );
// };

ReactDOM.render(<App />, document.querySelector("#root"));
