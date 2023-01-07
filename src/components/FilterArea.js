import React, { Component } from 'react';

class FilterArea extends Component {

    render() {
        return (
            <>
                <div id='narrow-search' className={this.props.loadState ? 'disabled' : null}>
                    <div className='filter-area'>
                        <input
                            type='checkbox'
                            onClick={() => {
                                // Has a license
                                this.props.toggleFilter('has-license');
                            }}>
                        </input>
                        <p> Has License </p>
                        <input
                            type='checkbox'
                            onClick={() => {
                                // Contains a list of references
                                this.props.toggleFilter('has-references');
                            }}>
                        </input>
                        <p> Has References </p>
                        <input
                            type='checkbox'
                            onClick={() => {
                                // Contains an abstract
                                this.props.toggleFilter('has-abstract');
                            }}>
                        </input>
                        <p> Has Abstract </p>
                    </div>
                    <div className='sort-area'>
                        <input
                            type='radio'
                            name='sorts'
                            onClick={() => {
                                // No sort preference
                                this.props.setSort('');
                            }}>
                        </input>
                        <p> None </p>
                        <input
                            type='radio'
                            name='sorts'
                            onClick={() => {
                                // Relevance Score
                                this.props.setSort('relevance');
                            }}>
                        </input>
                        <p> Relevance </p>
                        <input
                            type='radio'
                            name='sorts'
                            onClick={() => {
                                // Publication Date
                                this.props.setSort('published');
                            }}>
                        </input>
                        <p> Publish Date </p>
                        <input
                            type='radio'
                            name='sorts'
                            onClick={() => {
                                // Number of reference counts included
                                this.props.setSort('references-count');
                            }}>
                        </input>
                        <p> Reference Count </p>
                        <button onClick={() => {
                            this.props.toggleSort();
                        }}> {this.props.ascending ? 'Ascending' : 'Descending'} </button>
                    </div>
                </div>
            </>
        )
    }
}

export default FilterArea;