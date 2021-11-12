import axios from "axios";
import React from "react"


function ResetButton() {

    const onClickResetButton = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefany/clear').then(response => {
            console.log(response)
        })
    }


    return(
    <div><button onClick={onClickResetButton}>Resetar curtidas e matches</button></div>
    )
}

export default ResetButton;