// import bannerImage from "../assets/bi3.png";
// import bannerBackground from "../assets/banner_wallpaper.svg";
// import Typed from "typed.js";
// import '../App.css';
// import { useRef } from "react";
// import { useEffect } from "react";
// const Banner = () => {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ["Frontend Developer", "Backend Developer"], // Strings to display
//       // Speed settings, try diffrent values untill you get good results
//       startDelay: 100,
//       typeSpeed: 50,
//       backSpeed: 10,
//       backDelay: 100,
//       loop: true,
//     });

//     // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bannerBackground})`,
//         backgroundSize: "cover",
//       }}
//       className="main-container  flex items-center"
//     >
//       {/* first dabba */}
//       <div className="w-full flex  items-center  justify-center text-white  ">
//         {/* text */}
//         <div className="w-2/3 space-y-2  ms-10">
//           <h3 className="md:text-3xl text-xl font-semibold">Hi, I am</h3>
//           <h1 className="md:text-5xl text-3xl font-bold">Israr Husain</h1>
//           <h2 className="text-3xl ">
//             I am <span className="font-bold underline" ref={el}></span>
//           </h2>
//           <p className="">
//           I'm a Software Engineer completed My Engineering degree From Rajshree Institute of Management And Technology Bareilly,Uttar Pradesh. I have chosen to study computer science because I am fascinated by how computers work and I spend most of my spare time designing programs and web pages because I enjoy problem solving and logical thinking... Throughout my academic life, I have had different ideas about what career I would pursue in the future.
//           </p>

//           <div className="icons-container flex space-x-5 icons">
//             <a  href="https://www.facebook.com/israr.husain.3597789" target="_blank"className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands md:text-4xl  text-3xl fa-facebook"></i>
//             </a>

//             <a  href="https://www.instagram.com/israrhusain5892/" target="_blank"className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands md:text-4xl  text-3xl fa-instagram"></i>
//             </a>

//             <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands md:text-4xl  text-3xl  fa-youtube"></i>
//             </a>

//             <a  href="https://www.linkedin.com/in/israr-husain-b77b58150" target="_blank"className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands md:text-4xl  text-3xl  fa-linkedin-in"></i>
//             </a>

//             <a href="https://github.com/israrhusain5892?tab=repositories" target='_blank'className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
//               <i class="fa-brands md:text-4xl  text-3xl fa-github"></i>
//             </a>
//           </div>
//           <br />
//           <a
//             className=" text-2xl px-3  py-2 bg-orange-500  rounded-full shadow-lg"
//             href="/contact"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* second  dabba */}

//       <div className="md:w-full w-0 flex  justify-center moveArrow">
       
//         <img className="rounded-full   my-2 shadow-lg w-fit" src={bannerImage} />
//       </div>
//     </div>
//   );
// };

// export default Banner;
import bannerImage from "../assets/bi3.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import '../App.css';
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex  flex-col md:flex-row items-center justify-center py-8 px-4 md:px-16"
    >
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center md:items-start md:text-white text-blue-900 mb-8 md:mb-0">
        <div className="w-full max-w-2xl text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-3xl md:text-5xl font-bold">Israr Husain</h1>
          <h2 className="text-2xl md:text-3xl mt-2">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="mt-4 text-base md:text-lg">
            I'm a Software Engineer who completed my Engineering degree from Rajshree Institute of Management And Technology, Bareilly, Uttar Pradesh. I chose to study computer science because I am fascinated by how computers work and spend most of my spare time designing programs and web pages. I enjoy problem solving and logical thinking...
          </p>
          <div className="icons-container flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://www.facebook.com/israr.husain.3597789" target="_blank" rel="noopener noreferrer" className="icon hover:bg-orange-600 border cursor-pointer px-3 py-3 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-facebook text-2xl md:text-3xl"></i>
            </a>
            <a href="https://www.instagram.com/israrhusain5892/" target="_blank" rel="noopener noreferrer" className="icon hover:bg-orange-600 border cursor-pointer px-3 py-3 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-instagram text-2xl md:text-3xl"></i>
            </a>
            <a href="#" className="icon hover:bg-orange-600 border cursor-pointer px-3 py-3 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-youtube text-2xl md:text-3xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/israr-husain-b77b58150" target="_blank" rel="noopener noreferrer" className="icon hover:bg-orange-600 border cursor-pointer px-3 py-3 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-linkedin-in text-2xl md:text-3xl"></i>
            </a>
            <a href="https://github.com/israrhusain5892?tab=repositories" target="_blank" rel="noopener noreferrer" className="icon hover:bg-orange-600 border cursor-pointer px-3 py-3 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
            </a>
          </div>
          <a
            className="mt-6 inline-block text-xl px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 md:ml-48 flex justify-center moveArrow">
        <img className="rounded-full w-48 h-48 md:w-[400px] md:h-[400px]  shadow-lg" src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;

