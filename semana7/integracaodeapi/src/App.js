
import react from 'react';
import styled from 'styled-components';


const appContainer = styled.div`
  border: 1px solid black;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`

const inputContainer = styled.label`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  /* display: grid;
  grid-auto-flow: column;
  align-items: center;
  font-family: 'corbel'; */
`

function App() {
  return (

    <inputContainer>
      Nome: 
    <input type="text"/>
    </inputContainer>
    <inputContainer>
      E-mail: 
    <input type="text"/>

  </appContainer>
  
  );
}

export default App;
