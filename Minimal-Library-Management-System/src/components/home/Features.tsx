import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-[#E06B80]" />,
    title: "Vast Collection",
    desc: "Access thousands of books across genres and languages.",
  },
  {
    icon: <Globe className="w-10 h-10 text-[#E06B80]" />,
    title: "Read Anywhere",
    desc: "Online access from mobile, tablet, or desktop anytime.",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#E06B80]" />,
    title: "Save Time",
    desc: "Bookmark your reads and pick up right where you left off.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="px-8 md:px-20 py-16 text-center ">
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
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
