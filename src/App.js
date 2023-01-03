import { Routes, Route } from 'react-router-dom'
import LandingPage from './Routes/LandingPage/LandingPage';
import Collections from './Routes/YourCollectionPage/YourCollection';
import './App.css'

function App(){
  return(
    <Routes>
      <Route path = '/' element = {<LandingPage/>}/>
      <Route path = '/your-collection' element = {<Collections/>}/>
    </Routes>
  )
}

export default App;
