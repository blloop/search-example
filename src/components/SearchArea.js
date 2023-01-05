import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    updateText = (event) => {
        let newState = {
            inputText: event.target.value,
        }
        this.setState(newState);
    };

    render() {
        return (
            <div className='search-area'>
                <input
                    onChange={this.updateText}
                    value={this.state.inputText}>
                </input>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
        )
    }
}

export default SearchArea;