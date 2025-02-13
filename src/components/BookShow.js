import { useState } from "react";
import BookEdit from "./BookEdit";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

// function BookShow({ book, onDelete, onEdit }) {
function BookShow({ book }) {
    // const { deleteBookById } = useContext(BooksContext);
    const { deleteBookById } = useBooksContext();

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        // onDelete(book.id);
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        // onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            <img
                alt="books"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
