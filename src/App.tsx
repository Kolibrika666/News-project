import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import StartPage from './Pages/StartPage/StartPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element = {<Layout/>}>
      <Route path = '/' element = {<StartPage/>}/>
      {/* <Route path = 'Catalog_Anime' element = {}/> */} 
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
