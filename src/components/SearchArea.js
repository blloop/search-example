import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import FilterArea from './FilterArea';

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            errorMsg: '',
            filters: [],
            sort: '',
            ascending: false
        };
    }

    // Function to update inputText based on input field
    updateText = (event) => {
        let newState = {
            ...this.state,
            inputText: event.target.value
        };
        this.setState(newState);
    };

    // Function to set error message for display
    setError = (error) => {
        this.setState({
            ...this.state,
            errorMsg: error
        });
    }

    // Function to set sort method
    // through radio buttons
    setSort = (val) => {
        if (this.state.sort === val) {
            return;
        }
        this.setState({
            ...this.state,
            sort: val
        });
        // this.getSearch();
    }

    // Function to toggle ascending/descending 
    // sort through toggle button
    toggleSort = () => {
        this.setState({
            ...this.state,
            ascending: !this.state.ascending
        });
        console.log(this.state.ascending);
    }

    // Function to toggle filters applied
    // through checkboxes
    // Re-searches with new filters after call
    toggleFilter = (filter) => {
        let newFilters = this.state.filters;
        (newFilters.includes(filter) ?
            newFilters.splice(newFilters.indexOf(filter), 1) :
            newFilters.push(filter)
        );
        this.setState({
            ...this.state, filters: newFilters
        });
        this.getSearch();
    }

    // Function to send HTTP request to CrossRef API
    // Success: Sets resultsList to HTTP response
    // Failure: Throws error message in error field
    getSearch = () => {
        console.log('Asc is ' + this.state.ascending);
        if (this.state.inputText === '') {
            this.setError('Please enter a search query!');
            this.props.setResults(null, false);
            return;
        }
        this.props.setResults(null, true);
        axios.get( // Use axios library to send HTTP GET request
            'https://api.crossref.org/works?query=' +
            this.state.inputText.replaceAll(' ', '+')
        ).then((resp) => { // Update resultsList with request response
            if (resp.data) {
                this.setError('');
                this.props.setResults(resp.data.message.items, false);
                console.log(resp.data.message.items);
            }
            else { // Improperly formatted response
                this.setError('ERROR: Could not read response');
                this.props.setResults(null, false);
            }
        }).catch((err) => { // Catch error and set error message
            this.setError('ERROR: ' + err.toJSON().message);
            this.props.setResults(null, false);
        });
    }

    render() {
        return (
            <div className='search-area'>

                {/* Input field to type search query */}
                <input
                    onChange={this.updateText}
                    value={this.state.inputText}>
                </input>

                {/* Button to start search query */}
                <button onClick={this.getSearch}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}>
                    </FontAwesomeIcon>
                </button>

                {/* Area to choose search filters */}
                < FilterArea
                    loadingStatus={this.props.loadingStatus}
                    getSearch={this.getSearch}
                    ascending={this.state.ascending}
                    setSort={this.setSort}
                    toggleSort={this.toggleSort}
                    toggleFilter={this.toggleFilter}>
                </FilterArea>

                {/* Display for HTTP error messages */}
                <p className='error-field'>
                    {this.state.errorMsg}
                </p>
            </div >
        )
    }
}

export default SearchArea;