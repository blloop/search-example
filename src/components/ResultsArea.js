import React, { Component } from 'react';

class ResultsArea extends Component {

    render() {
        console.log(this.props.resultsList);
        return (
            <div className='results-area'>

                {/* Display number of results found */}
                <div className='results-count'>Number of Results: {this.props.resultsList.length}</div>

                {/* Render a search-result div to resultsArea for each result found */}
                {this.props.resultsList.map((value) => (
                    <div key={value.DOI} className='search-result'>
                        {value['container-title'] ? value['container-title'] : 'Untitled'}
                    </div>
                ))}

            </div>

        )
    }
}

export default ResultsArea;