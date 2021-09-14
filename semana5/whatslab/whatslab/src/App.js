import React from "react";
import styled from "styled-components"

const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  `


const MessagesContainer = styled.div `
 border: 1px solid blue;
 flex-grow: 1;
`

const InputsContainer = styled.div `
 border: 1px solid red;
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MessagesContainer/>
        <InputsContainer>
          <input placeholder={"Nome"}/>
          <input placeholder={"Mensagem"}/>
          <button>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;
