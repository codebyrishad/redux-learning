import { useState } from "react";
import Counter from "./components/counter";


function App() {
  const [count, setcount] = useState(0);
  return (
    <>
     <Counter count={count} setcount={setcount}  />
     <Counter count={count} setcount={setcount}/>
     <Counter count={count} setcount={setcount}/>
    </>
  );
}

export default App;
