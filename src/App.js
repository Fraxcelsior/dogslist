import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <main>
          <DogsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
