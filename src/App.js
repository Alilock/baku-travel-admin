import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Add from './pages/place/Add'
import PlaceList from './pages/place/PlaceList'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/places' element={<PlaceList />}></Route>
        <Route path='/places/add' element={<Add />}></Route>

      </Routes>

    </>

  )
}

export default App