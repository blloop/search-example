import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    // Function to update inputText based on input field
    updateText = (event) => {
        let newState = {
            inputText: event.target.value,
        }
        this.setState(newState);
    };

    // Function to send HTTP request to CrossRef API
    getSearch = (query) => {
        axios.get( // Use axios library to send HTTP GET request
            'https://api.crossref.org/works?query=' +
            this.state.inputText.replaceAll(' ', '+')
        ).then((resp) => { // Update resultsList with request response
            if (resp.data) {
                console.log(resp.data.message.items);
                this.props.setResults(resp.data.message.items);
            };
        }).catch((err) => { // Catch error and display message
            console.log(err);
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
                <button onClick={() => this.getSearch('hello')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>

                {/* Placeholder for HTTP error messages */}
                <p className='http-response'> _ </p>
            </div>
        )
    }
}

export default SearchArea;