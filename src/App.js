import logo from './logo.svg';
import './App.css';
import { SpinePlayer } from '@esotericsoftware/spine-player';
// import { SpinePlayer } from '@esotericsoftware/spine-player/dist/Player';
// import { SpinePlayer } from './spine-player/dist/Player';

function App() {
  var jsonUrl = 'exports/bulldog.json';
  var atlasUrl = 'exports/bulldog_color.atlas';
  
  new SpinePlayer("player-container", {
    jsonUrl: jsonUrl,
    atlasUrl: atlasUrl,
    animation: 'idle',
    skin: 'face01',
    premultipliedAlpha: true,
    backgroundColor: '#cccccc',
    viewport: {
        debugRender: true,
    },
    showControls: true,
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="player-container"></div>
    </div>
  );
}

export default App;
