import {createContext, memo, useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Context = createContext(0);

function App({propComp, renderProp}) {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*<A />*/}
      <MA />
      <B />
      {propComp}
      {renderProp()}
    </Context.Provider>
  )
}

const MA = memo(A);


function A() {
  console.log("render A....");
  return <div>A Comp</div>;
}

function B() {
  const Context_ = useContext(Context);
  console.log("render B....");
  return <>B Comp, Context Value: {Context_}</>;
}

export default App
