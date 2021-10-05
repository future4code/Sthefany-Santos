
import React from "react";
import axios from "axios";
import  styled  from "styled-components";


const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`


export default class TelaListasUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

    pegarUsuarios = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      axios.get(url, {
        headers: {
            Authorization: "Sthefany-Lara-Maryam"
        }
      })

      .then((res) => {
        this.setState({usuarios: res.data})
      })

      .catch((err) => {
        alert("Ocorreu um problema, tente novamente")
      })

    }

    deleteUsuario = (id) => {
        const url= `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}` 
        axios.delete(url, {
          headers: {
            Authorization: "Sthefany-Lara-Maryam"
          }
        })
        .then ((res) => {
          alert("Usuário(a) deletado(a) com sucesso!")
          this.pegarUsuarios()
        })

        .catch((err) => {
          alert("Ocorreu um erro, tente novamente")
        })


    }
  
  render(){
      const listaUsuarios = this.state.usuarios.map((user) => {
        return <CardUsuario key= {user.id}>
          {user.name}
          <button onClick={() => this.deleteUsuario(user.id)}>x</button>
          </CardUsuario>
      })

      return(
        <div>
          <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
          <h2>Lista de usuários</h2>
          {listaUsuarios}
        </div>
      );
    }
}