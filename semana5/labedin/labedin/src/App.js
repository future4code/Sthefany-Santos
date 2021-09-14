import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/150941471_3714246128695515_1480425181085982665_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHBsxBfy2du7oU8YvrgGZJ-GKtrNi9q-msYq2s2L2r6aw4JWqQY1jJWJHr3hd7Y9TN7BltEBuTC1xRe7IRg-WF5&_nc_ohc=9pgVTeJd1oIAX8OZY1f&_nc_ht=scontent.fcgh12-1.fna&oh=6e2736d13e5520e0bf669cf153577dae&oe=615D38B4" 
          nome="Sthefany" 
          descricao="Oi, eu sou a Sthefany. Sou estudante de programação web. Adoro estudar e chorar."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
      <CardPequeno
        imagem=""
        descricao="Email: Sthefany.gabriele@hotmail.com"
      />
            <CardPequeno
        imagem=""
        descricao="Endereço: Rua das lágrimas"
      />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/142105957_3629184787201650_2825311001133874869_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHV2Kuom0QJQqR9FbZ8Ps6adiPQzPEPBYl2I9DM8Q8FiXso3d1MnzRJGpAjib5GFRcEL5ucXjwsi0QY-gmFd24-&_nc_ohc=Je0DEwkggaIAX8734E9&_nc_ht=scontent.fcgh12-1.fna&oh=9c4b160bed19b4e516a7c35af02fa916&oe=6160E3CA" 
          nome="JCS Reformas" 
          descricao="Administrativo e Projetos" 
        />
        
        <CardGrande 
          imagem="https://scontent.fcgh12-1.fna.fbcdn.net/v/t31.18172-8/23783796_1493522354101248_1204531253688584471_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGTYr7jbRmcAWTu8wzjzAaFa9hMSgqYpORr2ExKCpik5C6bOL7pjtkb_eNJLBLZhZiUmyLk7SmKhUN0N4JRS7nj&_nc_ohc=Kn9Gz0BYufgAX-hJhfd&_nc_ht=scontent.fcgh12-1.fna&oh=ff8aca270a6c218e1192b7c2c0d44987&oe=615FA52B" 
          nome="Tender Marine" 
          descricao="Projetos e orçamentos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
