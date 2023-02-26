import './App.css';
import { BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import Post from './components/postview/post';
import LandingPage from './components/landingpage/landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/form' element={<Form/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
