
import { motion } from "framer-motion";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    img: "https://i.pinimg.com/1200x/64/db/0f/64db0f6e48b0c3d797febf4762a4b0a2.jpg",
  },
];

const BookShowcase: React.FC = () => {
  return (
    <section className="px-8 md:px-20 py-20  text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Trending <span className="text-[#E06B80]">Books</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {books.map((book, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={book.img}
              alt={book.title}
              className="h-80 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-xl">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BookShowcase;
