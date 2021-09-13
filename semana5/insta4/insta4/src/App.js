import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component 
  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/150941471_3714246128695515_1480425181085982665_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHBsxBfy2du7oU8YvrgGZJ-GKtrNi9q-msYq2s2L2r6aw4JWqQY1jJWJHr3hd7Y9TN7BltEBuTC1xRe7IRg-WF5&_nc_ohc=tONvu6PiUhAAX-aavf1&_nc_ht=scontent.fcgh12-1.fna&oh=c6fd2b50209593d854520bf715c34d6b&oe=61612D34"
      },
      {
        nomeUsuario:"Amandinha",
        fotoUsuario:"https://scontent.fcgh12-1.fna.fbcdn.net/v/t31.18172-8/1397233_634504896570217_1196093951_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=de6eea&_nc_eui2=AeHBl1o2eT5VX448CXj1LxmPktxuEqQ_CxGS3G4SpD8LEeU2i9iajTn4k_ryiimHmoltJsp6zrTCuZfOvDktHu_t&_nc_ohc=3Y3IHvCciN8AX-q1RFe&_nc_ht=scontent.fcgh12-1.fna&oh=c1a0c5eea1fa7a59240ab4fd0d09c919&oe=6162102F",
        fotoPost: "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/141839276_3816185455068796_9088710235937716917_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF5uIh_OwD0XV-_QnQQ_IDYukWihlH7zU66RaKGUfvNTmD7ATRoZFsCmWyO9ZuXSq5zRlbdPOH2Bsixm2oit8ab&_nc_ohc=9FQR69xgzEEAX_2AkQL&tn=3zsNFWeptyb3HuCv&_nc_ht=scontent.fcgh12-1.fna&oh=fa817dac1429578213e1d4b410e36040&oe=6161EFD3"
      },
      {
        nomeUsuario:'Louisinho'
        fotoUsuario:"https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/79151769_2252492774852475_3725745427606142976_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHRHguA-w2NrDyoGSpVG8nhKyV5qtuj4WIrJXmq26PhYvHX-BHeOMvR0U_15sEKENGRUk8_JiVRxYqsMsQ_SY0j&_nc_ohc=KLOV2GPZiT8AX-_hII-&tn=3zsNFWeptyb3HuCv&_nc_ht=scontent.fcgh12-1.fna&oh=11dad0e4535888f217796640cea1a579&oe=6160D702"
        fotoPost: "https://scontent.fcgh12-1.fna.fbcdn.net/v/t1.6435-9/123013451_3055821691186242_2849942888162424421_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH_eFZVaImn3w-QYczq68Xx77IfdpFyfZ_vsh92kXJ9n0pKCHVsAqFR5to24aDKTy3nnKn9x0cCB7dMwvJxpJ5i&_nc_ohc=ypSOn1l4HqcAX96rfkU&_nc_ht=scontent.fcgh12-1.fna&oh=e66916c6e7d33f94dc40863b003f4274&oe=616165FF"
      },

      render (){
        const listaDePosts = this.state.posts.map((post) => {
          return <p>{post}</p>
        });

        return (
          <div>
          <MainContainer>{listaDePosts}</MainContainer>
          </div>
        );

      }
    ]
  }
{
  
export default App;
