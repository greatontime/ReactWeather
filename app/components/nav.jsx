var React = require('react');
var {Link} = require('react-router');

// var Nav = React.createClass({
//   render: function(){
//     return (
//       <div>
//       <h2>Nav Component</h2>
//       <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather | </Link>
//       <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About | </Link>
//       <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples | </Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
    <h2>Nav Component</h2>
    <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather | </Link>
    <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About | </Link>
    <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples | </Link>
    </div>
  );
}

module.exports = Nav;
