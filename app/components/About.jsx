var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. I have built this for the complete web app React course</p>
      <p>Here are some of the tools i used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - That was the Javascript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather of cities
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
