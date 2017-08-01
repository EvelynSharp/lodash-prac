import React from 'react';
import axios from 'axios';

class Species extends React.Component {
  defaultData = { species: {} }
  state = { ...this.defaultData }

  // componentDidMount = () => {
  //   this.setState( {...this.defaultData} )
  // }

  getSpecies = () => {

    axios.get('http://swapi.co/api/species/1/')
      .then( res => this.setState( { species: res.data } ) )
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <div>
        Species
        <button onClick={this.getSpecies}>Get Species</button>
      </div>
    )
  }
}

export default Species;
