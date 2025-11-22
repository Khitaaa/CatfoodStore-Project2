import React from 'react';
import { Link } from 'react-router-dom';

//import './style/BookListPage.css'

const BookListPage = () => {
    return(
        <div>
            <h1>Welcome to the BookListPage</h1>
            <p> This is the Book of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/category" >Category</Link>
            {/* <Link to="/category" className="view-all-link"></Link> */}
        </div>
    );
}
export default BookListPage;