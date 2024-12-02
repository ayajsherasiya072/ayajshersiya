
import Layout from './part/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Faculty from './page/faculty'
import Detailfaculty from './page/Detailfaculty'
import Calculator from './page/Calculator'
import Demostate from './page/Demostate'
import Crud from './page/Crud'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/faculty" element={<Faculty/>}/>
            <Route path="/faculty/:id" element={<Detailfaculty/>}/>
            <Route path="/calc" element={<Calculator/>}/>
            <Route path="/state" element={<Demostate/>}/>
            <Route path="/crud" element={<Crud/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
