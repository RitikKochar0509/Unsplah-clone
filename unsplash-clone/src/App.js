
import { useState,useEffect } from 'react';
import './App.css';
import React from 'react';
function App() {
  const [value,setValue] = useState("")
  const [Results,setResults] = useState([])

  React.useEffect ( () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=xmu_P08mFBzpIzWY6VZGiyRGYoHkHM1QMCMI5lxOpJU&query=car&orientation=squarish&per_page=9`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results)
    })

    
  },[])
  
  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=xmu_P08mFBzpIzWY6VZGiyRGYoHkHM1QMCMI5lxOpJU&query=${value}&orientation=squarish&per_page=9`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results)
    })

    
  }
  return (
    <div className="App">
    
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href='#' style={{"color":"white"}}>Kochar Gallery</a>
    <div className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search"  value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button className="btn btn-outline-success"  onClick={()=>fetchImages()}>Search</button>
    </div>
    
  </div>
</nav>

<div className="gallery">
  
  {
    
    Results.map((item)=>{
      return <img className='item' key = {item.id} src = {item.urls.small}/>
    })
  }
</div>




</div>

     
    
  );
}

export default App;
