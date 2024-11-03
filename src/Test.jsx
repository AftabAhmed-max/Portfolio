import React from 'react'
import {motion} from "framer-motion"

const Test = () => {

  const [open,setOpen] = React.useState(false)

  const variants = {
    visible: {opacity:1, x:500, transition:{type:"spring", stiffness:200}},
    hidden: {opacity:0, x:0, transition:{type:"sween", stiffness:200}},
  }

  return (
    <div className='course'>
      <motion.div 
        className="box" 
        variants={variants}
        animate={open ? 'visible' : 'hidden'}
        transition={{duration:2}}
      >
      </motion.div>
      <button onClick={() => setOpen(prev=>!prev)}>Click Here</button>
    </div>
  )
}

export default Test