var React = require('react');
var {Link} = require('react-router');


// var Examples = React.createClass({
//   render: function(){
//     return (
//       <h2>Examples Component</h2>
//     );
//   }
// });

var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few some examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Bangkok'>Bangkok , BKK</Link>
        </li>
        <li>
          <Link to='/?location=Chiangmai'>Chaingmai , CHM</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
