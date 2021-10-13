import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";
import axios from "axios";

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined)


  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefany/person').then(response => { 
      setProfileToChoose(response.data.profile)
    })
  }

  const chooseProfile = (choice) => {
      const body = {
        choice: choice,
        id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefany/choose-person', body).then(response => {
      console.log(response)
      getProfileToChoose()
    })
  }

  useEffect(() => {
    getProfileToChoose()
    }, []);

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

    return (
    <div>
      { profileToChoose ?
        (<>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons 
          onClickNo={onClickNo} 
          onClickYes={onClickYes}/>
        </>) : <p>Carregando...</p>
      }
    </div>
    );
}

export default ChooseProfilePage;
