import React, { useState } from 'react';
import StateCard from "../../components/StateCard"
import SearchBar from "../../components/SearchBar"
import states from '../../assets/state_flags.json';

const Statewise = () => {

    const [filteredStates, setFilteredStates] = useState(states);

    return(
        <>
            <SearchBar setFilteredStates={setFilteredStates}/>
            <StateCard filteredStates={filteredStates} />
        </>
    )
}

export default Statewise