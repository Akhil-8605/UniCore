import { useState } from 'react';
import { Search, Plus, SlidersHorizontal, Edit2, Trash2, BookOpen, X, Check } from 'lucide-react';
import { useBookStore } from './books-store';
import './LibraryPage.css';
import AdminPortalLayout from '../../Admin/AdminPortalLayout';

export default function AdminLibrary() {
  const { books, addBook, updateBook, deleteBook } = useBookStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    publishedYear: new Date().getFullYear(),
    copies: 1,
    available: 1,
    description: '',
    price: 0,
  });

  const categories = Array.from(new Set(books.map(book => book.category)));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      updateBook(editingBook.id, formData);
    } else {
      addBook({
        ...formData,
        id: Date.now().toString(),
      });
    }
    setShowForm(false);
    setEditingBook(null);
    setFormData({
      title: '',
      author: '',
      category: '',
      publishedYear: new Date().getFullYear(),
      copies: 1,
      available: 1,
      description: '',
      price: 0,
    });
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setFormData(book);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(id);
    }
  };

  const filteredAndSortedBooks = books
    .filter(book => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const compareValue = sortOrder === 'asc' ? 1 : -1;
      if (typeof a[sortField] === 'string') {
        return a[sortField].localeCompare(b[sortField]) * compareValue;
      }
      return (a[sortField] - b[sortField]) * compareValue;
    });

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <AdminPortalLayout/>
      <div className="library-page" id='student-portal-library-page'>
        <div className="library-page-library-container">
          <div className="library-page-library-header">
            <div className="library-page-header-content">
              <h1 className="library-page-text-[#007bff]">Library Management - Admin Panel</h1>
              <p>Manage and organize the university library collection</p>
            </div>
            <button className="library-page-btn-primary" onClick={() => setShowForm(true)}>
              <Plus size={18} />
              Add New Book
            </button>
          </div>

          <div className="library-page-library-controls">
            <div className="library-page-search-bar">
              <Search size={18} className="library-page-search-icon" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              className={`library-page-btn-filter ${showFilters ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} />
              Filters & Sort
            </button>
          </div>

          {showFilters && (
            <div className="library-page-filter-section">
              <div className="library-page-filter-group">
                <label>Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="library-page-filter-group">
                <label>Sort by:</label>
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value)}
                >
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="category">Category</option>
                  <option value="available">Availability</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>
          )}

          <div className="library-page-books-grid">
            {filteredAndSortedBooks.map(book => (
              <div key={book.id} className="library-page-book-card library-page-admin-card">
                <div className="library-page-book-cover">
                  {book.coverImage ? (
                    <img src={book.coverImage} alt={book.title} />
                  ) : (
                    <div className="library-page-book-cover-placeholder">
                      <BookOpen size={32} />
                    </div>
                  )}
                  <div className="library-page-book-actions-overlay">
                    <button onClick={() => handleEdit(book)} className="library-page-btn-icon" title="Edit book">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="library-page-btn-icon delete"
                      title="Delete book"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="library-page-book-info">
                  <div className="library-page-book-header">
                    <h3>{book.title}</h3>
                    <span className="library-page-book-price">₹{book.price.toFixed(2)}</span>
                  </div>
                  <p className="library-page-book-author">by {book.author}</p>
                  <div className="library-page-book-meta">
                    <span className="library-page-book-category">{book.category}</span>
                    <span className="library-page-book-year">{book.publishedYear}</span>
                  </div>
                  <div className="library-page-book-availability">
                    <span
                      className={`library-page-status ${book.available > 0 ? 'available' : 'unavailable'}`}
                    >
                      {book.available > 0 ? <Check size={14} /> : <X size={14} />}
                      {book.available} of {book.copies} available
                    </span>
                  </div>
                  <p className="library-page-book-description">{book.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedBooks.length === 0 && (
            <div className="library-page-no-results">
              <BookOpen size={48} />
              <p>No books found matching your search criteria.</p>
            </div>
          )}

          {showForm && (
            <div className="library-page-modal-overlay" onClick={() => setShowForm(false)}>
              <div className="library-page-modal admin-modal" onClick={(e) => e.stopPropagation()}>
                <div className="library-page-modal-header">
                  <h2>{editingBook ? 'Edit Book' : 'Add New Book'}</h2>
                  <button className="library-page-btn-close" onClick={() => setShowForm(false)}>
                    <X size={20} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="library-page-book-form">
                  <div className="library-page-form-grid">
                    <div className="library-page-form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="author">Author</label>
                      <input
                        type="text"
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        required
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="category">Category</label>
                      <input
                        type="text"
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="publishedYear">Published Year</label>
                      <input
                        type="number"
                        id="publishedYear"
                        value={formData.publishedYear}
                        onChange={(e) => setFormData({ ...formData, publishedYear: parseInt(e.target.value) })}
                        required
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="copies">Total Copies</label>
                      <input
                        type="number"
                        id="copies"
                        value={formData.copies}
                        onChange={(e) => setFormData({ ...formData, copies: parseInt(e.target.value) })}
                        required
                        min="1"
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="available">Available Copies</label>
                      <input
                        type="number"
                        id="available"
                        value={formData.available}
                        onChange={(e) => setFormData({ ...formData, available: parseInt(e.target.value) })}
                        required
                        min="0"
                      />
                    </div>

                    <div className="library-page-form-group">
                      <label htmlFor="price">Price (₹)</label>
                      <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                        required
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <div className="library-page-form-group full-width">
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="library-page-form-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="library-page-btn-primary">
                      {editingBook ? 'Update Book' : 'Add Book'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}