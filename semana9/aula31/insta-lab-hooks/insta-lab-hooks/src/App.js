import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

import React, { useState } from 'react'


const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


const Post = (props) => {
   const [curtido, setCurtido] = useState(false)

   onChangeCurtido = (event) => {
     setCurtido(event.target.value)
   }

   const [numeroCurtidas, setNumeroCurtidas] = useState("")

   const [comentando, setComentando] = useComentando(false)

   const [numeroComentarios, setNumeroComentarios] = useNumeroComentarios(+1)

   const [comentarios, setComentarios] = useComentarios(false)
}

const App = () => {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Usuário'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </AppContainer>
  );
}


export default App;
