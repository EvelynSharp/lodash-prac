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
//    console.log(_.concat(newArr, [1]) )
    return _.compact(newArr).length;
  }

  useDrop = () => {
    let { species } = this.state;
    let arr1 = species.skin_colors.split(', ');
    let arr2 = _.drop(arr1, 2);
    let arr3 = _.dropRight(arr1,2);
    // console.log(arr1)
    // console.log(arr2)
    // console.log(arr3)
    let arr4 = _.dropRightWhile( [1,2,1,1], v => { return v===1} )
    let arr5 = _.dropWhile( [1,2,1,1], v => { return v===1} )
    // console.log(arr4)
    // console.log(arr5)
    return arr2.join(' ')
  }

  useFind = () => {
    let arr = this.state.species.skin_colors.split(', ');
    let asianIndex = _.findIndex(arr, n => n === 'asian')
    let blackIndex = _.findLastIndex(arr, n => n === 'black')
    // console.log(asianIndex);
    // console.log(blackIndex);
    let arr1 = [1, 2, 3];
    let x = _.head(arr1);
    // console.log(x)
    // console.log(arr1)
    //console.log(_.flatten(_.flatten( [1, [2, [3, [4]], 5]] )) )
    //console.log(_.flattenDeep( [ 1, [2, [3]],[4] ] ))
    return asianIndex+' '+blackIndex
  }

  render() {
    let { films,
          average_height,
          average_lifespan,
          designation,
          skin_colors
        } = this.state.species;
    console.log(this.state.species);
    return(
      <div>
        Species
        <button onClick={this.getSpecies}>Get Species</button>
        <div>
          { !_.isEmpty(this.state.species) &&
            <div>
              <div>Chunck: <span>{_.chunk(films, 2)[0].join('***')}</span></div>
              <div>Compact (Asian Count): <span>
                  { this.useCompact() }
                </span>
              </div>
              <div>Diff: <span>{_.difference(skin_colors.split(', '),['asian']).join(' ')}</span></div>
              <div>Drop: {this.useDrop()} </div>
              <div>Fill: {_.fill(skin_colors.split(', '),['*'], 1, 3).join(' ')} </div>
              <div>Find: {this.useFind()} </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Species;
