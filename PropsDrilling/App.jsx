import Library from "./Library";
function App(){
  
    const books = [
      { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
      { id: 2, title: "1984", author: "George Orwell" }
    ];
    return(
      <div>
        <h1>Books manager</h1>
        <Library books={books}></Library>

      </div>
    );

  }

export default App;