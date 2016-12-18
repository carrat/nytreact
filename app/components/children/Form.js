import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      numRecords: 10,
      startYear: "",
      endYear: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    this.props.setTerm(this.state);
    this.setState({ searchTerm: "" });
    this.setState({ numRecords: "" });
    this.setState({ startYear: "" });
    this.setState({ endYear: "" });
  }

  render() {

    return (

      <div className="row">
        <div className="col-sm-12">

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Search Parameters</strong></h3>
            </div>
            
            <div className="panel-body">

              <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                  <label for="searchTerm">Search Term:</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="searchTerm"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="numRecords">Number of Records to Retrieve:</label>
                  <select 
                  className="form-control" 
                  id="numRecords" 
                  value={this.state.numRecords}
                  onChange={this.handleChange}
                  required>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                  </select>       
                </div>

                <div className="form-group">
                  <label for="startYear">Start Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="startYear"
                    value={this.state.startYear}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label for="endYear">End Year (Optional):</label>
                  <input
                    type="text"
                    className="form-control text-center"
                    id="endYear"
                    value={this.state.endYear}
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-default" id="runSearch">Search</button>
                <button type="button" className="btn btn-default" id="clearAll">Clear Results</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
