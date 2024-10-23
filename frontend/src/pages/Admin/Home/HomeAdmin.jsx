import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// import Profile from '../../../Components/Admin/Profile/Profile'
import Content from '../../../Components/Admin/components/Content'
import Chart from 'chart.js/auto'
export default function HomeAdmin() {
  // const [members, setMembers] = useState([])
  // const [questions, setQuestions] = useState([])
  // const [answers, setAnswers] = useState([])
  // const [accounts, setAccounts] = useState([])
  useEffect(() => {
    // call api

    // Khởi tạo biểu đồ Pie
    const ctxPie = document.getElementById('pie').getContext('2d')
    const pieChart = new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: ['Questions', 'Answers', 'Members'],
        datasets: [
          {
            label: 'Revenue',
            data: [50, 30, 20],
            backgroundColor: ['#4299E1', '#38B2AC', '#805AD5']
          }
        ]
      },
      options: {
        maintainAspectRatio: false // Điều chỉnh tỉ lệ
      }
    })

    // Khởi tạo biểu đồ Line
    const ctxLine = document.getElementById('line').getContext('2d')
    const lineChart = new Chart(ctxLine, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Questions',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#38B2AC',
            fill: false
          },
          {
            label: 'Answers',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: '#805AD5',
            fill: false
          }
        ]
      },
      options: {
        maintainAspectRatio: false // Điều chỉnh tỉ lệ
      }
    })

    // Cleanup function để huỷ các biểu đồ khi component unmount
    return () => {
      pieChart.destroy()
      lineChart.destroy()
    }
  }, [])

  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div className={`100 ? 'dark' : ''}`}>
      <div className='text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800'>
        <Content>
          <main className='h-full overflow-y-auto'>
            <div className='container px-6 mx-auto grid'>
              <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Dashboard</h2>
              <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <div className='p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Total members</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>6389</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <div className='p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500'>
                    <svg
                      fill='currentColor'
                      width='20px'
                      height='20px'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Account Settings</title>
                      <path d='M9.6,3.32a3.86,3.86,0,1,0,3.86,3.85A3.85,3.85,0,0,0,9.6,3.32M16.35,11a.26.26,0,0,0-.25.21l-.18,1.27a4.63,4.63,0,0,0-.82.45l-1.2-.48a.3.3,0,0,0-.3.13l-1,1.66a.24.24,0,0,0,.06.31l1,.79a3.94,3.94,0,0,0,0,1l-1,.79a.23.23,0,0,0-.06.3l1,1.67c.06.13.19.13.3.13l1.2-.49a3.85,3.85,0,0,0,.82.46l.18,1.27a.24.24,0,0,0,.25.2h1.93a.24.24,0,0,0,.23-.2l.18-1.27a5,5,0,0,0,.81-.46l1.19.49c.12,0,.25,0,.32-.13l1-1.67a.23.23,0,0,0-.06-.3l-1-.79a4,4,0,0,0,0-.49,2.67,2.67,0,0,0,0-.48l1-.79a.25.25,0,0,0,.06-.31l-1-1.66c-.06-.13-.19-.13-.31-.13L19.5,13a4.07,4.07,0,0,0-.82-.45l-.18-1.27a.23.23,0,0,0-.22-.21H16.46M9.71,13C5.45,13,2,14.7,2,16.83v1.92h9.33a6.65,6.65,0,0,1,0-5.69A13.56,13.56,0,0,0,9.71,13m7.6,1.43a1.45,1.45,0,1,1,0,2.89,1.45,1.45,0,0,1,0-2.89Z' />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Total accounts</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>1000</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500'>
                    <svg
                      width='20px' // Kích thước chiều rộng
                      height='20px' // Kích thước chiều cao
                      viewBox='0 0 16 16' // Khung nhìn
                      fill='none' // Không có màu nền
                      xmlns='http://www.w3.org/2000/svg' // Không gian tên XML
                    >
                      <path
                        d='M5.5 5.5C5.5 4.11929 6.61929 3 8 3C9.38071 3 10.5 4.11929 10.5 5.5C10.5 6.88071 9.38071 8 8 8H7V11H8C11.0376 11 13.5 8.53757 13.5 5.5C13.5 2.46243 11.0376 0 8 0C4.96243 0 2.5 2.46243 2.5 5.5H5.5Z'
                        fill='currentColor' // Đổi màu bên trong
                      />
                      <path
                        d='M10 13H7V16H10V13Z'
                        fill='currentColor' // Đổi màu bên trong
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Questions</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>376</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <div className='p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500'>
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className='mb-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Answers</p>
                    <p className='text-lg font-semibold text-gray-700 dark:text-gray-200'>35</p>
                  </div>
                </div>
              </div>
              <div className='w-full overflow-hidden rounded-lg shadow-xs'>
                <div className='w-full overflow-x-auto'>
                  <table className='w-full whitespace-no-wrap'>
                    <thead>
                      <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                        <th className='px-4 py-3'>Member</th>
                        <th className='px-4 py-3'>Reputation</th>
                        <th className='px-4 py-3'>Status</th>
                        <th className='px-4 py-3'>Register time</th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                              <img
                                className='object-cover w-full h-full rounded-full'
                                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true'></div>
                            </div>
                            <div>
                              <p className='font-semibold'>Hans Burger</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>10x Developer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>100</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100'>
                            Active
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>

                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                              <img
                                className='object-cover w-full h-full rounded-full'
                                src='https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true'></div>
                            </div>
                            <div>
                              <p className='font-semibold'>Sarah Curry</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Designer</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>100</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700'>
                            Delete
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>

                      <tr className='text-gray-700 dark:text-gray-400'>
                        <td className='px-4 py-3'>
                          <div className='flex items-center text-sm'>
                            <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
                              <img
                                className='object-cover w-full h-full rounded-full'
                                src='https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                alt=''
                                loading='lazy'
                              />
                              <div className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true'></div>
                            </div>
                            <div>
                              <p className='font-semibold'>Wenzel Dashington</p>
                              <p className='text-xs text-gray-600 dark:text-gray-400'>Actor</p>
                            </div>
                          </div>
                        </td>
                        <td className='px-4 py-3 text-sm'>100</td>
                        <td className='px-4 py-3 text-xs'>
                          <span className='px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700'>
                            Denied
                          </span>
                        </td>
                        <td className='px-4 py-3 text-sm'>6/10/2020</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
                  <span className='flex items-center col-span-3'>Showing 21-30 of 100</span>
                  <span className='col-span-2'></span>
                  <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
                    <nav aria-label='Table navigation'>
                      <ul className='inline-flex items-center'>
                        <li>
                          <button
                            className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                            aria-label='Previous'
                          >
                            <svg aria-hidden='true' className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                              <path
                                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            1
                          </button>
                        </li>
                        <li>
                          <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            2
                          </button>
                        </li>
                        <li>
                          <button className='px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            3
                          </button>
                        </li>
                        <li>
                          <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            4
                          </button>
                        </li>
                        <li>
                          <span className='px-3 py-1'>...</span>
                        </li>
                        <li>
                          <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            8
                          </button>
                        </li>
                        <li>
                          <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                            9
                          </button>
                        </li>
                        <li>
                          <button
                            className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                            aria-label='Next'
                          >
                            <svg className='w-4 h-4 fill-current' aria-hidden='true' viewBox='0 0 20 20'>
                              <path
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                                fillRule='evenodd'
                              ></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>

              <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>Charts</h2>
              <div className='grid gap-6 mb-8 md:grid-cols-2'>
                <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Pie</h4>
                  <div className='w-auto h-40'>
                    <canvas id='pie'></canvas>
                  </div>
                  <div className='flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400'>
                    <div className='flex items-center'>
                      <span className='inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full'></span>
                      <span>Questions</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full'></span>
                      <span>Answers</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full'></span>
                      <span>Members</span>
                    </div>
                  </div>
                </div>
                <div className='min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800'>
                  <h4 className='mb-4 font-semibold text-gray-800 dark:text-gray-300'>Line</h4>
                  <div className='w-auto h-40'>
                    <canvas id='line'></canvas>
                  </div>
                  <div className='flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400'>
                    <div className='flex items-center'>
                      <span className='inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full'></span>
                      <span>Questions</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full'></span>
                      <span>Answers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Content>
      </div>
    </div>
  )
}
