import BookGridView from "@/components/books/BookGridView";
import BookListView from "@/components/books/BookListView";
import Loader from "@/components/loader/Loader";
import { cn } from "@/lib/utils";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import {
  Filter,
  LayoutGrid,
  List as ListIcon,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";


const BooksPage = () => {
  const {
    data: booksData,
    isLoading,
    error,
  } = useGetBooksQuery({ limit: 1000 });

  // View states
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [showStats, setShowStats] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const books = booksData?.data || [];

  // Filter books based on search and genre
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm);
    const matchesGenre = filterGenre === "" || book.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  // Pagination logic
  const totalItems = filteredBooks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

  // Reset to first page when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterGenre]);

  // Get unique genres for filter
  const genres = [...new Set(books.map((book) => book.genre))];

  if (isLoading) {
    return <Loader/> ;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Error Loading Books
          </h2>
          <p className="text-gray-600">
            An error occurred while loading the books. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-24">
    

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-md  p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={filterGenre}
                onChange={(e) => setFilterGenre(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                <option value="">All Genres</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* View Toggle and Stats Toggle */}
          <div className="flex items-center space-x-3">
            {/* Stats Toggle */}
            {/* <button
              onClick={() => setShowStats(!showStats)}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">
                {showStats ? "Hide" : "Show"} Stats
              </span>
            </button> */}

            {/* View Toggle */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all duration-200",
                  viewMode === "grid"
                    ? "bg-gradient-to-r from-yellow-500 to-sky-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600"
                    : "!bg-gray-300 text-gray-600 hover:bg-gray-200"
                )}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "px-3 py-1.5 rounded-md transition-all duration-200",
                  viewMode === "list"
                    ? "bg-gradient-to-r from-yellow-500 to-sky-500 text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-yellow-600"
                    : "!bg-gray-300 text-gray-600 hover:bg-gray-200"
                )}
              >
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Books View */}
      {viewMode === "list" ? (
        <BookListView books={currentBooks} />
      ) : (
        <BookGridView books={currentBooks} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Items per page selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value={6}>6 per page</option>
              <option value={12}>12 per page</option>
              <option value={24}>24 per page</option>
              <option value={48}>48 per page</option>
            </select>
          </div>

          {/* Page info */}
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
            {totalItems} books
          </div>

          {/* Page navigation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 bg-gradient-to-r from-sky-500 to-yellow-500 text-white"
            >
              Previous
            </button>

            {/* Page numbers */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 min-w-[40px] ${
                      currentPage === pageNum
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                        : "text-gray-600 hover:text-gray-900 !bg-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;