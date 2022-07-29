import React from 'react'
import { MdOutlinePlayArrow } from 'react-icons/md'

const phase1 = [
  {
    id: 1,
    company: '永豐銀行',
    title: 'Front-End Developer',
    seniority: '2021/10 - 目前',
    descriptions: [
      {
        id: 1,
        description: '規劃數位銀行 App 架構。',
      },
      {
        id: 2,
        description: '負責網銀、數位銀行 App 各產品維運，以及功能開發。',
      },
      {
        id: 3,
        description: '行銷活動頁面切版、動態、API 串接。',
      },
    ],
  },
  {
    id: 2,
    company: 'Freelancer',
    title: 'Front-End Developer & Project Manager',
    seniority: '2020/12 - 2021/10',
    descriptions: [
      {
        id: 1,
        description: '在產品管理、設計師、後端工程師之間做溝通與協調專案內容。',
      },
      {
        id: 2,
        description: '設計出易於客戶維護內容的結構與方式。',
      },
    ],
  },
  {
    id: 3,
    company: '恆富國際',
    title: 'Front-End Developer',
    seniority: '2020/04 - 2020/12',
    descriptions: [
      {
        id: 1,
        description: '使用 React 與 Vue 維運以及開發自家產品。',
      },
      {
        id: 2,
        description: '團隊使用 Scrum 敏捷開發。',
      },
    ],
  },
]

const phase2 = [
  {
    id: 1,
    company: '未來方案',
    title: 'Senior Interactive Developer',
    seniority: '2016/05 - 2020/02',
    descriptions: [],
  },
  {
    id: 2,
    company: '奧美廣告',
    title: 'Senior Interactive Developer',
    seniority: '2014/07 - 2016/05',
    descriptions: [],
  },
  {
    id: 3,
    company: '奇禾數位',
    title: 'Interactive Developer',
    seniority: '2012/03 - 2014/07',
    descriptions: [
      {
        id: 1,
        description: '參與創意發想與給予技術面執行可能性建議與解決方案。',
      },
      {
        id: 2,
        description: '獨立執行產品官網前端開發、API 文件設計與串接。',
      },
      {
        id: 3,
        description: '執行各種行銷網站切版、動態設計，擅長使用 GSAP。',
      },
      {
        id: 4,
        description: '使用 PixiJS 開發 Canvas 遊戲。',
      },
      {
        id: 5,
        description: '使用 Flash Action Script 3.0 開發互動網站。',
      },
    ],
  },
]

const phase3 = [
  {
    id: 1,
    company: '恆逸資訊',
    title: 'Web Desinger',
    seniority: '2009/09 - 2012/03',
    descriptions: [
      {
        id: 1,
        description: '使用 ActionScript 開發 e-learning 課程。',
      },
      {
        id: 2,
        description: 'Flash 動畫設計。',
      },
    ],
  },
  {
    id: 2,
    company: '因思銳遊戲',
    title: 'Web Desinger',
    seniority: '2008/03 - 2009/09',
    descriptions: [
      {
        id: 1,
        description: '遊戲官網設計、相關平面輸出物製作。',
      },
    ],
  },
  {
    id: 3,
    company: '玉馬門設計',
    title: 'Web Desinger',
    seniority: '2008/01 -2008/02',
    descriptions: [
      {
        id: 1,
        description: '產品網頁設計。',
      },
    ],
  },
]

const Experience = () => {
  const Stage = ({ title }) => {
    return (
      <div className='flex items-center mb-8'>
        <p className='text-yellow-600 text-xl lg:text-2xl pr-2'>{title}</p>
        <div className='grow h-px border-t border-yellow-600'>&nbsp;</div>
      </div>
    )
  }
  return (
    <div className='container mx-auto px-5 pt-20 pb-24 overflow-hidden text-black dark:text-white'>
      <h2 className='mb-8 text-3xl font-semibold'>( Experience )</h2>

      <Stage title='Front-End Developer Stage' />
      {phase1.map((job) => {
        return (
          <div key={job.id} className='flex flex-col sm:flex-row -mx-4'>
            <div className='shrink-0 w-full sm:w-32 mb-1 sm:mb-0 px-4'>
              <p className='text-yellow-400 text-lg'>{job.company}</p>
            </div>
            <div className='px-4'>
              <p className='text-lg font-semibold'>{job.title}</p>
              <p className='mb-4 text-sm text-gray-400'>{job.seniority}</p>
              {job.descriptions.length < 1 || (
                <ul className='mb-8'>
                  {job.descriptions.map((item) => {
                    return (
                      <li key={item.id} className='flex items-center'>
                        <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                        <span className='ml-2'>{item.description}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        )
      })}

      <Stage title='Interactive Developer Stage' />
      {phase2.map((job) => {
        return (
          <div key={job.id} className='flex flex-col sm:flex-row -mx-4'>
            <div className='shrink-0 w-full sm:w-32 mb-1 sm:mb-0 px-4'>
              <p className='text-yellow-400 text-lg'>{job.company}</p>
            </div>
            <div className='px-4'>
              <p className='text-lg font-semibold'>{job.title}</p>
              <p className='mb-4 text-sm text-gray-400'>{job.seniority}</p>
              {job.descriptions.length < 1 || (
                <ul className='mb-8'>
                  {job.descriptions.map((item) => {
                    return (
                      <li key={item.id} className='flex items-center'>
                        <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                        <span className='ml-2'>{item.description}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        )
      })}

      <Stage title='Web Desinger Stage' />
      {phase3.map((job) => {
        return (
          <div key={job.id} className='flex flex-col sm:flex-row -mx-4'>
            <div className='shrink-0 w-full sm:w-32 mb-1 sm:mb-0 px-4'>
              <p className='text-yellow-400 text-lg'>{job.company}</p>
            </div>
            <div className='px-4'>
              <p className='text-lg font-semibold'>{job.title}</p>
              <p className='mb-4 text-sm text-gray-400'>{job.seniority}</p>
              {job.descriptions.length < 1 || (
                <ul className='mb-8'>
                  {job.descriptions.map((item) => {
                    return (
                      <li key={item.id} className='flex items-center'>
                        <MdOutlinePlayArrow className='shrink-0 fill-yellow-400' />
                        <span className='ml-2'>{item.description}</span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Experience
