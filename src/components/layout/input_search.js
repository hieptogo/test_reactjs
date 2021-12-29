import * as React from 'react';
import { useState } from "react";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const SearchPage = props => {
    const { data, setUpdateData } = props;
    const [query, setQuery] = useState('');

    const filterArray = e => {
        e.preventDefault();
        if (query) {
            const filterData = data.filter((element) => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            })

            setUpdateData({ dataNew: filterData });
        }
    }

    return (
        <Paper component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={e => setQuery(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={e => filterArray(e)}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
export default SearchPage;