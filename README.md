📚library-management-redux-4

A modern responsive library management system built with React, TypeScript and Vite. This Applications provides a 
comprehensive solution for managing books, tracking borrowings and maintaining library statistics.

🌐Live Deme
 Frontend Application: 

🌟 Features
 
📖 Book Management 
    <ul>
     <li>Add New Books : Create book entries with detailed information</li>
     <li>Edit Books : Update book details including title, author, genre, ISBN and Copies</li>
     <li>Delete Books : Remove Books from the library with confirmation</li>
     <li>Book Search: Search books by title , author or ISBN</li>
     <li> Genre Filtering : Filter books by genre(Fiction, Non-Fiction, History, Biography, Fantasy)</li>
     <li>Pagination : Navigate through large book collections efficiently</li>

     Borrow System

Borrow form with quantity + due date validation

Prevent borrowing more than available copies

Updates borrow summary instantly

Borrow Summary

Aggregated list of borrowed books (Title, ISBN, Total Quantity)

UI/UX

Minimal, responsive design with Tailwind CSS

Optimistic UI updates

Toast notifications for success/error

Type-safe forms with React Hook Form + Zod

📂 Project Structure
📦 library-management-system
┣ 📂 src
┃ ┣ 📂 app # Redux store setup
┃ ┣ 📂 components # Reusable UI components (Navbar, Footer, etc.)
┃ ┣ 📂 features # RTK Query slices (booksApi, borrowsApi)
┃ ┣ 📂 pages # Pages (Books, CreateBook, EditBook, Borrow, BorrowSummary)
┃ ┣ 📂 types # TypeScript types (Book, Borrow)
┃ ┣ App.tsx # Route configuration
┃ ┗ main.tsx # App entry point
┣ 📜 tailwind.config.js
┣ 📜 tsconfig.json
┣ 📜 package.json
┣ 📜 README.md


🔧 Installation & Setup

Clone the repository

git clone https://github.com/your-username/library-management-system.git
cd library-management-system

Install dependencies

npm install

Setup environment variables Create a .env file in the project root:

VITE_API_BASE_URL=http://localhost:5000/api

Run the development server

npm run dev

Open http://localhost:5173 in your browser.

🖥️ Available Pages

/books → List of books with actions (Edit, Delete, Borrow)

/create-book → Add a new book

/books/:id → View book details

/edit-book/:id → Edit book info

/borrow/:bookId → Borrow a book

/borrow-summary → Aggregated borrow summary

🛠️ Tech Stack

Frontend: React, TypeScript, Redux Toolkit Query, Tailwind CSS, React Hook Form, Zod

Backend (Required): Node.js, Express.js, MongoDB (modular MVC pattern)

📦 API Endpoints (Expected Backend)
Books

GET /books → Get all books (with pagination)

POST /books → Create a new book

GET /books/:id → Get book by ID

PATCH /books/:id → Update a book

DELETE /books/:id → Delete a book

Borrow

POST /borrows → Borrow a book

GET /borrows/summary → Get borrow summary (aggregated)
 

