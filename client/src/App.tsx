import './App.css';
import Navigation from './components/Navigation';
import Searchbar from './components/Searchbar';


const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navigation />
      <Searchbar />
    </div>
  );
}

export default App;
