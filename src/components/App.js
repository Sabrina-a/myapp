import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
class App extends React.Component {
  onSearchSubmit(term) {
    axios
      .get("http://www.omdbapi.com", {
        params: { api_key: "3c93bf24", s: term },
      })
      .then((Response) => {
        console.log(Response);
      });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
