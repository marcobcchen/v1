import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md'

const Skill = () => {
  return (
    <div className='container mx-auto px-5 py-20 overflow-hidden text-black dark:text-white'>
      <h2 className='mb-8 text-3xl font-semibold'>( Skill )</h2>
      <div className='flex flex-wrap md:-mx-4'>
        <div className='w-full md:w-6/12 lg:w-3/12 md:px-4'>
          <p className='mb-2 pb-2 font-semibold text-xl border-b border-dashed border-gray-300'>
            Programming Languages
          </p>
          <ul className='mb-4'>
            {['JavaScript', 'HTML', 'CSS/Sass', 'Pug'].map((item, index) => {
              return (
                <li key={`${item}${index}`} className='flex items-center'>
                  <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                  <span className='ml-2'>{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 md:px-4'>
          <p className='mb-2 pb-2 font-semibold text-xl border-b border-dashed border-gray-300'>
            Libraries & Frameworks
          </p>
          <ul className='mb-4'>
            {[
              'jQuery',
              'Bootstrap',
              'GSAP',
              'PixiJS',
              'React',
              'Styled Components',
              'Tailwind CSS',
              'Next.js',
            ].map((item, index) => {
              return (
                <li key={`${item}${index}`} className='flex items-center'>
                  <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                  <span className='ml-2'>{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 md:px-4'>
          <p className='mb-2 pb-2 font-semibold text-xl border-b border-dashed border-gray-300'>
            Tool
          </p>
          <ul className='mb-4'>
            {['Git'].map((item, index) => {
              return (
                <li key={`${item}${index}`} className='flex items-center'>
                  <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                  <span className='ml-2'>{item}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 md:px-4'>
          <p className='mb-2 pb-2 font-semibold text-xl border-b border-dashed border-gray-300'>
            Design
          </p>
          <ul className='mb-4'>
            {['Photoshop', 'Illustrator', 'Figma', 'Sketch'].map(
              (item, index) => {
                return (
                  <li key={`${item}${index}`} className='flex items-center'>
                    <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                    <span className='ml-2'>{item}</span>
                  </li>
                )
              },
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill
