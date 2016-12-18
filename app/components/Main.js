import React from "react";

// Import sub-components
import Form from "./children/Form";
import Results from "./children/Results";
import Saved from "./children/Saved";

// Helper Function
import helpers from "./utils/helpers";

class Main extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      searchTerm: "",
      startYear: "",
      endYear: "",
      numRecords: "",
      results: [{title:"", url:""}],
      title: "",
      url: ""
    };

    this.setTerm = this.setTerm.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) ||
       (prevState.startYear !== this.state.startYear) ||
       (prevState.endYear !== this.state.endYear)) || 
       (prevState.numRecords !== this.state.numRecords)) || {
       console.log("UPDATED");

      helpers.searchArticles(this.state.searchTerm), this.state.startYear, this.state.endYear, this.state.numRecords).then((data) => {
        if (data !== this.state.results) {
          console.log(data);

          this.setState({ results: data });
        }
      });
    }
  }

  setTerm(data) {
    this.setState({
      searchTerm: data.searchTerm,
      startYear:  data.startYear,
      endYear: data.endYear,
      numRecords: data.numRecords
    });
  }



  render() {

    return (

      <div className="container">
          <div className="jumbotron">
            <h1 className="text-center">New York Times Search Engine</h1>
          </div>

          <Form setTerm={this.setTerm} />
          <Results articles={this.state.results} />
          <Saved articles={this.state.saved} />
          
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;
