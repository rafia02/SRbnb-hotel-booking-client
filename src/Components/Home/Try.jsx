import React from 'react';
import { motion } from "framer-motion"


const Try = () => {
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }


  return (
    <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:200}} transition={{duration: 0.7}}
    >
      
      <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:-180}} transition={{duration: 0.7}}  className='h-40 w-40 bg-red-500 my-40'>4</motion.div>
      <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:-180}} transition={{duration: 0.7}}  className='h-40 w-40 bg-red-500 my-40'>4</motion.div>
      <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:-180}} transition={{duration: 0.7}}  className='h-40 w-40 bg-red-500 my-40'>4</motion.div>
      <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:-180}} transition={{duration: 0.7}}  className='h-40 w-40 bg-red-500 my-40'>4</motion.div>
      <motion.div initial={{opacity: 0, x: -200}} whileInView={{opacity: 1, x:-180}} transition={{duration: 0.7}}  className='h-40 w-40 bg-red-500 my-40'>4</motion.div>
  
     
      

    </motion.div>
  );
};

export default Try;