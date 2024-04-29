import { useState } from "react";
import bannerImage from "../assets/bi3.png";
import '../App.css';
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Web Developer",
    desc1: `I have learnt web development from Accio job bootcamp where
              I learnt about the DSA Java Backend Spring boot and learnt 
               front end technologies like HTML ,CSS ,Javascript and React Js.`,
    desc2: ` I have also do some internship from hulkhire where work on a live project 
             payment integration in spring boot . I have learnt lot of experience and know how to
             work with team.
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center moveArrow">
            <img
              className="w-fit rounded-full"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
