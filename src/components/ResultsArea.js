import React, { Component } from 'react';

class ResultsArea extends Component {

    render() {
        return (
            <div className='results-area'>

                {this.props.loadState ?
                    // Loading: return loading indicator
                    <p className='text-output'> Loading... </p> :

                    // Not loading: return results list
                    (this.props.resultsList === null ?
                        // No result, must have error returned
                        <p className='text-output'> {this.props.errorMsg} </p> :

                        // Check for 0 results, return message
                        (this.props.resultsList.length === 0 ? (
                            <p className='text-output'> No results found! </p>
                        ) :
                            <>
                                {/* Field to indicate number of results */}
                                <div className='result-count'>
                                    Number of
                                    Results: {this.props.resultsList.length}
                                </div>

                                {/* List of search results rendered */}
                                {this.props.resultsList.map((value) => (
                                    <div
                                        key={value.DOI ? value.DOI : Math.random()}
                                        className='search-result'>
                                        <p>
                                            {value['URL'] ?
                                                <a href={value['URL']}>
                                                    {value['title'] ?
                                                        value['title'].toString().slice(0, 200) +
                                                        (value['title'].toString().length > 200 ? '...' : '') :
                                                        'Untitled'
                                                    } </a> :
                                                'No Source'
                                            }
                                        </p>
                                        <p>
                                            Licensed:
                                            {' ' + (value['license'] ?
                                                'Yes' : 'No')}
                                            , References:
                                            {' ' + value['reference-count']}
                                            , Abstract:
                                            {' ' + (value['abstract'] ?
                                                'Yes' : 'No')}
                                        </p>
                                        <p>
                                            Published:
                                            {' ' + (value['published'] ?
                                                value['published']['date-parts'] : 'No')}

                                        </p>
                                    </div>
                                ))}
                            </>
                        )
                    )
                }

            </div>
        )
    }
}

export default ResultsArea;