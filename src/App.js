import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Table from './components/Table';
import API from "./utils/API";

function App() {
  const [search, setSearch] = useState("");
  const [employee, setEmployee] = useState("");

  useEffect(() =>{
    API.getRandomEmployees()
    .then(res => {
      console.log(res.data)
      setEmployee(res.data.results);
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
      <Table employee={employee}/>
    </div>

  );
}

export default App;
