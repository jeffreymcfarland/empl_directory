import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Table from './components/Table';
import API from "./utils/API";
import moment from 'moment';

function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [ogUser, setOGUser] = useState([]);

  useEffect(() =>{
    API.getRandomEmployees()
    .then(res => {

      let userArr = [];

      for(let i=0; i < res.data.results.length; i++) {

        let userObj = {
          image: "",
          name: "",
          phone: "",
          email: "",
          dob: ""
        };

        userObj.image = res.data.results[i].picture.thumbnail;
        userObj.name = `${res.data.results[i].name.first} ${res.data.results[i].name.last}`;
        userObj.phone = res.data.results[i].phone;
        userObj.email = res.data.results[i].email;
        userObj.dob = moment(res.data.results[i].dob.date).format("MMM Do YYYY");

        userArr.push(userObj);
      }

      setUsers(userArr);
      setOGUser(userArr);
      
    });
  },[])

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.target.value);
    filterByName(search);
  };

  const filterByName = (search) => {
    if (search === "") {
      setUsers(ogUser);
    } else {
      const newUsers = users.filter(user => user.name.toLowerCase().includes(search));
    setUsers(newUsers);
    };
  }

  return (
    
    <div>
      <Header />
      <Searchbar handleSubmit={handleSubmit} setSearch={setSearch}/>
      <Table 
      users={users}
      />
    </div>

  );
}

export default App;
