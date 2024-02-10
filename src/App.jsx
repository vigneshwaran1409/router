import React from 'react'
import Topbar from './assets/components/Topbar'
import All from './assets/components/All'
import Fullstackdevelopment from'./assets/components/Fullstackdevelopment'
import Cybersecurity from './assets/components/Cybersecurity'
import Datascience from './assets/components/Datascience'
import Carrer from './assets/components/Carrer'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return <>

  <BrowserRouter>
  <Topbar/>
  <br/><br/>
  <Routes>
    <Route path='/All' element={<All/>}></Route>
    <Route path='/Fullstackdevelopment' element={<Fullstackdevelopment/>}></Route>
    <Route path='/Datascience' element={<Datascience/>}></Route>
    <Route path='/Cybersecurity' element={<Cybersecurity/>}></Route>
    <Route path='/Carrer' element={<Carrer/>}></Route>
    <Route path='*' element={<Navigate to='/All'/>}></Route>
  </Routes>
  </BrowserRouter>

  </>
}

export default App
