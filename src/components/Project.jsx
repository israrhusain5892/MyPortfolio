// import React from 'react';
// import { useState } from 'react';
// import link from '../assets/tourism.PNG';
// import './Project.css';
// function Project(props) {

//        const[flag,setFlag]=useState(false);
//        const[flaga,setFlaga]=useState(false);
        
//     return (
//         <div className='mt-10 mb-10 md:px-0 px-10'>
//               <h1 className='mb-10 md:text-5xl text-3xl font-bold underline text-center'>Recent Works</h1>
               
//                <div className='flex  justify-center flex-wrap md:gap-0 gap-10' >
//               <div className='flex  justify-between flex-col gap-10  mx-auto flex-wrap md:px-24'>
//               <div onMouseEnter={()=>setFlag(true)} onMouseLeave={()=>setFlag(false)} className='w-[500px]  img h-[300px] cursor-pointer hover:scale-105 space-y-3 bg-blue-600  text-center shadow-lg rounded-xl shadow-xl '>
                 
//                   {flag && <div className='bg-black bg-opacity-50 h-full z-50 w-full'>
//                        <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-55px]"></i>
//                       <div className='text-center ml-[250px] mt-4 absolute'>
//                           <a className='text-white' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank'> <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i></a>
//                       </div>
//                       <p className='text-white text-2xl mt-[130px] absolute ml-[120px]'>Travel and Tourism Project</p>
//                         <div className='text-center mt-[250px] ml-4 absolute'>
//                           <a className='text-white' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank'>
//                              <div className='flex gap-2 items-center'>
//                              <i className="fa-brands fa-github text-2xl"></i><h1 className='text-2xl'>Github</h1>
//                              <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
//                             </div>
//                         </a>
//                        </div>
//                     </div>}
                    
//               </div>
//               <div onMouseEnter={()=>setFlaga(true)} onMouseLeave={()=>setFlaga(false)} className='md:w-[500px] w-full img h-[300px] cursor-pointer hover:scale-105 space-y-3 bg-blue-600  text-center shadow-lg rounded-xl shadow-xl '>
                 
//                  {flaga && <div className='bg-black bg-opacity-50 h-full z-50 w-full'>
//                       <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-55px]"></i>
//                      <div className='text-center ml-[250px] mt-4 absolute'>
//                          <a className='text-white' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank'> <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i></a>
//                      </div>
//                      <p className='text-white text-2xl mt-[130px] absolute ml-[120px]'>Travel and Tourism Project</p>
//                        <div className='text-center mt-[250px] ml-4 absolute'>
//                          <a className='text-white' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank'>
//                             <div className='flex gap-2 items-center'>
//                             <i className="fa-brands fa-github text-2xl"></i><h1 className='text-2xl'>Github</h1>
//                             <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
//                            </div>
//                        </a>
//                       </div>
//                    </div>}
                   
//              </div>
                    
//               </div>
//               <span className='md:min-h-[685px] min-h-0 mb-[170px]  absolute md:p-1 p-0 bg-[#C463BD] text-center block mx-auto rounded-full'></span>
//               <div className='flex justify-between  flex-col gap-10 mx-auto flex-wrap px-24'>
//                     <div className='w-[500px] h-[300px] cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl shadow-xl '></div>
//                     <div className='w-[500px] h-[300px] cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl shadow-xl '></div>
                   
//               </div>
//               </div>

//               <div className='md:w-32 md:py-4 border mx-auto mt-10 md:bg-black rounded'></div>
//         </div>
//     );
// }

// export default Project;

