// src/App.jsx
import { useState } from "react";

const Bookshelf = () => {
    
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" }
  ])

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  })

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
   setNewBook({ ...newBook,[event.target.name]: event.target.value })
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()
     setBooks([...books, newBook]);
     setNewBook({ title: "", author: "" })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Title:{" "}
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Author:{" "}
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <em><h2>BookShelf</h2></em>
        {books.map((book, index) => (
            <div key={index} className="bookCard">
            <p> Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf


