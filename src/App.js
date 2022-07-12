// Import data
import Searchbar from './searchbar.jsx';
import Sidebar from './sidebar.jsx'
import Directory from './directory.jsx'
import Gallery from './gallery.jsx'
// Import components
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Sidebar />
        <Directory />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
