import React, { Component } from 'react';

class FilterArea extends Component {

    render() {
        return (
            <>
                <div id='filter-area' className={this.props.loadState ? 'disabled' : null}>
                    <input
                        type='checkbox'
                        onClick={() => {
                            this.props.toggleFilter('has-license')
                        }}>
                    </input>
                    <p> Has License </p>
                    <input
                        type='checkbox'
                        onClick={() => {
                            this.props.toggleFilter('has-references')
                        }}>
                    </input>
                    <p> Has References </p>
                    <input
                        type='checkbox'
                        onClick={() => {
                            this.props.toggleFilter('has-abstract')
                        }}>
                    </input>
                    <p> Has Abstract </p>
                </div>
            </>
        )
    }
}

export default FilterArea;