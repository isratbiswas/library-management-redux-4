import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
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
                       <div className="flex">
                         <img className="w-20 rounded-lg bg-red-500" src="https://i.pinimg.com/736x/73/f6/3e/73f63efb6c8b1bbbbd84f1cde7a69c72.jpg" alt=""/>
                          <h2 className="text-3xl mt-2 ml-2 text-[#4DA8DA] font-bold">BookNest</h2> 
                       </div>
                     <p className="text-gray-600 font-base mt-4">Welcome to BookNest – your digital haven for stories, knowledge, and imagination. Whether you're searching for timeless classics, the latest bestsellers, or hidden literary gems, our library offers something for every kind of reader. Discover, borrow, or dive into books that spark curiosity and fuel your love for reading—all in one place.</p>
                     <div className="flex mb-10 mt-4 text-3xl text-[#4DA8DA] gap-6">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <FaLinkedinIn />
                     </div>
                   
                </div>
                <div className="text-left ml-4">
                     <h2 className="text-xl font-bold mb-2">Customers Support</h2>
                       <ul className="text-xl font-semibold mt-16">
                           <li className="flex mb-4">
                            <IoIosArrowForward className="mt-1" />
                            <Link to='/'>All Books</Link>
                           </li>
                           <li className="flex mb-4">
                             <IoIosArrowForward className="mt-1"  />
                            <Link to='/'>Add Books</Link>
                           </li>
                            <li className="flex"> 
                             <IoIosArrowForward className="mt-1" />
                              <Link to='/'> Borrow Summary</Link>
                            </li>
                       </ul>
                </div>
                <div className=" text-left">
                      <FooterNews/>
                </div>
            </div>
              <div className="text-center text-gray-800 m-4  text-lg font-semibold"> 
                      <p className="mb-4">© 2025 BOOKNEST. All rights reserved.</p>
                     </div>
        </div>
    );
};

export default FooterSummary;