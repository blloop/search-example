import React, { Component } from 'react';
import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultsList: []
    }
  }

  // Function to update resultsList
  setResults = (list) => {
    let newState = {
      resultsList: list
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
          setResults={this.setResults}>
        </SearchArea>

        {/* ResultsArea component 
            Passes resultsList
        */}
        <ResultsArea
          resultsList={this.state.resultsList}>
        </ResultsArea>

      </div>
    );
  }
}

export default App;
