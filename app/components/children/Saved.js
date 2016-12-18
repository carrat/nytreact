import React from "react";

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
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
    console.log(this.state.term);
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  }

  render() {

    return 
  }
}

export default Saved;
