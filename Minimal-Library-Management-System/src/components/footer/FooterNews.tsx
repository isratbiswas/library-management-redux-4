
import { BsFillSendDashFill } from "react-icons/bs";
const FooterNews = () => {
    return (
        <div>
             <div className="mt-6">
                 <h2 className="text-xl text-[#F08787] font-semibold ml-2">Newsletter</h2>
                     <p className="text-lg text-gray-500 font-semibold mt-13 mb-10 me-2 ml-2">Sign up to searing weekly newsletter to get the latest updates.</p>
                     <div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" className="text-lg font-semibold" placeholder="Enter Email Address" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn bg-[#FFA4A4]  join-item mb-10">
           <BsFillSendDashFill />
  </button>
</div>
                      
             </div>
        </div>
    );
};

export default FooterNews;