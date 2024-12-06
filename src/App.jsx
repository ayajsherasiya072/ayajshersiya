
import Layout from './part/Layout'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import Faculty from './page/faculty'
import Detailfaculty from './page/Detailfaculty'
import Calculator from './page/Calculator'
import Demostate from './page/Demostate'
import Crud from './page/Crud'
import Fetchdemo from './page/Fetchdemo'
import Detailsubject, { fetchData } from './page/Detailsubject'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "faculty",
        element: <Faculty />
      },
      {
        path: "faculty/:id",
        element: <Detailfaculty />
      },
      {
        path: "calc",
        element: <Calculator />
      },
      {
        path: "state",
        element: <Demostate />
      },
      {
        path: "crud",
        element: <Crud />
      },
      {
        path: "fetch",
        element: <Fetchdemo />
      },
      {
        path: "fetch/:id",
        element: <Detailsubject />,
        loader: fetchData // Attach loader here
      }
    ]
  }
]);


function App() {
  

  return (
    <>
      {/* <BrowserRouter>
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
            <Route path="/fetch" element={<Fetchdemo/>}/>
            <Route path="/fetch/:id" element={<Detailsubject/>} loader={fetchData}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      return <RouterProvider router={router} />;
    </>
  )
}
export default App
