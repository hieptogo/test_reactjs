import React, { useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchPage = props => {
    const {data, setUpdateData} = props;
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const filterArray = () => {
        if(query){
            const filterData = data.filter((element) => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            })

            setUpdateData({dataNew: filterData});
        }
    }

    return (
        <InputGroup size="sm">
            <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
            <FormControl onChange={e => handleInputChange(e)}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
            />

            <Button onClick={filterArray} >Tìm kiếm</Button>
        </InputGroup>

    )
}
export default SearchPage;