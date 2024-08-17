import './App.css';
import BrowseCharacter from './Components/BrowseCharacter';
import CharacterDetail from './Components/CharacterDetails';
import Comics from './Components/COmics';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/characters' element={<BrowseCharacter />} />

        <Route path='/characters/:id' element={<CharacterDetail />} />

        <Route path='/comics' element={<Comics />} />

        <Route path='*' element={<NotFound />} />


      </Routes>
    </>
  )
}

export default App
