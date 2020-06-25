import React, { useState } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar'

function App() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search);
  };

  return (
    
    <div>
      <Header />
      <Searchbar handleSubmit={handleSubmit} setSearch={setSearch}/>
    </div>

  );
}

export default App;
