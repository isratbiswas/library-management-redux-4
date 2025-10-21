import { FaFacebookF } from "react-icons/fa";
import { FaHeart, FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import FooterNews from "./FooterNews";
import { IoIosArrowForward } from "react-icons/io";


const FooterSummary = () => {
    return (
        <div className='container mx-auto  mb-6'>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-12 ml-4">
                <div className="text-left">
                       <div className="flex gap-1 ">
                         <img className="w-20 rounded-full bg-red-500" src="https://i.pinimg.com/736x/73/f6/3e/73f63efb6c8b1bbbbd84f1cde7a69c72.jpg" alt=""/>
                         <h1 className="text-3xl mt-4 font-extrabold text-[#415E72] font-[Montserrat] leading-[3.1rem]">
                              BookNest
                        </h1>
                       </div>
                     <p className="text-gray-600 font-base mt-4">Welcome to BookNest – your digital haven for stories, knowledge, and imagination. Whether you're searching for timeless classics, the latest bestsellers, or hidden literary gems, our library offers something for every kind of reader. Discover, borrow, or dive into books that spark curiosity and fuel your love for reading—all in one place.</p>
                     <div className="flex mb-10 mt-4 text-2xl text-white  gap-6">
                        
                        <div className="px-4 py-2 bg-[#FFA4A4] ">
                          <FaFacebookF  />
                        </div>

                        <div className="px-4 py-2 bg-[#FFA4A4] ">
                            <FaTwitter   />
                        </div>
                        <div className="px-4 py-2 bg-[#FFA4A4] ">
                          <FaYoutube   />
                        </div>
             <div className="relative w-12 h-12">
  {/* Bottom layer */}
  <div className="absolute inset-0 bg-[#8D5F8C] rounded-md"></div>

  {/* Top layer */}
  <div className="relative w-full h-full bg-[#FFA4A4] rounded-md
                  transition-all duration-300 ease-in-out
                  hover:translate-y-[-4px] hover:bg-transparent">
    <FaLinkedinIn className="text-white text-lg absolute inset-0 m-auto" />
  </div>
</div>  

 <div className="relative w-10 h-10 m-1">
      {/* Bottom layer */}
      <div className="absolute inset-1 bg-[#8D5F8C] rounded-md"></div>

      {/* Top layer */}
      <div className="relative w-full h-full bg-[#FFA4A4] rounded-md
                      transition-all duration-300 ease-in-out
                      hover:bg-transparent">
        <FaLinkedinIn className="text-white text-lg absolute inset-0 m-auto" />
      </div>
    </div>
                        
                     </div>
                   
                </div>
                <div className="text-left ml-4 mt-6">
                     <h2 className="text-xl text-[#F08787] font-semibold mb-2">Customers Support</h2>
                       <ul className="text-xl font-semibold mt-16">
                           <li className="flex mb-4">
                            <IoIosArrowForward className="mt-1" />
                            <Link to='/allBooks'>All Books</Link>
                           </li>
                           <li className="flex mb-4">
                             <IoIosArrowForward className="mt-1"  />
                            <Link to='/addBook'>Add Books</Link>
                           </li>
                            <li className="flex"> 
                             <IoIosArrowForward className="mt-1" />
                              <Link to='/borrowBook'> Borrow Summary</Link>
                            </li>
                       </ul>
                </div>
                <div className=" text-left">
                      <FooterNews/>
                </div>
            </div>
              <div className="text-gray-700 m-4   text-md font-semibold"> 
                      <h3 className="mb-4 flex justify-center gap-2 ">© 2025 BOOKNEST. All rights reserved. Made with by <span className="mt-1.5 text-m "> <FaHeart className="heart"  /></span> Israt Jahan</h3>
                     </div>
        </div>
    );
};

export default FooterSummary;