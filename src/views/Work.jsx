import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md'
import { HiExternalLink } from 'react-icons/hi'
import work1 from '../assets/work_1.jpg'
import work2 from '../assets/work_2.jpg'
import work3 from '../assets/work_3.jpg'
import work4 from '../assets/work_4.jpg'
import work5 from '../assets/work_5.jpg'
import work6 from '../assets/work_6.jpg'

const Work = () => {
  return (
    <div className='container mx-auto px-5 py-20 overflow-hidden mb-20 lg:mb-24 text-black dark:text-white'>
      <h2 className='mb-8 text-3xl font-semibold'>( Work )</h2>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='order-last md:order-first w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>Grid System</h2>
            <p className=''>
              遍尋 Styled Components Ecosystem 沒有找到自己偏好的 Gird
              System，所以試著自己寫一個。
            </p>
            <ul className='mt-2'>
              <li className='flex items-center'>
                <MdOutlinePlayArrow className='shrink-0 fill-gray-800' />
                <span className='ml-2'>
                  使用 Styled Components 做為建立基礎。
                </span>
              </li>
              <li className='flex items-center'>
                <MdOutlinePlayArrow className='shrink-0 fill-gray-800' />
                <span className='ml-2'>
                  使用 React Context 製作 GridProvider，來管理共用變數。
                </span>
              </li>
              <li className='flex items-center'>
                <MdOutlinePlayArrow className='shrink-0 fill-gray-800' />
                <span className='ml-2'>
                  仿造 Bootstrap Grid System，打造 Container、Row、Col
                  三層結構。
                </span>
              </li>
              <li className='flex items-center'>
                <MdOutlinePlayArrow className='shrink-0 fill-gray-800' />
                <span className='ml-2'>
                  透過 cloneElement 方法把 Props 傳進 children。
                </span>
              </li>
            </ul>
            <div className='flex justify-end mt-4'>
              <a
                href='https://stackblitz.com/edit/react-dbo4yg?file=src/index.js'
                target='_blank'
              >
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
        <div className='w-full md:w-6/12 bg-gray-800 md:-ml-[8.333%]'>
          <img src={work1} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='w-full md:w-6/12 bg-gray-800 md:-mr-[8.333%]'>
          <img src={work2} />
        </div>
        <div className='w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>
              黑松 FIN - 潮玩陸海空
            </h2>
            <p className=''>
              這個活動內容是一個 Canvas
              遊戲，隨機出現的物品由上往下掉落，使用拖拉移動置底的公仔去接，接到後才算得分。開發上選用
              PixiJS 是因為它能支援 WebGL 做效能上的提升，在 2D
              遊戲的表現上相當優異。
            </p>
            <div className='flex justify-end mt-4'>
              <a href='https://finsp2022.com.tw/' target='_blank'>
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='order-last md:order-first w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>
              Next Animation Studio
            </h2>
            <p className=''>
              壹傳媒集團動畫製作子公司的作品網站，以 Next.js
              開發，負責前端部分與資料串接，第一次嘗試設計 API
              資料格式與後端溝通。
            </p>
            <div className='flex justify-end mt-4'>
              <a href='https://www.nextanimationstudio.com/' target='_blank'>
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
        <div className=' w-full md:w-6/12 bg-gray-800 md:-ml-[8.333%]'>
          <img src={work3} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='w-full md:w-6/12 bg-gray-800 md:-mr-[8.333%]'>
          <img src={work4} />
        </div>
        <div className='w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>
              基富通 - 好好退休準備平台
            </h2>
            <p className=''>
              基富通針對退休理財規劃推出的投資商品介紹平台，主要負責前端全部頁面切版和後端API串接，由於本專案無後台規劃但內容又需要維護，所以分別將基金商品、教育文章、活動辦法、影片等內容用
              JSON 提供給客戶自行維護。
            </p>
            <div className='flex justify-end mt-4'>
              <a
                href='https://www.fundrich.com.tw/event/pensionplatform/'
                target='_blank'
              >
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='order-last md:order-first w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>
              Nikon - 鏡片視光體驗中心
            </h2>
            <p className=''>
              Nikon
              鏡片的產品介紹與店點查詢，負責全站切版、主要開發功能為店點查詢的資料由後端
              API 取得後，再將資料從 Google Maps 來呈現該店點位置與詳細內容。
            </p>
            <div className='flex justify-end mt-4'>
              <a href='https://www.nikon-nvec.com.tw/' target='_blank'>
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
        <div className=' w-full md:w-6/12 bg-gray-800 md:-ml-[8.333%]'>
          <img src={work5} />
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <div className='w-full md:w-6/12 bg-gray-800 md:-mr-[8.333%]'>
          <img src={work6} />
        </div>
        <div className='w-full md:w-7/12 p-4 bg-yellow-400/[0.8] dark:bg-yellow-400/[0.6] relative'>
          <article>
            <h2 className='text-lg font-semibold mb-2'>PENLUX</h2>
            <p className=''>
              PENLUX 是一個鋼筆品牌官網，負責項目為全站切版並以 Bootstrap
              為基礎、自製輪播系統、後台資料是由後端套板完成。
            </p>
            <div className='flex justify-end mt-4'>
              <a href='http://www.penlux.com.tw/' target='_blank'>
                <HiExternalLink
                  size={30}
                  className='hover:fill-yellow-600 dark:hover:fill-yellow-400'
                />
              </a>
            </div>
          </article>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <span className='my-40 text-4xl'>&#127881;</span>
      </div>
    </div>
  )
}

export default Work
