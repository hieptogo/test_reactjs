import React from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
        }
    }

    handleInputChange = (e) => {
        const query = e.target.value;
        this.filterArray();
        this.setState({
            query: e.target.value
        })
    }

    filterArray = () => {
        var searchString = this.state.query;
        const data = this.props.data;
        const filteredData = data.filter((element) => {
            console.log(element)
            // return element.name.toLowerCase().includes(searchString.toLowerCase());
        });
        if (searchString.length > 0) {
        }
    }

    render() {
        return (
            <InputGroup size="sm">
                <FormControl onChange={e => this.handleInputChange(e)}
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
            </InputGroup>
        )
    }
}
export default SearchPage;