// import { Fragment, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Cards from './Components/Cards'
// import Rider from './Components/Rider/Rider'
// import Revenue from './Components/Revenue/Revenue'
// import Help from './Components/Help/Help'
// import HelpForm from './Components/HelpForm/HelpForm'
// import AddMenu from './Components/Add-Menu/AddMenu'
// import RiderForm from './Components/RiderForm/RiderForm'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Fragment>
//       {/* <Cards /> */}
//       {/* <Rider/> */}
//       {/* <Revenue/> */}
//       {/* <Help/> */}
//       {/* <HelpForm/> */}
//       {/* <AddMenu/> */}
//       <RiderForm/>
//     </Fragment>
//   )
// }

// export default App
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from './Components/Cards'
import Rider from './Components/Rider/Rider'
import Revenue from './Components/Revenue/Revenue'
import Help from './Components/Help/Help'
import HelpForm from './Components/HelpForm/HelpForm'
import AddMenu from './Components/Add-Menu/AddMenu'
import RiderForm from './Components/RiderForm/RiderForm'
import Home from "./Components/Home/Home";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/NavBar/Navbar";
import Table from "./Components/Table/Table";
import Chat from "./Components/Chat/Chat";
import Login from "./Pages/Login";
import Form from "./Components/Login/Form";
import Overlay from "./Components/Login/Overlay";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <>
      {/* <SideBar />
      <Navbar /> */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cards />} path="/cards" />
        <Route element={<Rider />} path="/rider" />
        <Route element={<Revenue />} path="/revenue" />
        <Route element={<Help />} path="/help" />
        <Route element={<HelpForm />} path="/hform" />
        <Route element={<AddMenu />} path="/menu" />
        <Route element={<OrderHistory />} path="/orderhistory" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/sign-up" />
      </Routes>
    </>
  );
}

export default App;