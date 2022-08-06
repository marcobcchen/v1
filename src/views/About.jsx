import React from 'react'
import cover from '../assets/cover.jpg'

const About = () => {
  return (
    <div className='container mx-auto px-5 py-20 overflow-hidden'>
      <div className='flex flex-wrap items-center md:-mx-8'>
        <article className='md:px-8 w-full md:w-7/12 text-black dark:text-white'>
          <h2 className='mb-8 text-3xl font-semibold'>( About )</h2>
          <p className='mb-4 text-lg leading-8'>
            擅長分析問題及找尋解決問題的任何可能性，並能與工作夥伴
            <span className='text-2xl text-yellow-400'>溝通流暢</span>，
            <span className='text-2xl text-yellow-400'>分享專業所知</span>與
            <span className='text-2xl text-yellow-400'>想法</span>
            ，比起單獨作業，更喜歡整個團隊互相交流、碰撞想法帶來的工作氛圍！
          </p>
          <p className='mb-4 text-lg leading-8'>
            熱衷於接觸新技術的
            <span className='text-2xl text-yellow-400'>刺激</span>與
            <span className='text-2xl text-yellow-400'>挑戰</span>
            ，並期待每一次的作品都能悉心參與，從整體架構到畫面呈現都希望能盡力完美，是我在專業上最大的成就感來源。
          </p>
          <p className='text-lg leading-8'>
            期許自己能夠成為那個
            <span className='text-2xl text-yellow-400'>解決問題</span>
            的角色。
          </p>
        </article>
        <div className='mt-8 md:mt-0 md:px-8 px-4 w-full md:w-5/12'>
          <div className=' relative after:absolute after:left-3 after:top-3 after:w-full after:h-full after:rounded-2xl after:border-2 after:border-yellow-400'>
            <div className='overflow-hidden rounded-2xl'>
              <img src={cover} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
