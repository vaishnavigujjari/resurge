import React, { useState } from 'react';
import StateCard from "../../components/StateCard"
import SearchBar from "../../components/SearchBar"
import { States } from '../../assets/state_flags.js';

const Statewise = () => {

    const [filteredStates, setFilteredStates] = useState(States);

    return (
        <>
            <SearchBar setFilteredStates={setFilteredStates}/>
            <StateCard filteredStates={filteredStates} />
        </>
    )
}

export default Statewise