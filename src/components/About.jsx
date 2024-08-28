// import { useState } from "react";
// import bannerImage from "../assets/bi3.png";
// import '../App.css';
// const About = () => {
//   const [data, setData] = useState({
//     image: bannerImage,
//     title: "Java Developer & Web Developer",
//     desc1: `I have learnt web development from Accio job bootcamp where
//               I learnt about the DSA Java Backend Spring boot and learnt 
//                front end technologies like HTML ,CSS ,Javascript and React Js.`,
//     desc2: ` I have also do some internship from hulkhire where work on a live project 
//              payment integration in spring boot . I have learnt lot of experience and know how to
//              work with team.
// `,
//     actionButton: {
//       title: "Read More..",
//       link: "/readmore",
//     },
//   });
//   return (
//     <>
//       <div className="main-container bg-gray-100 border py-16">
//         <h1 className="text-center pb-16  text-5xl underline font-bold">
//           About Me
//         </h1>

//         <div className="flex items-center">
//           {/* image container */}
//           <div className="md:w-full w-0  flex  justify-center ">
//             <img
//               className="w-fit rounded-full"
//               src={data.image}
//               alt="durgesh kumar tiwari"
//             />
//           </div>

//           {/* text container  */}
//           <div className="w-full  flex  justify-center">
//             <div className="space-y-5   w-2/3">
//               <h1 className="md:text-5xl text-3xl  font-semibold ">{data.title}</h1>
//               <p>{data.desc1}</p>
//               <p>{data.desc2}</p>
//               <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
//                 {data.actionButton.title}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
import { useState } from "react";
import bannerImage from "../assets/bi3.png";
import '../App.css';

const About = () => {
  const [data] = useState({
    image: bannerImage,
    title: "Java Developer & Web Developer",
    desc1: `I have learnt web development from Accio job bootcamp where I learnt about the DSA Java Backend Spring boot and learned front-end technologies like HTML, CSS, JavaScript, and React Js.`,
    desc2: `I have also done some internships at Hulkhire where I worked on a live project involving payment integration in Spring Boot. I gained a lot of experience and know how to work with a team.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold underline mb-8">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Container */}
        <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
          <img
            className="w-48 h-48 md:w-[400px] md:h-[400px] rounded-full object-cover"
            src={data.image}
            alt="Banner"
          />
        </div>
        {/* Text Container */}
        <div className="flex-1 text-center  md:text-left md:ml-8 md:px-10">
          <h2 className="text-2xl md:text-5xl font-semibold mb-4">
            {data.title}
          </h2>
          <p className="mb-4 text-xl">{data.desc1}</p>
          <p className="mb-4 text-xl">{data.desc2}</p>
          <a
            href={data.actionButton.link}
            className="bg-orange-500 text-white px-4 py-2 text-lg rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
          >
            {data.actionButton.title}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

