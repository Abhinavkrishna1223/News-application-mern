import React, { useEffect, useLayoutEffect, useState } from 'react';
import union from '../../assets/navImg/Union.png';
import Vector from '../../assets/navImg/Vector.png';
import Ellipse from '../../assets/navImg/Ellipse.png';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeNews } from '../../store/news';
import { Link } from 'react-router-dom';


function Navbar() {


  const dispatch = useDispatch();

  const { dataSuccess, categories } = useSelector((state) => {
    return {
      dataSuccess: state.newsArticlesReducer.homeNews.success,
      categories: state.newsArticlesReducer.homeNews.data,
    }
  });

  useLayoutEffect(() => {
    dispatch(getHomeNews())
  }, [dispatch]);

  const [valCategory, setvalCategory] = useState('');



  useEffect(() => {
    if (dataSuccess) {
      const cat = [];
      if (categories.news) {
        for (let x in categories.news) {
          if (categories.news[x].length) cat.push(x);
        }
      }
      setvalCategory(cat);
    }
  }, [dataSuccess, categories]);



  const mobileMenu = document.getElementById('mobile-menu');

  const navToggle = () => {
    mobileMenu.classList.toggle('hidden');
  }


  //More button toggle //
  const moreToggle = document.getElementById('more-Toggle');


  const showMore = () => {
    moreToggle.classList.toggle("hidden");
  };






  return (
    <>

      <nav className="bg-gray-800  ">
        <div style={{ margin: '0 auto' }} className="max-w-[100%] w-full  px-[0] xl:px-[132px] ">
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <button type="button" id="toggle-button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" onClick={navToggle} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1  justify-evenly items-center md:justify-between">
                <div className="flex flex-shrink-0 items-center ml-[25px] md:ml-0">
                  <img className="block h-8 w-auto lg:hidden" src={union} alt="Your Company" />
                  <img className="hidden  h-[55px] w-auto lg:block" src={union} alt="Your Company" />
                  <span className="flex-none order-1 flex-grow-0 text-white  text-xs font-bold not-italic ">MV
                    NEWS</span>
                </div>
                <div className="hidden sm:ml-6 md:block md:mt-[5px] ">
                  <div className=" w-full flex space-x-4">


                    {!valCategory ? (
                      <h1>Loading...</h1>
                    ) : (
                      <>
                        {valCategory.length > 5 ? (
                          <>
                            {valCategory.slice(0, 5).map((data) => (
                              <Link
                                key={data}
                                to={`/Section/${data}`}
                                className="block md:pr-[0.5rem] md:pl-[1rem] lg:px-6 xl:px-10  py-2 text-sm text-white hover:text-blue-300"
                              >
                                {data}
                              </Link>
                            ))}

                            <div className="flex flex-col">

                              <button onClick={showMore} className="block z-[100] px-4 py-2 text-sm text-white hover:text-blue-300"  >
                                more
                              </button>

                              <div className='absolute hidden' id='more-Toggle'>
                                {/* <h1 className='text-red-600'>heelo</h1> */}

                                {valCategory.slice(5, 20).map((data) => (
                                  <Link
                                    key={data}
                                    to={`/Section/${data}`}
                                    className="block px-4 py-2 md:mt-[35px] text-sm text-white hover:text-blue-300"
                                  >
                                    {data}
                                  </Link>
                                ))}

                              </div>



                            </div>


                          </>
                        ) : (
                          valCategory.map((data) => (
                            <Link
                              key={data}
                              to={`/Section/${data}`}
                              className="block px-4 py-2 text-sm text-white hover:text-blue-300"
                            >
                              {data}
                            </Link>
                          ))
                        )}
                      </>
                    )}



                  </div>
                </div>
                <div className=" flex items-center ">
                  <img className="h-6 mr-[24px] " src={Vector} alt="" />
                  <img className=" w-[46px] h-[46px] mr-[10px]" src={Ellipse} alt="" />
                  <Link to='/signUp' className="font-sans not-italic font-normal text-sm leading-[40px]  text-[2rem] text-white ">sign
                    in</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden transition delay-150 duration-300" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">

              {!valCategory ? (<h1>Loading...</h1>) : valCategory.map((data) => {
                return (
                  <Link to={`/Section/${data}`} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">{data}</Link>

                )
              })}



            </div>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar