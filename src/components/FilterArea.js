import React, { Component } from 'react';

class FilterArea extends Component {

    render() {
        console.log(this.props.loadState);
        return (
            <div className={'narrow-search' +
                (this.props.loadState ? ' disabled' : '')
            }>

                {/* Filter checkboxes */}
                <div className='filter-area'>
                    {/* Filter Area Title */}
                    <p> Filters </p>
                    <hr></hr>
                    <input
                        type='checkbox'
                        onClick={() => {
                            // Has a license
                            this.props.toggleFilter('has-license');
                        }}>
                    </input>
                    <p> Has License </p>
                    <br></br>
                    <input
                        type='checkbox'
                        onClick={() => {
                            // Contains a list of references
                            this.props.toggleFilter('has-references');
                        }}>
                    </input>
                    <p> Has References </p>
                    <br></br>
                    <input
                        type='checkbox'
                        onClick={() => {
                            // Contains an abstract
                            this.props.toggleFilter('has-abstract');
                        }}>
                    </input>
                    <p> Has Abstract </p>
                    <br></br>
                    <hr></hr>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
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
                    <br></br>
                    <hr></hr>

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