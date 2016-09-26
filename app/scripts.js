const leaderboard = document.getElementById("leaderboard");

let daniel = "http://www.freecodecamp.com/profoundhub";
let recent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
let alltime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

var TableTop = React.createClass({
  change: function(x) {
    this.props.changeSrc(x);
  },

  render: function(){
    return (
      <tr id="header">
        <th>Rank</th>
        <th>Avatar</th>
        <th>UserName</th>
        <th onClick = { this.change.bind(this, alltime) }>
          <i className="fa fa-check" aria-hidden="true"></i>
            <a>All Time</a>
        </th>
        <th onClick = { this.change.bind(this, recent) }>
          <i className="fa fa-check" aria-hidden="true"></i>
            <a>Recent</a>
        </th>
      </tr>
    );
  }
});


var Template = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          { this.props.index }
        </td>
        <td>
          <p>
            <img src={ this.props.data["img"] } />
          </p>
        </td>
        <td>
          <p>
            { this.props.data["username"] }
          </p>
        </td>
        <td>
          <p>
            { this.props.data["alltime"] }
          </p>
        </td>
        <td>
          <p>
            { this.props.data["recent"] }
          </p>
        </td>
      </tr>
    );
  }
});


var LeaderBoard = React.createClass({
  getInitialState: function() {
    return {
      source: recent,
      data: [],
    };
  },

  componentDidMount: function() {
    this.changeSrc(this.state.source);
  },

});

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <p>By: <a href="http://www.freecodecamp.com/profoundhub" target="_blank">Daniel Lim</a></p>
        </div>
      </footer>
    );
  }
}

ReactDOM.render(
  /* <Template />
  <Footer /> */
  <LeaderBoard />, leaderboard
);
