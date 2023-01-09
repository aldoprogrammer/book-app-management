import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import BookForm from './form/BookForm'

const EditBook = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { books, setBooks } = useContext(BookContext);
    const bookToEdit = books.filter(book => book.id === id);

    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        navigate('/');
    }

  return (
    <div className='addForm'>
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditBook