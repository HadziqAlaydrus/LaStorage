
import './App.css'
import NavigationBar from './components/NavigationBar'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import FormPage from './pages/FormPage'
import Footer from './components/Footer'
import Storage from './components/Storage'

function Layout({children}){
  return(
    <div>
      <NavigationBar/>
      {children}
      <Footer/>
    </div>
  )
}

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>}></Route>
          <Route path='/login' element={<Layout><Login/></Layout>}></Route>
          <Route path='/signup' element={<Layout><SignUp/></Layout>}></Route>
          <Route path='/form' element={<Layout><FormPage/></Layout>}></Route>
          <Route path='/storage' element={<Layout><Storage/></Layout>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
