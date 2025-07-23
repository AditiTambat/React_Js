import Bookdshelf from "./Bookshelf";
function Library({books}){
    return(
        <div>
            <h2>From Library</h2>
            <Bookdshelf books = {books}></Bookdshelf>
        </div>
    )
}

export default Library;