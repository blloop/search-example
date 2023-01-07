import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsList: null,
      loadingStatus: false
    };
  }

  // Function to update 
  // resultsList + loadingStatus
  setResults = (list, bool) => {
    this.setState({
      resultsList: list,
      loadingStatus: bool
    });
  }

  render() {
    return (
      <div className='App'>

        {/* Title of Webpage */}
        <h1 className='title'> Simple Search </h1>

        {/* SearchArea component:
            Passes function to update resultsList
        */}
        <SearchArea
          setResults={this.setResults}
          loadingStatus={this.state.loadingStatus}>
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
