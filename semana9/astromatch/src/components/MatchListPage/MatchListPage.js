import React, { useState, useEffect } from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";
import axios from "axios";


const listContainer = styled.div`
    padding: 8px;

`

function MatchListPage() {

    const [matches, setMatches] = useState([])


    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sthefany/matches')
        .then(response =>{
            console.log(response.data.matches)
            setMatches(response.data.matches)
        });
    }, []);

    return(
        <listContainer>
            {matches.map((profile)=> {
                return <MatchListItem profile={profile} />
            })}
        </listContainer>
    );
}

export default MatchListPage;