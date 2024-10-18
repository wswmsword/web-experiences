import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App propComp={<PropComp />} renderProp={renderProp} />
)

function PropComp() {
  console.log("render PropComp....");
  return <div>prop comp</div>;
}

function renderProp() {
  console.log("render renderProp....");
  return <div>render prop</div>;
}
