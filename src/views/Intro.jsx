import React from 'react'
import { motion } from 'framer-motion'
import { TbArrowBigDown } from 'react-icons/tb'
import useScrollDirection from '../hooks/useScrollDirection'

const variants = {
  open: {
    transition: { staggerChildren: 0.09, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const variantsP = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
}

const Intro = () => {
  const { scrollDirection } = useScrollDirection('up')

  return (
    <div className='container mx-auto px-5'>
      <div className='h-screen flex items-center'>
        <motion.article
          className='text-2xl lg:text-4xl tracking-wider font-semibold text-black dark:text-white'
          // initial={{ opacity: 0, y: '20px' }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ type: 'spring', stiffness: 70, delay: 0.6 }}
          initial='closed'
          animate='open'
          variants={variants}
        >
          <motion.p className='mb-3' variants={variantsP}>
            嗨！
            <span className='inline-block animate-wave origin-bottom'>
              &#9995;
            </span>
          </motion.p>
          <motion.p
            className='text-4xl lg:text-6xl mb-6 lg:mb-8'
            variants={variantsP}
          >
            我叫 ( 陳柏丞 )
          </motion.p>
          <motion.p className='mb-3' variants={variantsP}>
            曾經是位網站設計師、網站互動工程師、自由接案者<sub>。</sub>
          </motion.p>
          <motion.p variants={variantsP}>
            目前是<span className='text-yellow-400'>前端工程師</span>
            <sub>。</sub>
          </motion.p>
        </motion.article>
      </div>
      <div
        className={`flex flex-col items-center absolute right-8 lg:right-16 bottom-4 transition-opacity duration-100 ease-in ${
          scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className='mb-2 uppercase text-sm font-semibold tracking-wider text-black dark:text-white'>
          scroll
        </p>
        <TbArrowBigDown
          size={20}
          className='animate-bounce stroke-black dark:stroke-white'
        />
      </div>
    </div>
  )
}

export default Intro
