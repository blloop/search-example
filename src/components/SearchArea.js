import React, { Component } from 'react';

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
            </div>
        )
    }
}

export default SearchArea;