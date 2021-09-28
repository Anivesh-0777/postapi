import React from 'react'
import { Component } from 'react';
import { useState } from 'react';
import Http from "./components/Http";
import axios from "axios";


const App = (props) => {
  // const fetchpost =() =>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then(response=>response.data)

  // }

  const [Data,setData]= useState(null)
  const [Numb ,setNums]=useState("")
  function getnums(v){
    console.log(v.target.value)
    setNums(v.target.value)
  }
  
  function getdata(vat){
    let vara=vat.target.value;
    // console.log(vara)
    
  
    
    setData(vara)
    // console.log(vara)
  }
  let dtu ={Data,Numb}
  
const fetchpostdata = () =>{
  console.log(dtu,"dtu")
  axios.post("https://jsonplaceholder.typicode.com/posts",{dtu})
    .then(response=>response.data)
}

  
  return (
    <div>
      
      {/* <button onClick={fetchpost}>fetchpost</button> */}
      <br />
      <br />
      <br />

      <input type="text" onChange={getdata} ></input>
      <br />

      <input type="number" onChange={getnums} ></input>
      <textarea/>
      <button onClick={fetchpostdata}>toApi</button>


      {/* <input type="text" onChange={getdata()}> </input> */}
      <h4> {Data} </h4>
      
    </div>
  )
}

export default App
