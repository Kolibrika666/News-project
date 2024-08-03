import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import StartPage from './Pages/StartPage/StartPage'
import './App.css'
function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route element = {<Layout/>}>
      <Route path = '/' element = {<StartPage/>}/>
      {/* <Route path = 'News_Page' element = {}/> */} 
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
