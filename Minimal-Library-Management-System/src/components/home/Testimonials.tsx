
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    review:
      "BookNest changed the way I read. I love the easy access to thousands of books!",
  },
  {
    name: "David R.",
    review:
      "Modern design, smooth animations, and great book suggestions — amazing!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="px-8 md:px-20 py-20 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        What Our <span className="text-[#E06B80]">Readers</span> Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-md"
          >
            <p className="text-gray-600 mb-4">“{t.review}”</p>
            <h4 className="font-semibold text-[#E06B80]">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
