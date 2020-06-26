import axios from 'axios';

export default {
  getRandomEmployees: function() {
    return axios.get('https://randomuser.me/api/?results=75&nat=us&seed=8b2435c44546afad');
  }
};
