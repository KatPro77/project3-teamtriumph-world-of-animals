
import axios from 'axios';

export default {
 
  getAnimals: function() {
    return axios.get('/api/animals');
  }
  getAnimal: function(id) {
    return axios.get('/api/animals/' + id);
  }
  // Deletes the animal with the given id
  deleteAnimal: function(id) {
    return axios.delete('/api/animals/' + id);
  }
  // Saves an animal to the database
  saveAnimal: function(animalData) {
    return axios.post('/api/animals', animalData);
  }
};
