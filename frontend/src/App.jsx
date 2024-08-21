
import { Outlet } from 'react-router'
import Navbar from './componenets/Navbar'
import Myfooter from './componenets/Myfooter'

function App() {
 

  return (
    <>
    <Navbar/>
  <div className='min-h-3'>
  <Outlet/>
  </div>
     <Myfooter/>
    </>
  )
}

export default App
