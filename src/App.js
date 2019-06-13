import React from 'react';
import './App.css';
import DogsList from './components/Dogslist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <DogsList />
        </main>
      </div>
    );
  }
}

export default App;
