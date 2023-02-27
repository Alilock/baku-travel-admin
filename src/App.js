import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/App.scss'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Add from './pages/place/Add'
import PlaceList from './pages/place/PlaceList'
import MainLayout from './layout/MainLayout'
import Detail from './pages/place/Detail'
import { runOneSignal } from './oneSignal'

import CategoryList from './pages/category/CategoryList'
import CategoryAdd from './pages/category/CategoryAdd'

function App() {

  useEffect(() => {


    // runOneSignal();

  }, [])




  return (
    <>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='places' element={<PlaceList />}></Route>
          <Route path='/places/add' element={<Add />}></Route>
          <Route path='/places/:id' element={<Detail />}></Route>
          <Route path='/categories' element={<CategoryList />}></Route>
          <Route path='/categories/add' element={<CategoryAdd />}></Route>
        </Route>
      </Routes>

    </>

  )
}



export default App