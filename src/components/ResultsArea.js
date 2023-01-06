import React, { Component } from 'react';

class ResultsArea extends Component {

    render() {
        return (
            <div className='results-area'>
                {this.props.loadingStatus ?
                    // Loading: return loading indicator
                    <p className='loading'> Loading </p> :

                    // Not loading: return results list
                    (!this.props.resultsList ? null : (<>
                        {/* Field to indicate number of results */}
                        <div className='results-count'>
                            Number of
                            Results: {this.props.resultsList.length}
                        </div>

                        {/* List of search results rendered */}
                        {this.props.resultsList.map((value) => (
                            <div
                                key={value.DOI}
                                className='search-result'>
                                {value['container-title'] ?
                                    value['container-title'] :
                                    'Untitled'
                                }
                            </div>
                        ))}
                    </>)
                    )
                }
            </div>

        )
    }
}

export default ResultsArea;