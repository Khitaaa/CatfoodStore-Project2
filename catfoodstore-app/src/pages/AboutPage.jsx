import React from 'react';
import { Link } from 'react-router-dom';

//import './style/BookDetailPage.css'

const AboutPage = () => {
    return(
        <div>
            <h1>About</h1>
            <p> This is the Book of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/About" >About</Link>
            <Link to="/About" className="view-all-link"></Link>
        </div>
    );
}
export default AboutPage;