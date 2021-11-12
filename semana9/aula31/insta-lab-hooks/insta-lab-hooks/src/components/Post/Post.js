import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useComentando(false)
  const [numeroComentarios, setNumeroComentarios] = useNumeroComentarios(0)
  const [comentarios, setComentarios] = useComentarios([])

  const onClickCurtida = (event) => {
    if(curtido){
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    }else{
      setCurtido(!curtido)
      setNumerosCustidas(numeroCurtidas + 1)
    }
    
  };

  const onClickComentario = () => {
    setComentando (!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          iconeCurtida={iconeCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post