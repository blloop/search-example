import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsList: [],
      loadingStatus: false
    };
  }

  // Function to update resultsList
  setResults = (list) => {
    let newState = {
      resultsList: list,
      loadingStatus: false
    };
    this.setState(newState);
  }

  setLoading = (bool) => {
    let newState = {
      resultsList: this.state.resultsList,
      loadingStatus: bool
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">

        {/* Title of Webpage */}
        <h1 className='title'> Simple Search </h1>

        {/* SearchArea component:
            Passes function to update resultsList
        */}
        <SearchArea
          setResults={this.setResults}
          setLoading={this.setLoading}>
        </SearchArea>

        {/* ResultsArea component 
            Passes resultsList
        */}
        <ResultsArea
          resultsList={this.state.resultsList}
          loadingStatus={this.state.loadingStatus}>
        </ResultsArea>

      </div>
    );
  }
}

export default App;
