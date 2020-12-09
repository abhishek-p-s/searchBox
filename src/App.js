import './App.css';
import Search from './components/Search'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <div className="App">
          <div className="bg-light">
            <Search></Search>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
