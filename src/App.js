import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages';
import EachMovie from './pages/EachMovie';
import { Routes, Route } from 'react-router-dom'
import { PageNotFound } from './pages/PageNotFound';


function App() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDM3NjE5Zjc3ZjVlMmRhMDcxYzVjMjMzODYzNmJmNSIsInN1YiI6IjY1MDIwZmExNTU0NWNhMDBhYjVkZDQ3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lsw9EPdzM_ZbvGqjeD4sP3V6-9uYI_R8yQ4xX47PCKQ'
    }
  };

  return (
    <div className='article'>
      <Routes>
        <Route path="/movies" >
          <Route index element={<HomePage options={options} />} />
          <Route path=':movieId' element={<EachMovie options={options} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
