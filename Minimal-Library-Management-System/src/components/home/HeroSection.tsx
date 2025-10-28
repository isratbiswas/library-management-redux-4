
import { motion, type Variants } from 'framer-motion';

// --- 1. TypeScript Interface for Props ---
interface CallToActionWithImageProps {
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaPlaceholder: string;
  ctaButtonText: string;
}

// --- 2. Framer Motion Variants ---
// Animation for Text Content (Staggered fade-up)
const textVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      staggerChildren: 0.15 
    } 
  },
};

const HeroSection: React.FC<CallToActionWithImageProps> = ({
  heading,
  subheading,
  description,
  imageUrl,
  imageAlt,
  ctaPlaceholder,
  ctaButtonText,
}) => {
  return (
   
    <section className="relative py-20  md:py-32">
   
      
  {/* Circle 1 */}
  <div className="circle w-10 h-10 border-[#F5D2D2] top-1/4 left-0" style={{ animationDuration: '25s' }} />

  {/* Circle 2 */}
  <div className="circle w-14 h-14 border-[#F5D2D2] bottom-1/4 left-0" style={{ animationDuration: '30s' }} />

  {/* Circle 3 */}
  <div className="circle w-12 h-12 border-[#F5D2D2] top-1/2 left-0" style={{ animationDuration: '28s' }} />
  <div className="circle w-12 h-12 border-[#F5D2D2] top-1/3 left-0" style={{ animationDuration: '40s' }} />
  <div className="circle w-12 h-12 border-[#F5D2D2] bottom-1/3 left-0" style={{ animationDuration: '35s' }} />

      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* --- Left Content Area (Text and CTA) --- */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            {/* Subheading */}
            <motion.p className="text-lg font-semibold uppercase tracking-widest text-[#E06B80] mb-3" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              {subheading}
            </motion.p>
            
            {/* Main Heading */}
            <motion.h2 className="text-5xl md:text-6xl font-bold leading-tight text-[#415E72] mb-6" variants={textVariants}>
              {heading}
            </motion.h2>

            {/* Description */}
            <motion.p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0" variants={textVariants}>
              {description}
            </motion.p>

            {/* Email Signup Form/CTA */}
            <motion.div className="flex flex-col sm:flex-row  max-w-md mx-auto md:mx-0" variants={textVariants}>
              <input
                type="email"
                placeholder={ctaPlaceholder}
              

                className="flex-grow p-4 bg-white rounded-left-md border outline-none border-gray-300 focus:ring-2 focus:ring-[#E06B80] focus:border-[#E06B80] transition duration-200"
              />
           <button className="relative overflow-hidden text-white bg-[#E06B80] font-bold py-4 px-8 rounded-right-md  transition duration-300 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#8D5F8C] before:z-0 before:transition-all before:duration-300 hover:before:left-0">
  <span className="relative z-10">{ctaButtonText}</span>
</button>

            </motion.div>
          </motion.div>

          {/* --- Right Image Area (Overlapping Book Effect) --- */}
     
            
     
        <div className="md:w-1/2 flex justify-center md:justify-end relative min-h-[350px] md:min-h-[500px]">
              <img
              src={imageUrl}
              alt={imageAlt}
              className="absolute w-72 h-auto object-contain rounded-lg shadow-2xl z-20 top-0 md:top-auto md:bottom-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0"
              style={{ width: 'clamp(280px, 60vw, 400px)', transformOrigin: 'bottom' }} 
            />
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;