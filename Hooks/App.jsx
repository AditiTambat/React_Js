import Library from "./Library";
function App(){
  
  const [color, setcolor] =useState("green");
   function changeColor(){
     setcolor("pink");
   }

   let [count, setcount] = useState(0);
   
    function increment(){
     setcount(++count);
    }

   function decrement(){
    setcount(count--);
   }

   function reset(){
    setcount(useState(0));
   }

    return(
      <>
        <h1 style={{color:color}}>this is  blue</h1>
       <button onClick={changeColor}>click to change in yellow</button>
       <h2>{count}</h2>
       <button onClick={increment}>Increament</button>
       <button onClick={decrement}>Decreament</button>
       <button onClick={reset}>Reset</button>

      </>
    )
}

export default App;