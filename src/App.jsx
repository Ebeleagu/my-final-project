import { useState } from 'react'
 import Header from "./Component/Header"
 import Body from "./Component/Body"
 import Footer from './Component/Footer'
 import { FaRegEye } from "react-icons/fa";
 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Body />
        <Footer />
        
        
      </div>
     
    </>
  )
}

export default App
