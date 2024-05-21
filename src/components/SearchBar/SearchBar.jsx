import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import states from '../../assets/state_flags.json';

const SearchBar = ({setFilteredStates}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event, value) => {
        setInputValue(value);
        console.log(value,states,"state")
        console.log(states.filter((state) =>
            state.state.toLowerCase().includes(value.toLowerCase())
        ), "this")
        setFilteredStates(
            states.filter((state) =>
                state.state.toLowerCase().includes(value.toLowerCase())
            )
        );
    };
    return (
        <>
            <Autocomplete
                sx={{ width: 300,  m: 10 }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                onInputChange={handleInputChange}
                options={states.map((option) => option.state)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search by State"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </>
    )
}

export default SearchBar;