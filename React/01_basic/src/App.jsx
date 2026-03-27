// Import another component from Study.jsx file
import StudyComponents from "./Study";
function App() {
  // Declare variables
  const a = 20;
  const b = 30;
  const c = a + b;
  return (
    <>
      {/* Fragment(<>): used to wrap multiple elements without adding extra div */}
      <h1>React Learning</h1>
       {/* Display value of variable 'a'  {a} --> this is a evulation expression*/}
      <div>value of A = {a}</div>
      {/* Display value of variable 'b' */}
      value of B = {b}
      {/* Passing data (c) to another component using props */}
      <StudyComponents data={c} />
    </>
  );
}
export default App;

// Components should always start with a CAPITAL letter
// Use {} to display JavaScript variables inside JSX
// Props are used to pass data from one component to another
