// src/Books.js
const Books = () => {
  // ตัวอย่างข้อมูลหนังสือ (จริงๆ อาจมาจาก API หรือฐานข้อมูล)
  const bookList = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ];

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {bookList.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
