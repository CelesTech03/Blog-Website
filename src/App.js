import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />
      <div className="content">
        {/* Homepage Content Component */}
        <Home />
      </div>
    </div>
  );
}

export default App;
