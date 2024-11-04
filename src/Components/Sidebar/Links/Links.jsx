import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'  // Import Link from react-scroll

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

const Links = () => {
  const items = ["Home", "Services", "Portfolio", "Contact"]
  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => (
        <ScrollLink
          key={item}
          to={item.toLowerCase()}  // Section id should match the to prop
          smooth={true}  // Enables smooth scrolling
          duration={500} // Adjust the duration of scrolling in ms
          spy={true}     // Highlights the link when the section is active
          offset={-50}   // Adjusts offset to prevent header overlap, if needed
        >
          <motion.div
            className="link-item"   
            vriants={itemVariants} 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.div>
        </ScrollLink>
      ))}
    </motion.div>
  )
}

export default Links
