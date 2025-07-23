import Books from "./Books";
function Bookdshelf({books}){
    return(
        <div>
            <h2>From Bookshelf</h2>
            {books.map((book) => (
            <Books key={book.id} book={book} />
        ))}
        </div>
    )
}
export default Bookdshelf;

// props vs state
//hooks not pass
//react fragment
//hooks is nothing but the function, it chenge the state, states update the current state of page
// props use to pass the values from parent to child

