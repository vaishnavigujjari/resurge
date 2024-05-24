import React, { useState } from 'react';
import "./SearchBar.css";

const SearchBar = ({ setFilteredStates }) => {
    return (
        <>
            <div className='search-container'>
                <form className='search'>
                    <span className='material-symbols-outlined'>
                        Search
                    </span>
                    
                    <input type='search' className='search-input' placeholder='Search' />
                </form>
            </div>
        </>
    )
}

export default SearchBar;


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { States } from '../../assets/state_flags.js';

// const SearchBar = ({ setFilteredStates }) => {

//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (event, value) => {
//         setInputValue(value);
//         setFilteredStates(
//             States.filter((state) =>
//                 state.state.toLowerCase().includes(value.toLowerCase())
//             )
//         );
//     };
//     return (
//         <>
//             <Autocomplete
//                 sx={{ width: 300, m: 10 }}
//                 freeSolo
//                 id="free-solo-2-demo"
//                 disableClearable
//                 onInputChange={handleInputChange}
//                 options={States.map((option) => option.state)}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label="Search by State"
//                         InputProps={{
//                             ...params.InputProps,
//                             type: 'search',
//                         }}
//                     />
//                 )}
//             />
//         </>
//     )
// }

// export default SearchBar;