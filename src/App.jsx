import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'
import Rider from './Components/Rider/Rider'
import Revenue from './Components/Revenue/Revenue'
import Help from './Components/Help/Help'
import HelpForm from './Components/HelpForm/HelpForm'
import AddMenu from './Components/Add-Menu/AddMenu'
import RiderForm from './Components/RiderForm/RiderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      {/* <Cards /> */}
      {/* <Rider/> */}
      {/* <Revenue/> */}
      {/* <Help/> */}
      {/* <HelpForm/> */}
      {/* <AddMenu/> */}
      <RiderForm/>
    </Fragment>
  )
}

export default App
