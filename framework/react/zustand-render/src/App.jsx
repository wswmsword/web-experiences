import './App.css'
import {create} from "zustand";

function App() {

  return <A />
}

export default App

const useBearStore = create((set) => ({
  bears: 0,
  bears2: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))

function A() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  console.log("render A....");
  return <div style={{ border: "1px solid"}}>
    <button onClick={increasePopulation}>add A</button>
    <div>layer A <B /></div>
  </div>;
}

function B() {
  console.log("render B....");
  return <div style={{border: "1px solid"}}>layer B<C/></div>
}

function C() {
  console.log("render C....");
  const bears = useBearStore(s => s.bears2);
  return <div style={{border: "1px solid"}}>layer C {bears}<D/></div>
}


function D() {
  console.log("render D....");
  const bears = useBearStore(s => s.bears);
  return <div style={{border: "1px solid"}}>layer D {bears}<E /></div>
}

function E() {
  console.log("render E....");
  return <div style={{border: "1px solid"}}>layer E</div>
}
