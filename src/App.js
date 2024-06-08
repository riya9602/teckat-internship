import logo from './logo.svg';
import './App.css';
function App(){ 
//   // Function to check if two strings are the same
// function areStringsEqual(str1, str2) {
//     return str1 === str2;
// }

// // Example usage
// const string1 = "hello";
// const string2 = "hello";

// // Check if the strings are the same
// if (areStringsEqual(string1, string2)) {
//     console.log("The strings are the same.");
    
//     // Function to add two new variables
//     function addNewVariables() {
//         const a = 5;
//         const b = 10;
//         return a + b;
//     }
    
//     // Call the function and log the result
//     const result = addNewVariables();
//     console.log("The sum of the new variables is: " + result);
// } else {g
//     console.log("The strings are not the same.");
let num= [3,4,2,5,7]
//
// 
for(let i=0;i<num;i++){
  console.log(num[i])
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;