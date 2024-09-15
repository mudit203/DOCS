import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = (props) => {
  return (
    <motion.div drag dragConstraints={props.reference} className=' relative h-60 w-40 bg-zinc-900 rounded-[30px] text-white p-2 overflow-hidden'>
<FaFileAlt />
<p className='font-semibold text-sm mt-5 leading-tight'>{props.data} </p>
<div className='absolute  bottom-0 w-full h-10 left-0 px-4 flex justify-between mb-2'>

    <h5>{props.filesize}</h5>
    <span className='bg-white w-5 h-5 rounded-full flex items-center justify-center'>
        {props.close ? <LuDownload size="0.7em" color='#000' /> : <IoCloseSharp size="0.7em" color='#000'/>}

    
    
    </span>
    
</div>


    </motion.div>

  )
}

export default Cards
