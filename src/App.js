import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css'; 
import LandingPage from './components/LandingPage';
import PageNotFound from './components/PageNotFound';
import SamplePage from './components/SamplePage';
import Webdesign from './components/Webdesign';

function App() {
  return (  
    <>
      <Router>
          <Routes>
              <Route path="/" element={<LandingPage />}>   </Route>
              <Route path="/sample" element={<SamplePage />} /> 
              <Route path='/webdesign' element={<Webdesign/>} />
              <Route path="/pagenotfound" element={<PageNotFound />}/>
              
          </Routes>
      </Router>
    </> 
  );
}

export default App;
