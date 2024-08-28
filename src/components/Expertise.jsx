// import bannerBackground from "../assets/banner_wallpaper.svg";
// const Expertise = () => {
//   return (
//     <>
//       <div className="mt-2">
//         <h1 className=" mb-16 text-5xl font-bold underline  text-center">
//           My Expertise
//         </h1>
//         {/* box section */}

//         <div
//               style={{
//                 backgroundImage: `url(${bannerBackground})`,
//                 backgroundSize: "cover",
//               }}
//           className="w-full items-center   flex py-16"
//         >
//           <div 
           
//           className="flex  w-full text-white justify-center"
            
//           >
//             {/* text container */}
//             <div
              
//              className="w-[600px] text-center space-y-4">
//               <h1 className="text-4xl font-bold">I love these technologies</h1>
//               <p>
//               I am software engineer but if I Talk about my experince and creative sikills.
//                In the first year of my engineering i struggled a lot but some how i know that i can do this this make motivated.
//                My teachers give me right path support me a lot and I learnt skills DSA ,Java, Spring boot and 
//                Html ,Css Java script React js.
//               </p>
//               <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
//                 Hire Me
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             {/* skills container */}

//             <div className="flex  justify-center w-2/3  h-fit space-x-3  flex-wrap">
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Core Java
//               </p>

//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 J2EE
//               </p>

//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Hibernate(ORM Tool)
//               </p>

//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Spring Framework
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Spring Boot Framework
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Spring Security
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Javascript
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 ReactJS
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Tailwind CSS
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Html
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 CSS
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                  Java Script
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Mysql
//               </p>
//               <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Jpa Hibernate
//               </p>
//               {/* <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
//                 Deploying on Clound
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Expertise;
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <div className="mt-2 px-4 md:px-10">
      <h1 className="mb-8 md:mb-16 text-3xl md:text-5xl font-bold underline text-center">
        My Expertise
      </h1>
      {/* Box Section */}
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col md:flex-row py-12 md:py-16 bg-gray-800 md:text-white text-blue-800"
      >
        <div className="flex-1 flex justify-center items-center">
          {/* Text Container */}
          <div className="text-center md:text-left w-full md:w-3/4 lg:w-1/2 space-y-4 p-4">
            <h1 className="text-3xl md:text-4xl font-bold">I love these technologies</h1>
            <p>
              I am a software engineer, and when it comes to my experience and creative skills, I initially struggled but found motivation to excel. With the support of my teachers, I have developed skills in DSA, Java, Spring Boot, and front-end technologies like HTML, CSS, JavaScript, and React JS.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 bg-orange-500 text-white text-lg rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {/* Skills Container */}
          <div className="flex flex-wrap justify-center gap-3 p-4">
            {[
              "Core Java", "J2EE", "Hibernate(ORM Tool)", "Spring Framework", 
              "Spring Boot Framework", "Spring Security", "JavaScript", "ReactJS", 
              "Tailwind CSS", "HTML", "CSS", "MySQL", "JPA Hibernate"
            ].map(skill => (
              <p
                key={skill}
                className="bg-gray-300 text-gray-800 px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
