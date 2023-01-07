import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

class App extends Component {

  // resultsList: List of results, array
  // errorMsg: Error message, string
  //
  // State 1: resultsList is not null: 
  //          Response found
  // State 2: resultsList is null, errorMsg null: 
  //          Loading
  // State 3: resultsList is null, errorMsg is not null: 
  //          Error
  constructor(props) {
    super(props);
    this.state = {
      resultsList: [],
      errorMsg: 'Please enter a search query!'
    };
  }

  // Function to update resultsList + errorMsg
  setResults = (list, err) => {
    this.setState({
      resultsList: list,
      errorMsg: err
    });
  }

  render() {
    return (
      <div className='App'>

        {/* Webpage Header */}
        <h1 className='title'> Simple Search </h1>

        {/* SearchArea component:
            Passes function to update resultsList
        */}
        <SearchArea
          setResults={this.setResults}
          errorMsg={this.state.errorMsg}>
        </SearchArea>

        {/* ResultsArea component 
            Passes resultsList
        */}
        <ResultsArea
          resultsList={this.state.resultsList}
          loadState={
            (this.state.resultsList === null) &&
            (this.state.errorMsg === '')
          }
          errorMsg={this.state.errorMsg}>
        </ResultsArea>

      </div>
    );
  }
}

export default App;
