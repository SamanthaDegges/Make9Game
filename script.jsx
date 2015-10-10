var Title = React.createClass({
  render: function(){
    return (
      <div className = "row">
        <div className="text-center col-lg-12"><h3>Play Nine</h3></div>
        <h5 className="instructions">Make the total number of stars equal to the sum of your numbers.</h5>
      </div>
    );
  }
});

var Stars = React.createClass({
  getStars: function() {
    var totalStars = Math.floor((Math.random() * 10) + 1);
  },
  generateStars: function() {
    console.log(totalStars);
  },
  render: function() {
    return (
      <div className = "col-md-5">
        <h5 className="instructions"> Total Stars: </h5>
        <div className="panel panel-default">
          <div className = "panel-body">
            console.log(getStars())
          </div>
        </div>
      </div>
    );
  }
});

var PlayNumbers = React.createClass({
  render: function() {
    return (
      <div className = "row">
        <div className = "col-md-5 col-sm-5">
          <h5 className="instructions"> Play your Numbers: </h5>
          <div className="panel panel-default">
            <div className = "panel-body">
              intentionally blank.
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Numbers = React.createClass({
  render: function() {
    return (
      <div>
        <h5 className="instructions"> Your numbers: </h5>
        <div className="panel panel-default">
          <div className = "panel-body">
            numbers tokens here.
            </div>
        </div>
      </div>
    );
  }
});

var PassButton = React.createClass({
  handleClick: function() {
    console.log('clicked');
  },
  render: function() {
    return (
      <div id ="symbols">
        <button type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
        </button>
      </div>
    );
  }
})

var EqualsButton = React.createClass({
  handleClick: function(event) {
    console.log('Equals clicked: maps possible answers');
  },
  render: function() {
    return (
      <div id ="symbols">
        <button onClick = {this.handleClick} type="button" className="btn btn-primary">=</button>
      </div>
    );
  }
})

 var App = React.createClass({
   render: function() {
     return (
        <div>
          <Title />
        <div className="row">
          <div className = "col-md-5 col-sm-5"><Stars /></div>
          <div className = "col-md-2 col-sm-2"><PassButton /><EqualsButton /></div>
          <div className = "col-md-5 col-sm-5"><Numbers /></div>
        </div>
        <PlayNumbers />
       </div>
      );
     }
  });

 React.render(<App />, document.getElementById("main"));

 // The games endstate will be triggered when no item in the array can match the total of stars.

 // All possible sums will be an array, derived from a forEach loop or map, in the Your Numbers section.

// this state, the array of possible answers will need to communicate with the total number of stars, the equals button.

// The stars will be fed data from the equals and the reset button.
