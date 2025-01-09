import { create } from "zustand";
import { persist } from "zustand/middleware";

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
          title: "The Design of Everyday Things",
          author: "Don Norman",
          category: "Design",
          publishedYear: 2013,
          copies: 5,
          available: 3,
          description:
            "A powerful primer on how good design can help us understand and improve the world around us.",
          price: 29.99,
        },
        {
          id: "2",
          title: "Clean Code",
          author: "Robert C. Martin",
          category: "Programming",
          publishedYear: 2008,
          copies: 3,
          available: 1,
          description: "A handbook of agile software craftsmanship.",
          price: 34.99,
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
