import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

class BarArea extends Component {

    render() {
        return (
            <div className='search-bar'>
                {/* Input field to type search query */}
                <input
                    className='search-input'
                    onChange={this.props.updateText}
                    value={this.props.inputText}>
                </input>

                {/* Button to start search query */}
                <button onClick={this.props.getSearch}>
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}>
                    </FontAwesomeIcon>
                </button>
            </div>
        )
    }

}

export default BarArea;