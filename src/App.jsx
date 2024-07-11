
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Edit from './components/Edit'
import BlogDetails from './BlogDetails'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { useSelector } from 'react-redux'

// 

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)
  

  return (
    <>
    <div className='App'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog-details/:id' element={<BlogDetails/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts/new" element={<Create />} />
        <Route path="/posts/:id" element={<Edit />} />

      </Routes>

    </div>
      
        
    </>
  )
}

export default App
