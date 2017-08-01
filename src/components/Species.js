import React from 'react';
import axios from 'axios';
import _ from 'lodash';

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

  useCompact = () => {
    let { species } = this.state;
    let newArr = species.skin_colors.split(', ').map( s => {
      if ( s === 'asian')
        return true
      return false
    })
    return _.compact(newArr).length;
  }

  render() {
    let { species } = this.state;
    console.log(species);
    return(
      <div>
        Species
        <button onClick={this.getSpecies}>Get Species</button>
        <div>
          { !_.isEmpty(species) &&
            <div>
              <div>Chunck: <span>{_.chunk(species.films, 2)[0].join('***')}</span></div>
              <div>Compact (Asian Count): <span>
                  { this.useCompact() }
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Species;
