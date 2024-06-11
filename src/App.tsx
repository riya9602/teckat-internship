import { useEffect, useState} from "react";
import './App.css';

function App() {
  const [data, setData] = useState<Number>(0);
const[NumberData,setNumberData] = useState<Number>(0);
useEffect(() => {
  addData();
},[NumberData]);
  

const addData=()=>{
 const oldData = data;
 const newData=oldData + 1;
setData(newData);
console.log(newData);
};

const decrementData=()=>{
  setNumberData(NumberData-1);
};
  return (
    <>
    <button title="title" onClick={addData}>add Data</button>
      <div>Incremented data: {data}</div>
      <br />
      <button onClick={decrementData}>decrement</button>
      <div>decrement data:{NumberData}</div>
    </>
  );
}

  export default App;