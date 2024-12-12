import {useEffect, useState} from 'react'
import './App.css'

function App() {
  return <>
    <LoadTransition />
    <BlockTransition />
  </>
}

export default App
// 装载 > tick > opacity: 0; transition: opacity: .3s > tick > opacity: 1
// opacity: 1 > opacity: 0 > transition end > 卸载

function LoadTransition() {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const t = show ? "show" : "";
  useEffect(() => {
    if (load) {
      setShow(true);
    }
  }, [load]);

  return (
    <>
      <button onClick={() => {
        if (load === false) {
          setLoad(true);
        } else {
          setShow(false)
        }
      }}>切换（load 类型）</button>
      {load && <div className={`tBox ${t}`} onTransitionEnd={e}></div>}
    </>
  )

  function e() {
    if (show === false) {
      setLoad(false);
    }
  }
}

function BlockTransition() {
  const [show, setShow] = useState(false);
  const [block, setBlock] = useState(false);

  const b = block ? "block" : "";
  const t = show ? "show" : "";
  useEffect(() => {
    if (block) {
      setShow(true);
    }
  }, [block]);

  return (
    <>
      <button onClick={() => {
        if (block === false) {
          setBlock(true);
        } else {
          setShow(false)
        }
      }}>切换（block 类型）</button>
      <div className={`tBox2 ${b} ${t}`} onTransitionEnd={e}></div>
    </>
  )

  function e() {
    if (show === false) {
      setBlock(false);
    }
  }
}
