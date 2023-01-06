import React, { Component } from 'react';

class FilterArea extends Component {
    render() {
        return (
            <div className='filter-area'>
                <p> A </p>
                <input type='checkbox' onClick={() => this.props.toggleFilter('archive')}></input>
                <p> B </p>
                <input type='checkbox' onClick={() => this.props.toggleFilter('bullish')}></input>
                <p> C </p>
                <input type='checkbox' onClick={() => this.props.toggleFilter('child')}></input>
            </div>
        )
    }
}

export default FilterArea;