var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <indexlink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</indexlink>
      <link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</link>
      <link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</link>

    </div>
  );
};

module.exports = Nav;
