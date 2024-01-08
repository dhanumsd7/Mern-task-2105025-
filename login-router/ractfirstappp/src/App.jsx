
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import Signup from './SignUp'
import SignUp from './SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<SignIn/>}/>
        <Route index path='signup' element={<SignUp/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App