import React, { useState } from 'react';
import link from '../assets/tourism.PNG';
import './Project.css';
import capture from '../assets/Capture.PNG';
import binit from '../assets/blinkit.PNG';
import shopping from '../assets/shopping.PNG';
function Project(props) {
  const [flag, setFlag] = useState(false);
  const [flaga, setFlaga] = useState(false);
  const [flagb, setFlagb] = useState(false);
  const [flagc, setFlagc] = useState(false);

  return (
    <div className='  px-4 py-10 md:px-0'>
      <h1 className='mb-10 text-3xl md:text-5xl font-bold underline text-center'>Recent Projects</h1>
      {/* 1st row */}
      <div className='flex flex-col md:flex-row md:justify-center md:gap-24 gap-10'>
        {/* Project Item 1 */}
        <div
        
          onMouseEnter={() => setFlag(true)}
          onMouseLeave={() => setFlag(false)}
          className='relative w-full md:w-[500px] img h-[300px] bg-blue-600 text-center shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
        >
          {flag && (
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
              <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-360px]"></i>
              <a className='text-2xl absolute  mt-[-240px]' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank' rel="noopener noreferrer">
                <i className="fa-sharp-duotone fa-solid fa-link"></i>
              </a>
              <p className='text-2xl mb-4'>Travel and Tourism Project</p>
              <a className='text-white flex gap-2 items-center' href="https://wondersofbharat-tourism-app.vercel.app/" target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl"></i>
                <span className='text-2xl'>Github</span>
                <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
              </a>
            </div>
          )}
        </div>

        {/* Project Item 2 */}
        <div
           style={{
            backgroundImage: `url( ${capture})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
       
            backgroundPosition:'center'
          }}
          onMouseEnter={() => setFlaga(true)}
          onMouseLeave={() => setFlaga(false)}
          className='relative w-full md:w-[500px] h-[300px]  bg-blue-600 text-center shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
        >
          {flaga && (
            <div
             
            className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
              <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-360px]"></i>
              <a className='text-2xl  absolute   mt-[-240px]' href="https://book-store-app-frontend-eight.vercel.app/" target='_blank' rel="noopener noreferrer">
                <i className="fa-sharp-duotone fa-solid fa-link"></i>
              </a>
              <p className='text-2xl mb-4'>Book Store MERN Project</p>
              <a className='text-white flex gap-2 items-center' href="https://github.com/israrhusain5892/Book-Store-App-Frontend.git" target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl"></i>
                <span className='text-2xl'>Github</span>
                <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
              </a>
            </div>
          )}
        </div>
      </div>


         {/* 2n row  */}
      <div className='flex flex-col md:flex-row md:gap-24 md:justify-center gap-10 mt-10'>
        {/* Placeholder Projects */}
        <div className='w-full md:w-[500px] h-[300px] bg-slate-100 text-center shadow-lg rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
          {/* Placeholder content */}
            <div
           style={{
            backgroundImage: `url( ${binit})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
       
            backgroundPosition:'center'
          }}
          onMouseEnter={() => setFlagb(true)}
          onMouseLeave={() => setFlagb(false)}
          className='relative w-full md:w-[500px] h-[300px]  bg-blue-600 text-center shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
        >
          {flagb && (
            <div
             
            className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
              <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-360px]"></i>
              <a className='text-2xl  absolute   mt-[-240px]' href="https://israrhusain5892.github.io/Blinkit-clone/" target='_blank' rel="noopener noreferrer">
                <i className="fa-sharp-duotone fa-solid fa-link"></i>
              </a>
              <p className='text-2xl mb-4'>Blinkit Clone by using html+css</p>
              <a className='text-white flex gap-2 items-center' href="https://github.com/israrhusain5892/Blinkit-clone.git" target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl"></i>
                <span className='text-2xl'>Github</span>
                <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
              </a>
            </div>
          )}
        </div>
        </div>
        <div className='w-full md:w-[500px] h-[300px] bg-slate-100 text-center shadow-lg rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
          {/* Placeholder content */}
          <div className='w-full md:w-[500px] h-[300px] bg-slate-100 text-center shadow-lg rounded-xl cursor-pointer hover:bg-gray-100 transition-colors duration-300'>
          {/* Placeholder content */}
            <div
           style={{
            backgroundImage: `url( ${shopping})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
       
            backgroundPosition:'center'
          }}
          onMouseEnter={() => setFlagc(true)}
          onMouseLeave={() => setFlagc(false)}
          className='relative w-full md:w-[500px] h-[300px]  bg-blue-600 text-center shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300'
        >
          {flagc && (
            <div
             
            className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white'>
              <i className="fa-solid fa-arrow-down moveArrow text-pink-900 text-5xl absolute mt-[-360px]"></i>
              <a className='text-2xl  absolute   mt-[-240px]' href="https://israrhusain5892.github.io/Shopping-website/" target='_blank' rel="noopener noreferrer">
                <i className="fa-sharp-duotone fa-solid fa-link"></i>
              </a>
              <p className='text-2xl mb-4'>shopping Website by using html+css</p>
              <a className='text-white flex gap-2 items-center' href="https://github.com/israrhusain5892/Shopping-website.git" target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl"></i>
                <span className='text-2xl'>Github</span>
                <i className="fa-sharp-duotone fa-solid fa-link text-2xl"></i>
              </a>
            </div>
          )}
        </div>
        </div>
        </div>
      </div>

      {/* <div className='w-full md:w-32 md:py-4 border mx-auto mt-10 md:bg-black rounded'></div> */}
    </div>
  );
}

export default Project;
