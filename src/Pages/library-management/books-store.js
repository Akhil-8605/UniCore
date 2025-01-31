import { create } from "zustand";
import { persist } from "zustand/middleware";
import sampleImg from "../../Images/computer engg.png"
/**
 * @typedef {Object} Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} category
 * @property {number} publishedYear
 * @property {number} copies
 * @property {number} available
 * @property {string} [coverImage]
 * @property {string} description
 * @property {number} price
 */

/**
 * @typedef {Object} BookStore
 * @property {Book[]} books
 * @property {function(Book): void} addBook
 * @property {function(string, Partial<Book>): void} updateBook
 * @property {function(string): void} deleteBook
 */

export const useBookStore = create()(
  persist(
    (set) => ({
      books: [
        {
          id: "1",
          title: "Data Structures Using C",
          author: "MSBTE",
          category: "Computer Engineering",
          publishedYear: 2018,
          copies: 8,
          available: 5,
          description: "Detailed exploration of data structures and algorithms using the C programming language.",
          price: 450.00,
        },
        {
          id: "2",
          title: "Python Programming",
          author: "MSBTE",
          category: "Computer Engineering",
          publishedYear: 2019,
          copies: 12,
          available: 9,
          description: "A comprehensive guide to Python programming for MSBTE diploma students.",
          price: 599.00,
        },
        {
          id: "3",
          title: "HTML, CSS, and JavaScript",
          author: "MSBTE",
          category: "Computer Engineering",
          publishedYear: 2018,
          copies: 10,
          available: 6,
          description: "An in-depth study of web development techniques using HTML, CSS, and JavaScript.",
          price: 499.00,
        },
      ],

      /**
       * Add a new book to the store
       * @param {Book} book - The book to add
       */
      addBook: (book) =>
        set((state) => ({
          books: [...state.books, book],
        })),

      /**
       * Update an existing book in the store
       * @param {string} id - The ID of the book to update
       * @param {Partial<Book>} updatedBook - The updated book data
       */
      updateBook: (id, updatedBook) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === id ? { ...book, ...updatedBook } : book
          ),
        })),

      /**
       * Delete a book from the store
       * @param {string} id - The ID of the book to delete
       */
      deleteBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
        })),
    }),
    {
      name: "library-storage",
    }
  )
);
