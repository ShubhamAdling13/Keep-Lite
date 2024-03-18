
import './App.css';
import {BrowserRouter , Routes ,Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Data from './components/Data';
// import notes from "./components/Notes"
import Add from './pages/Add';

function App() {
  return (
    <div className="App">
       
      <BrowserRouter> 
      <Header/>
         <Routes>
          
         <Route  Component={Data}  path='/' /> 
         <Route Component={Add} path='/add'/>
         </Routes>
          
        
         <Footer/>
         </BrowserRouter>
      
    </div>
  );
}

export default App;
