import './App.css'
import { add, divide as div, mult, sub } from './utils/math/math'

function App() {
  const sum = add(2,3);
  const subtraction = sub(10,3);
  const goonFol = mult(2,3);
  const something = div(6,2);
  console.log(sum,subtraction, goonFol, something);
  
  
  return (
    <>
      
    </>
  )
}

export default App
