import { useEffect, useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState("hello");

useEffect(() => {
  setData("World");
},[]);

  return (
    <>
      <div>{data}</div>
    </>
  );
}

  export default App;