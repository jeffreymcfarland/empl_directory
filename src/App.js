import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import API from "./utils/API";

function App() {
  const [search, setSearch] = useState("");

  useEffect(() =>{
    API.getRandomEmployees()
    .then(res => {
      console.log(res.data);
    });
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    searchEmployees();
    console.log(search);
  };

  const searchEmployees = () => {
    
  }

  return (
    
    <div>
      <Header />
      <Searchbar handleSubmit={handleSubmit} setSearch={setSearch}/>
    </div>

  );
}

export default App;
