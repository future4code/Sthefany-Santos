import './App.css';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid black;
  background-color: #0b687a;
  color: whitesmoke;


`

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
          <button><a href={mission.wikipedia}>Link para a Wikipédia</a></button>
          <hr />
        </div>
      );
    })
    return (
    <AppContainer>
      <div className="App">
        <h1> SpaceX Missions</h1>
        {missionsList}
      </div>
    </AppContainer>
    );
  }
}

