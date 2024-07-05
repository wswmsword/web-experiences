import {useEffect, useState} from 'react'
import './App.css'

function App() {
  return (
    <>
      {/* <CompNeedRenderProp renderProps={renderPropsWithoutHook} />*/}
      {/* <CompNeedRenderPropChildren>{renderPropsWithoutHook}</CompNeedRenderPropChildren>*/}
      {/* <CompNeedRenderProp renderProps={renderPropsWithHook} />*/}
      {/* <CompNeedRenderPropChildren>{renderPropsWithHook}</CompNeedRenderPropChildren> */}
    </>
  )
}

function T() {
  return renderPropsWithHook();
}

function renderPropsWithoutHook() {
  return <C />;
}

function C() {
  const [a, setA] = useState(0);
  useEffect(() => {
    console.log('cc....');
  }, []);
  return <>{a}<button onClick={() => setA(a => a + 1)}>Comp C added {a}</button></>;
}

export default App

function renderPropsWithHook() {
  const [a, setA] = useState(0);
  useEffect(() => {
    console.log('effect of render props')
  }, []);
  const add = () => {
    setA(v => v + 1);
  }
  return <>
    123{a}
    <br />
    <button onClick={add}>add</button>
  </>;
}

function CompNeedRenderProp({ renderProps }) {
  const [a, setA] = useState(0);
  return <>{a > 3 && renderProps()}<button onClick={() => setA(a => a + 1)}>added {a}</button></>;
}


function CompNeedRenderPropChildren({ children }) {
  const [a, setA] = useState(0);
  return <>{a > 3 && children()}<button onClick={() => setA(a => a + 1)}>added {a}</button></>;
}