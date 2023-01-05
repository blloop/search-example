import './App.css';
import SearchArea from './components/SearchArea';
import ResultsArea from './components/ResultsArea';

function App() {

  return (
    <div className="App">
      <h1 className='title'> Simple Search </h1>
      <SearchArea></SearchArea>
      <ResultsArea></ResultsArea>
    </div>
  );
}

export default App;
