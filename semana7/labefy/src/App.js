import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import PlaylistManagerPage from './components/PlaylistManagerPage';
import PlaylistCreationPage from './components/PlaylistCreationPage';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: grey;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    currentPage: "PlaylistCreationPage"
  }

  changePage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render () {
    // const renderCurrentPage = () => {
    //   if (this.state.currentPage === "PlaylistCreationPage"){
    //     return <PlaylistCreationPage />
    //   } else if (this.state.currentPage === "PlaylistManagerPage"){
    //     return <PlaylistManagerPage />
    //   }
    // } 

  return (
      <AppContainer>
        <Header  
          changePage={this.changePage} 
        />
        {renderCurrentPage()}
      </AppContainer>
    );
  }
}

export default App;
