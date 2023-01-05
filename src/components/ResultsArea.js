import React, { Component } from 'react';

let sampleResults = [
    'api-result-1',
    'api-result-2',
    'api-result-3',
    'api-result-4'
]

class ResultsArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Temporary Results List
            // Will modify when API usage implemented
            resultsList: sampleResults,
            // Placeholder count of results
            resultsCount: 4
        }
    }

    render() {
        return (
            <div className='results-area'>

                {/* Display number of results found */}
                <div className='results-count'>Number of Results: {this.state.resultsCount}</div>

                {/* Render a search-result div to resultsArea for each result found */}
                {this.state.resultsList.map((value) => (
                    <div key={value} className='search-result'>
                        <p>{value}</p>
                    </div>
                ))}

            </div>

        )
    }
}

export default ResultsArea;