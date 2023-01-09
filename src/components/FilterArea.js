import React, { Component } from 'react';

class FilterArea extends Component {

    render() {
        console.log(this.props.loadState);
        return (
            <div className={'narrow-search' +
                (this.props.loadState ? ' disabled' : '')
            }>

                {/* Filter checkboxes */}
                <div className='filter-area subtitle'>
                    {/* Filter Area Title */}
                    <p> Filters </p>
                    <hr></hr>
                    <div className='line'>
                        <input type='checkbox' onClick={() => {
                            this.props.toggleFilter('has-license');
                        }}>
                        </input>
                        <p> Has License </p>
                    </div>
                    <div className='line'>
                        <input type='checkbox' onClick={() => {
                            // Contains a list of references
                            this.props.toggleFilter('has-references');
                        }}>
                        </input>
                        <p> Has References </p>
                    </div>
                    <div className='line'>
                        <input type='checkbox' onClick={() => {
                            // Contains an abstract
                            this.props.toggleFilter('has-abstract');
                        }}>
                        </input>
                        <p> Has Abstract </p>
                    </div>
                </div>

                {/* Sort radio buttons */}
                <div className='sort-area subtitle'>
                    {/* Filter Area Title */}
                    <p> Sort By </p>
                    <hr></hr>
                    <div className='line'>
                        <input type='radio' name='sorts' readOnly
                            checked={this.props.sort === ''}
                            onClick={() => {
                                // No sort preference
                                this.props.setSort('');
                            }}>
                        </input>
                        <p> None </p>
                    </div>
                    <div className='line'>
                        <input type='radio' name='sorts' readOnly
                            checked={this.props.sort === 'relevance'}
                            onClick={() => {
                                // Relevance Score
                                this.props.setSort('relevance');
                            }}>
                        </input>
                        <p> Relevance </p>
                    </div>
                    <div className='line'>
                        <input type='radio' name='sorts' readOnly
                            checked={this.props.sort === 'published'}
                            onClick={() => {
                                // Publication Date
                                this.props.setSort('published');
                            }}>
                        </input>
                        <p> Publish Date </p>
                    </div>
                    <div className='line'>
                        <input type='radio' name='sorts' readOnly
                            checked={this.props.sort === 'references-count'}
                            onClick={() => {
                                // Number of reference counts
                                this.props.setSort('references-count');
                            }}>
                        </input>
                        <p> Ref. Count </p>
                    </div>
                    <br></br>
                    {/* Ascending - Descending Option */}
                    <button
                        className={'toggle-ascend' +
                            (this.props.loadState ? ' disabled' : '')}
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