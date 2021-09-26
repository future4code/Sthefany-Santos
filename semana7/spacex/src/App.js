import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    missions : [

    ]
  }

  componentDidMount() {
    this.getMissions();
  }

  getMissions = () => {
    axios
    .get("https://api.spacexdata.com/v3/missions")
    .then((res) => {
      console.log(res.data);
      this.setState({missions : res.data})
    })
    .catch((err) => {
      console.log(err)
    });
  };

  render() {
    const missionsList = this.state.missions.map((mission) => {
      return (
        <div key={mission.mission_id}>
          <p>Nome: {mission.mission_name}</p>
          <p>Fabricantes: {mission.manufacturers.map((manufacturer) => <p>{manufacturer}</p>)}
          </p>
          <a href={mission.wikipedia}>Link para a Wikipédia</a>
          <hr />
        </div>
      );
    })
    return (
      <div className="App">
        <h1> SpaceX Missions</h1>
        {missionsList}
      </div>
    );
  }
}

