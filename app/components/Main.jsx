var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="column medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
