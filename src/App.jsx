import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bg from './Compo/Bg'
import Foreground from './Compo/Foreground'


function App() {
 

  return (
    <>
   <div class="bg-black text-white h-screen w-full ">
   <Bg/>
   <Foreground/>
</div>
    </>
  )
}

export default App
