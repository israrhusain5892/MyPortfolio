import { useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Israr Husain");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },

    {
      title: "Skills",
      link: "/skills",
      id: 2,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 3,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 4,
    },
    {
      title: "About",
      link: "/About",
      id: 5,
    },
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "https://drive.google.com/file/d/1ar7ZSfXhklYaJ3twTEda8duaOhsErjbi/view?usp=sharing",
  });

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>

        <div className="space-x-6 ">
          {/* menu links */}

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}

          {/* 
          <a href="/about" className="hover:text-orange-600">
            About
          </a>

          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>

          <a href="/Portfolio" className="hover:text-orange-600">
            Portfolio
          </a>

          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>

        <div>
          {/* buttons */}
          <a
            href={actionButton.link} target="_blank"
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl "
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
