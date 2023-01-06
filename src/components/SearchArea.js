import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            errorMsg: ''
        }
    }

    // Function to update inputText based on input field
    updateText = (event) => {
        let newState = {
            inputText: event.target.value,
            errorMsg: ''
        };
        this.setState(newState);
    };

    setError = (error) => {
        let newState = {
            inputText: this.state.inputText,
            errorMsg: error
        }
        this.setState(newState);
    }

    // Function to send HTTP request to CrossRef API
    getSearch = () => {
        if (this.state.inputText === '') {
            this.setError('Please enter a search query!')
            this.props.setLoading(false);
            return;
        }
        this.props.setLoading(true);
        axios.get( // Use axios library to send HTTP GET request
            'https://api.crossref.org/works?query=' +
            this.state.inputText.replaceAll(' ', '+')
        ).then((resp) => { // Update resultsList with request response
            if (resp.data) {
                this.setError('');
                this.props.setResults(resp.data.message.items);
                // console.log(resp.data.message.items);
            };
        }).catch((err) => { // Catch error and set error message
            this.setError(`${err.name}: ${err.toJSON().message}`);
            this.props.setLoading(false);
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
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>

                {/* Placeholder for HTTP error messages */}
                <p className='http-response'>
                    {this.state.errorMsg.length > 0 ? this.state.errorMsg : ''}
                </p>
            </div>
        )
    }
}

export default SearchArea;