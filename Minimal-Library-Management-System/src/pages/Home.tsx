
import Loader from "@/components/loader/Loader";
import  { Suspense, lazy } from "react";



const HeroSection = lazy(() => import("@/components/home/HeroSection"));
const BookShowcase = lazy(() => import( "@/components/home/BookShowcase"));
const Features= lazy(() =>import("@/components/home/Features"))
const Testimonials = lazy(() => import("@/components/home/Testimonials"))



const Home = () => {
    return (
         <Suspense fallback={ <Loader/>} >
         <HeroSection
          subheading="LET'S MAKE THE BEST INVESTMENT"
          heading="There Is No Friend As Loyal As A Book"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum quibusdam, assumenda quia explicabo. Discover our vast collection."
          imageUrl="https://i.pinimg.com/736x/73/de/6b/73de6b5521f2168074d085678daf20c5.jpg" // **⚠️ UPDATE THIS PATH** imageAlt="A hand holding a library book titled 'Things I Never Said'"
          ctaPlaceholder="your email"
           imageAlt= "hero-img"

          ctaButtonText="Subscribe"
        />
    
        <Features/>
        <BookShowcase/>
        <Testimonials/>


        </Suspense>
    );
};

export default Home;