import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

class App extends Component {

  // resultsList: List of results, any[]
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
      resultsList: null,
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
        <p className='title'> Simple Search </p>
        <p className='subtitle'> A simple search Interface for academic literature </p>
        <hr></hr>

        {/* SearchArea component:
            Passes function to update resultsList
        */}
        <SearchArea
          setResults={this.setResults}
          errorMsg={this.state.errorMsg}
          loadState={
            (this.state.resultsList === null) &&
            (this.state.errorMsg === '')
          }>
        </SearchArea>

        {/* ResultsArea component 
            Passes resultsList
        */}
        <ResultsArea
          resultsList={this.state.resultsList}
          errorMsg={this.state.errorMsg}
          loadState={
            (this.state.resultsList === null) &&
            (this.state.errorMsg === '')
          }>
        </ResultsArea>

      </div>
    );
  }
}

export default App;
