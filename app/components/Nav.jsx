var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <indexlink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</indexlink>
            </li>
            <li>
              <link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</link>
            </li>
            <li>
              <link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
