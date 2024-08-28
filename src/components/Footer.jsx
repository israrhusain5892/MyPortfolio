// const Footer = () => {
//   return (
//     <>
//       <div className="py-5 border w-full bg-gray-100 flex flex-wrap justify-between md:px-72">
        
//         <div className="space-x-5">
//           <a href="/about" className="hover:underline">
//             About
//           </a>
//           <a href="/about" className="hover:underline">
//             Privacy Policy
//           </a>
//           <a href="/about" className="hover:underline">
//             Licensing{" "}
//           </a>
//           <a href="/about" className="hover:underline">
//             Contact
//           </a>
//         </div>
//         <div>
//           <p>
//             @2023 Israr Husain <span>All Rights Reserved</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <div className="bg-gray-100 py-5 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <a href="/about" className="hover:underline text-gray-700">
              About
            </a>
            <a href="/privacy" className="hover:underline text-gray-700">
              Privacy Policy
            </a>
            <a href="/licensing" className="hover:underline text-gray-700">
              Licensing
            </a>
            <a href="/contact" className="hover:underline text-gray-700">
              Contact
            </a>
          </div>
          {/* Copyright */}
          <div className="text-gray-600">
            <p className="text-sm md:text-base">
              &copy; 2023 Israr Husain <span className="text-gray-500">All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
