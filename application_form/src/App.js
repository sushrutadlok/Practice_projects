import React from 'react'
import './App.css';
import CovidFormEntry from './Component/CovidFormEntry';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import PdfViewer from './Component/PdfViewer';


function App() {

  return (
    <Router>
    <Routes>
      <Route path="*" exact element={<CovidFormEntry />}/>
    </Routes>  
    </Router>
  ); 
}

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
