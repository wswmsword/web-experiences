import './App.css'
import {signal, useSignal, computed} from "@preact/signals-react";

const count = signal(0);
const count2 = signal(2);
const count3 = signal({ c: 0 });
const count4 = computed(() => count3.value.c);

function App() {

  return <A />
}

export default App

function A() {
  console.log("render A....");
  const increment = () => {
    // 通过赋值 `.value` 属性更新信号
    count.value++;
    count3.value = { c: 1 };
    // console.log(count4.value)
  }
  return <div style={{ border: "1px solid"}}>
    <button onClick={increment}>add A</button>
    <div>layer A <B /></div>
  </div>;
}

function B() {
  console.log("render B....");
  return <div style={{border: "1px solid"}}>layer B<C/></div>
}

function C() {
  console.log("render C....");
  return <div style={{border: "1px solid"}}>layer C {count2}<D/></div>
}


function D() {
  console.log("render D....");
  // const count = useSignal(0);

  return <div style={{border: "1px solid"}}>
    layer D {count}
    {count4}
    {/*<button onClick={() => count.value ++}> add ,..</button>*/}
    {/*{count.value === 3 ? "3" : "other"}*/}
    <E />
  </div>
}

function E() {
  console.log("render E....");
  return <div style={{border: "1px solid"}}>layer E</div>
}
