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
            loadState: false
        };
    }

    // Function to update inputText based on input field
    updateText = (event) => {
        let newState = {
            inputText: event.target.value,
            errorMsg: this.state.errorMsg,
            filters: this.state.filters,
            loadState: this.state.loadState
        };
        this.setState(newState);
    };

    setError = (error) => {
        let newState = {
            inputText: this.state.inputText,
            errorMsg: error,
            filters: this.state.filters,
            loadState: this.state.loadState
        };
        this.setState(newState);
    }


    setLoad = (bool) => {
        // (bool ?
        //     document.getElementById('filter-area')
        //         .classList.add('disabled') :
        //     document.getElementById('filter-area')
        //         .classList.remove('disabled'));
        let newState = {
            inputText: this.state.inputText,
            errorMsg: this.state.errorMsg,
            filters: this.state.filters,
            loadState: bool
        };
        this.setState(newState);

    }

    // Function to toggle filters applied
    // through checkboxes
    // Re-searches with new filters after call
    toggleFilter = (filter) => {
        let newFilters = this.state.filters;
        if (newFilters.includes(filter)) {
            newFilters.splice(newFilters.indexOf(filter), 1);
        } else {
            newFilters.push(filter);
        }
        let newState = {
            inputText: this.state.inputText,
            errorMsg: this.state.errorMsg,
            filters: newFilters,
            loadState: this.state.loadState
        };
        this.setState(newState);
        this.getSearch();
        console.log(newFilters);
    }

    // Function to send HTTP request to CrossRef API
    getSearch = () => {
        if (this.state.inputText === '') {
            this.setError('Please enter a search query!');
            this.props.setResults(null, false);
            this.setLoad(false);
            return;
        }
        this.props.setResults(null, true);
        this.setLoad(true);
        axios.get( // Use axios library to send HTTP GET request
            'https://api.crossref.org/works?query=' +
            this.state.inputText.replaceAll(' ', '+')
        ).then((resp) => { // Update resultsList with request response
            if (resp.data) {
                this.setError('');
                this.props.setResults(resp.data.message.items, false);
                this.setLoad(false);
                console.log(resp.data.message.items);
            }
            else { // Improperly formatted response
                this.setError('ERROR: Could not read response');
                this.props.setResults(null, false);
                this.setLoad(false);
            }
        }).catch((err) => { // Catch error and set error message
            this.setError('ERROR: ' + err.toJSON().message);
            this.props.setResults(null, false);
            this.setLoad(false);
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
                <button onClick={() => this.getSearch()}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}>
                    </FontAwesomeIcon>
                </button>

                {/* Area to choose search filters */}
                < FilterArea
                    loadState={this.state.loadState}
                    toggleFilter={this.toggleFilter}
                    toggleSort={this.toggleSort}>
                </FilterArea>

                {/* Placeholder for HTTP error messages */}
                <p className='http-response'>
                    {this.state.errorMsg}
                </p>
            </div >
        )
    }
}

export default SearchArea;