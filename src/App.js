import './App.css';
import Search from './components/Search'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <div className="App bg-light ">
            <Search></Search>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
