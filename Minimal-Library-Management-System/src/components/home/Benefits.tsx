import React from 'react';

const Benefits = () => {
    return (
        <div>
            <div className="inline-block text-center">
                 <h3 className='text-[#E06B80] text-md font-bold leading-[2rem] [word-spacing:2px] [letter-spacing:3px]'>WHY BOOKNEST?</h3>
             <h2 className='text-[#415E72] text-3xl font-bold mt-2'>What you'll achieve by BookNest</h2>
            <div className="relative mt-6 w-40 mx-auto h-[2px] bg-[#E06B80]">
                <div className="relative mt-3 w-40 mx-auto h-[2px] bg-[#E06B80]">
                   <div className="absolute left-1/2 -translate-x-1/2 -top-[5px] flex items-center gap-[2px]">
      {/* Diamond 1 */}
                        <div className="w-3 h-3 bg-[#FFBDBD] rotate-45"></div>
      {/* Diamond 2 */}
                            <div className="w-3 h-3 bg-[#FFBDBD] rotate-45"></div>
                       </div>
                </div>
         </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className="">
                    <img src='' alt=''/>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-1">
                    <div className="">
                         <h2>Experience</h2>
                    </div>
                    <div className="">
                        <h3>Motivation</h3>
                    </div>
                    <div className="">
                        <h3>Goals</h3>
                    </div>
                    <div className="">
                        <h3>Vision</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;