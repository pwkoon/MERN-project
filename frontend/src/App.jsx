import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateProfile from './pages/CreateProfile'
import ShowProfile from './pages/ShowProfile'
import EditProfile from './pages/EditProfile'
import DeleteProfile from './pages/DeleteProfile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profiles' element={<ShowProfile />} />
      <Route path='/profiles/create' element={<CreateProfile />} />
      <Route path='/profiles/edit/:id' element={<EditProfile />} />
      <Route path='/profiles/delete/:id' element={<DeleteProfile />} />
    </Routes>
  )
}

export default App