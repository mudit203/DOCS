import React, { useRef } from 'react'
import Cards from './Cards'

const Foreground = () => {
const first = useRef(null)

    const data=[
        {
          desc : "MADE BY MUDIT SHARMA",
          filesize:"0.9MB",
          close: true,
          tag : {isopen:true,tagtitle:"Download now",tagcolor:"green"},


        }
    ]
  return (
    
    <div ref={first} className='w-full h-full z-5 fixed flex gap-6 ' >
        {data.map((item,index)=>(
            <>
            <Cards data={item.desc} filesize={item.filesize} close={item.close}  reference={first}/>
            <Cards data={item.desc} filesize={item.filesize} close={item.close}  reference={first}/>
            <Cards data={item.desc} filesize={item.filesize} close={item.close}  reference={first}/>
            

            </>

            
           
        )
        
        )}
     
    </div>
  )
}

export default Foreground
