var React = require('react');
var Nav = require('Nav');

//
// var Main = React.createClass({
//   render: function() {
//       return (
//         <div>
//           <Nav/>
//           <h2>Main Component</h2>
//           {this.props.children}
//         </div>
//       );
//   }
// });


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="grid-x grid-padding-x">
        <div className="cell medium-6 large-4 small-centered">
            {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
