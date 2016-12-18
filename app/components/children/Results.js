import React from "react";

class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      url: ""
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    this.state.title = event.target.title.value;
    this.state.url = event.target.url.value;

    this.props.setSaveData(this.state);
    this.setState({ title: "" });
    this.setState({ url: "" });
  }

  render() {
    return (

      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong>Articles Found</strong></h3>
            </div>  
            <div className="panel-body" id="wellSection">

              <div> {
                this.props.results.length > 0 && this.props.results[0].title != "" &&
                this.props.results.map(function(data, i) {
                    return 
                    <div key={i} className='articleContainer'>

                      <form onSubmit={this.handleSubmit}>
                          <input 
                            type="hidden" 
                            id="title" 
                            defaultValue={data.title}
                            ref={ (title) => this.title = title } 
                          /> 

                          <input 
                            type="hidden" 
                            id="url" 
                            defaultValue={data.url} 
                            ref={(url) => this.url=url} 
                          /> 
                          <h2>{data.title}</h2> 
                          <p>{data.url}</p> 
                          <button type="submit" className="btn btn-default" id="runSearch">Save Article</button>
                      </form>
                    </div>
                }, this)
              } 
              </div> 

            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Results;
