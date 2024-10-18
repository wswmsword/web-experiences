import {createContext, memo, useContext, useState} from 'react'
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

/** 中间层 B */
function B() {
  console.log("render B....");
  return <div>B...<C /></div>
}

function C() {
  const Context_ = useContext(Context);
  console.log("render C....");
  return <>C Comp, Context Value: {Context_}</>;
}

export default App
