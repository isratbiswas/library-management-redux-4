
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const FooterContact = () => {
    return (
        <div className='container mx-auto mt-10 '>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 mt-6 ml-4">
              <div className="flex mt-6 ">
               <FaPhoneVolume className="text-3xl text-[#FFA4A4]"/>
                   <div className="">
                       <h3 className="text-lg font-semibold ml-4">Call Us 7/24</h3>
                       <h2 className="text-2xl font-semibold">+208-555-0112</h2>
                   </div>
               </div>
            <div className="flex mt-6 ">
               <MdMarkEmailUnread  className="text-3xl text-[#FFA4A4]"/>
                <div className="">
                      <h3 className="text-lg font-semibold">Make a Quote</h3>
                      <h2 className="text-2xl font-semibold">example@gmail.com</h2>
                </div>
            </div>
            <div className="flex mt-6 ">
               <GoLocation  className="text-3xl text-[#FFA4A4]"/>
                 <div className="">
                     <h3 className="text-lg font-semibold">Location</h3>
                     <h2 className="text-2xl font-semibold">1206 Dhaka , Bangladesh</h2>
                 </div> 
            </div>
          </div>
    
        </div>
    );
};

export default FooterContact;