// import { useState } from "react";

// const Services = () => {
//   useState([
//     {
//       id: "",
//       title: "",
//       description: "",
//       actionButton: {
//         title: "",
//         link: "",
//       },
//     },
//   ]);
//   return (
//     <>
//       <div className="main-container py-12">
//         <h1 className="md:text-5xl font-bold text-center underline">
//           My Services
//         </h1>
//         <div className="services-container space-x-24 px-10 justify-center items-center gap-10 flex flex-wrap mt-12">
//           <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
//             <i class=" text-5xl fa-brands fa-aws"></i>
//             <h1 className="text-4xl">Web Development</h1>
//             <p className="md:w-[600px] w-full ">
//                I provide service of front end technologies in Html, css, Javascript and react js . I have worked on 
//                 different project of front end like made apple clone, Blinkit clone.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//           {/* <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-mobile"></i>
//             <h1 className="text-4xl">Android Development</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
//               veniam eius optio? Eveniet facilis dolorum quis exercitationem,
//               repudiandae sed dolores.
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div> */}
//           <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
//             <i class=" text-5xl fa-solid fa-server"></i>
//             <h1 className="text-4xl">Backend Development</h1>
//             <p className="md:w-[600px] w-full">
//                I have worked on backend Technology like in spring boot ,Hibernate Mysql ,Jpa ,Lombok. where I made 
//                 different project like movie booking ticket system , E-commerce web application etc...
//             </p>
//             <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
//               Check
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;
import { useState } from "react";

const Services = () => {
  const [services] = useState([
    {
      id: "1",
      title: "Web Development",
      description: "I provide service of front-end technologies in HTML, CSS, JavaScript, and React JS. I have worked on different front-end projects like creating clones of popular websites.",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
    {
      id: "2",
      title: "Backend Development",
      description: "I have experience with backend technologies like Spring Boot, Hibernate, MySQL, JPA, and Lombok. Projects include movie booking systems and e-commerce applications.",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
    {
      id: "2",
      title: "Mern Stack Development",
      description: "I have experience with backend technologies like Node js, express Js, MySQL, MongoDB. Projects include online Book Store.",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
  ]);

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center underline mb-8">
        My Services
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-5 text-center shadow-lg rounded-xl hover:bg-gray-100 cursor-pointer flex-1 md:w-96 max-w-sm"
          >
            <i className={`text-5xl ${service.iconClass}`}></i>
            <h1 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
              {service.title}
            </h1>
            <p className="text-sm md:text-lg mb-4">
              {service.description}
            </p>
            <a
              href={service.actionButton.link}
              className="inline-block px-4 py-2 bg-orange-500 text-white text-lg rounded-full shadow-lg hover:bg-orange-600 transition duration-300"
            >
              {service.actionButton.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
