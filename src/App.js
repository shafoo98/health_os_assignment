import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Container from './components/Container'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import UserHomePage from './pages/UserHomePage'

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<UserHomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
