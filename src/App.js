import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import react,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode enabled","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("dark mode enabled","success")
    }
  }
  return (
   <>
   <Router>
      <Navbar title="TextUtils" about="About us" mode={mode} changeMode={toggleMode}/>
      <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={
              <div className="container my-3">
                <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
              </div>
            } />
      </Routes>
      <Alert alert={alert}/>
    </Router>
   </>
  );
}

export default App;
