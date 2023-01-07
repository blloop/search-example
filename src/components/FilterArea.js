import React, { Component } from 'react';

class FilterArea extends Component {

    render() {
        return (
            <div id='narrow-search'
                className={this.props.loadState ? 'disabled' : null}>

                {/* Filter checkboxes */}
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

                {/* Sort radio buttons */}
                <div className='sort-area'>
                    <input
                        checked={this.props.sort === ''}
                        type='radio'
                        name='sorts'
                        readOnly
                        onClick={() => {
                            // No sort preference
                            this.props.setSort('');
                        }}>
                    </input>
                    <p> None </p>
                    <input
                        checked={this.props.sort === 'relevance'}
                        type='radio'
                        name='sorts'
                        readOnly
                        onClick={() => {
                            // Relevance Score
                            this.props.setSort('relevance');
                        }}>
                    </input>
                    <p> Relevance </p>
                    <input
                        checked={this.props.sort === 'published'}
                        type='radio'
                        name='sorts'
                        readOnly
                        onClick={() => {
                            // Publication Date
                            this.props.setSort('published');
                        }}>
                    </input>
                    <p> Publish Date </p>
                    <input
                        checked={this.props.sort === 'references-count'}
                        type='radio'
                        name='sorts'
                        readOnly
                        onClick={() => {
                            // Number of reference counts
                            this.props.setSort('references-count');
                        }}>
                    </input>
                    <p> Reference Count </p>

                    {/* Ascending - Descending Option */}
                    <button
                        className='toggle-ascend'
                        onClick={() => {
                            this.props.toggleSort();
                        }}>
                        {this.props.ascending ?
                            'Ascending' :
                            'Descending'}
                    </button>

                </div>
            </div>
        )
    }
}

export default FilterArea;