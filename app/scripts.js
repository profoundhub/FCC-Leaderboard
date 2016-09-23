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
          <p>By: <a href="http://www.freecodecamp.com/profoundhub" target="_blank">Daniel</a></p>
        </div>
      </footer>
    );
  }
}


ReactDOM.render(
  <Template />,
  <LeaderBoard />, document.getElementById('leaderboard'),
  <Footer />
);
