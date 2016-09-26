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

class Template extends React.Component {
  render() {
    return <div> </div>;
  }
  /*
  componentWillMount: function() {
    this.serverRequest1 = $.ajax({
      type: 'GET',
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      success: function(data) {
        let count = 1;
      }
    }) */
}

class LeaderBoard extends React.Component{
  render(){
    return <h1>Build an FCC Camper Leaderboard!</h1>
  }
}


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
  <Template />,
  <LeaderBoard />, leaderboard,
  <Footer />
);
